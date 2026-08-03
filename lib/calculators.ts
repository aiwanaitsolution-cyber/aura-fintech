export const formatInr = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(Number.isFinite(value) ? value : 0);

export const formatNumber = (value: number) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Number.isFinite(value) ? value : 0);

export function calculateEmi(principal: number, annualRate: number, months: number) {
  if (principal <= 0 || annualRate < 0 || months <= 0) {
    return { emi: 0, totalInterest: 0, totalPayable: 0 };
  }
  const monthlyRate = annualRate / 12 / 100;
  const emi =
    monthlyRate === 0
      ? principal / months
      : (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  const totalPayable = emi * months;
  return { emi, totalInterest: totalPayable - principal, totalPayable };
}

export function amortization(principal: number, annualRate: number, months: number) {
  const { emi } = calculateEmi(principal, annualRate, months);
  const monthlyRate = annualRate / 12 / 100;
  let balance = principal;
  return Array.from({ length: Math.min(months, 360) }, (_, index) => {
    const interest = balance * monthlyRate;
    const principalPaid = Math.min(emi - interest, balance);
    balance = Math.max(0, balance - principalPaid);
    return {
      month: index + 1,
      emi,
      principal: principalPaid,
      interest,
      balance
    };
  });
}

export function calculateEligibility(income: number, obligations: number, annualRate: number, months: number, foir: number) {
  const availableEmi = Math.max(0, income * (foir / 100) - obligations);
  if (availableEmi <= 0 || months <= 0) return { availableEmi: 0, eligibleAmount: 0 };
  const monthlyRate = annualRate / 12 / 100;
  const eligibleAmount =
    monthlyRate === 0
      ? availableEmi * months
      : (availableEmi * (Math.pow(1 + monthlyRate, months) - 1)) /
        (monthlyRate * Math.pow(1 + monthlyRate, months));
  return { availableEmi, eligibleAmount };
}

export function calculateBalanceTransfer(
  outstanding: number,
  oldRate: number,
  remainingMonths: number,
  newRate: number,
  processingCost: number
) {
  const oldLoan = calculateEmi(outstanding, oldRate, remainingMonths);
  const newLoan = calculateEmi(outstanding, newRate, remainingMonths);
  const grossSavings = oldLoan.totalPayable - newLoan.totalPayable;
  const netSavings = grossSavings - processingCost;
  const monthlySavings = oldLoan.emi - newLoan.emi;
  const breakEvenMonths = monthlySavings > 0 ? Math.ceil(processingCost / monthlySavings) : 0;
  return { oldLoan, newLoan, grossSavings, netSavings, monthlySavings, breakEvenMonths };
}
