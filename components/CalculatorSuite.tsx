"use client";

import { useMemo, useState } from "react";
import { Area, AreaChart, CartesianGrid, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { amortization, calculateBalanceTransfer, calculateEligibility, calculateEmi, formatInr, formatNumber } from "@/lib/calculators";

export function CalculatorSuite({ type, title, product }: { type: string; title: string; product?: string }) {
  if (type === "eligibility") return <EligibilityCalculator title={title} />;
  if (type === "balance") return <BalanceTransferCalculator title={title} />;
  return <EmiCalculator title={title} product={product} />;
}

function NumberControl({
  label,
  value,
  setValue,
  min,
  max,
  step
}: {
  label: string;
  value: number;
  setValue: (value: number) => void;
  min: number;
  max: number;
  step: number;
}) {
  return (
    <label className="calc-control">
      <span>{label}</span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(event) => setValue(Number(event.target.value))} />
      <input type="number" min={min} max={max} step={step} value={value} onChange={(event) => setValue(Number(event.target.value))} />
    </label>
  );
}

function EmiCalculator({ title, product }: { title: string; product?: string }) {
  const [amount, setAmount] = useState(product === "Home Loan" ? 5000000 : 1000000);
  const [rate, setRate] = useState(product === "Home Loan" ? 8.6 : 11);
  const [years, setYears] = useState(product === "Home Loan" ? 20 : 5);
  const months = years * 12;
  const result = useMemo(() => calculateEmi(amount, rate, months), [amount, rate, months]);
  const rows = useMemo(() => amortization(amount, rate, months), [amount, rate, months]);
  const yearly = useMemo(
    () =>
      Array.from({ length: years }, (_, year) => {
        const slice = rows.slice(year * 12, year * 12 + 12);
        return {
          year: year + 1,
          principal: slice.reduce((sum, row) => sum + row.principal, 0),
          interest: slice.reduce((sum, row) => sum + row.interest, 0),
          balance: slice.at(-1)?.balance ?? 0
        };
      }),
    [rows, years]
  );

  return (
    <section className="calculator-card premium-calculator" aria-labelledby="calculator-title">
      <div className="calculator-inputs">
        <span className="premium-eyebrow">Live loan model</span>
        <h2 id="calculator-title">{title}</h2>
        <p>Adjust each driver and watch repayment economics update instantly.</p>
        <NumberControl label="Loan amount" value={amount} setValue={setAmount} min={50000} max={20000000} step={50000} />
        <NumberControl label="Interest rate (% p.a.)" value={rate} setValue={setRate} min={0} max={30} step={0.1} />
        <NumberControl label="Tenure (years)" value={years} setValue={setYears} min={1} max={30} step={1} />
        <button className="ghost-button" type="button" onClick={() => window.print()}>
          Print Summary
        </button>
      </div>
      <div className="calculator-results sticky-results" aria-live="polite">
        <Metric label="Monthly EMI" value={formatInr(result.emi)} featured />
        <Metric label="Total interest" value={formatInr(result.totalInterest)} />
        <Metric label="Total payable" value={formatInr(result.totalPayable)} />
        <div className="chart-grid">
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={[
                  { name: "Principal", value: amount, fill: "#082D5C" },
                  { name: "Interest", value: result.totalInterest, fill: "#E56A00" }
                ]}
                dataKey="value"
                outerRadius={78}
                label
              />
              <Tooltip formatter={(value: number) => formatInr(value)} />
            </PieChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={yearly}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis tickFormatter={(value) => `${Math.round(Number(value) / 100000)}L`} />
              <Tooltip formatter={(value: number) => formatInr(value)} />
              <Area dataKey="balance" stroke="#082D5C" fill="#F2F6FA" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="table-wrap">
          <table>
            <caption>First 12 months amortization schedule</caption>
            <thead>
              <tr>
                <th>Month</th>
                <th>Principal</th>
                <th>Interest</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {rows.slice(0, 12).map((row) => (
                <tr key={row.month}>
                  <td>{row.month}</td>
                  <td>{formatInr(row.principal)}</td>
                  <td>{formatInr(row.interest)}</td>
                  <td>{formatInr(row.balance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="disclaimer">Calculator results are indicative and do not represent loan approval or final lender pricing.</p>
        <div className="formula-box"><strong>Formula disclosure</strong><p>EMI = P x R x (1 + R)^N / ((1 + R)^N - 1), where R is the monthly interest rate and N is tenure in months.</p></div>
      </div>
    </section>
  );
}

function EligibilityCalculator({ title }: { title: string }) {
  const [income, setIncome] = useState(90000);
  const [obligations, setObligations] = useState(15000);
  const [rate, setRate] = useState(11);
  const [years, setYears] = useState(5);
  const [foir, setFoir] = useState(50);
  const result = calculateEligibility(income, obligations, rate, years * 12, foir);
  return (
    <section className="calculator-card premium-calculator">
      <div className="calculator-inputs">
        <span className="premium-eyebrow">Eligibility estimate</span>
        <h2>{title}</h2>
        <p>Uses an indicative FOIR model for planning. Final eligibility can differ materially.</p>
        <NumberControl label="Monthly income" value={income} setValue={setIncome} min={10000} max={1000000} step={5000} />
        <NumberControl label="Existing monthly obligations" value={obligations} setValue={setObligations} min={0} max={500000} step={2500} />
        <NumberControl label="Expected rate (% p.a.)" value={rate} setValue={setRate} min={0} max={30} step={0.1} />
        <NumberControl label="Desired tenure (years)" value={years} setValue={setYears} min={1} max={30} step={1} />
        <NumberControl label="FOIR assumption (%)" value={foir} setValue={setFoir} min={30} max={70} step={1} />
      </div>
      <div className="calculator-results sticky-results">
        <Metric label="Estimated eligible amount" value={formatInr(result.eligibleAmount)} featured />
        <Metric label="Available EMI capacity" value={formatInr(result.availableEmi)} />
        <Metric label="FOIR used" value={`${formatNumber(foir)}%`} />
        <p className="disclaimer">This is a simplified FOIR estimate. Lenders also assess age, credit history, employer/business stability, location and documents.</p>
      </div>
    </section>
  );
}

function BalanceTransferCalculator({ title }: { title: string }) {
  const [outstanding, setOutstanding] = useState(2500000);
  const [oldRate, setOldRate] = useState(11);
  const [newRate, setNewRate] = useState(9);
  const [years, setYears] = useState(10);
  const [cost, setCost] = useState(25000);
  const result = calculateBalanceTransfer(outstanding, oldRate, years * 12, newRate, cost);
  return (
    <section className="calculator-card premium-calculator">
      <div className="calculator-inputs">
        <span className="premium-eyebrow">Transfer viability</span>
        <h2>{title}</h2>
        <p>Compare old and new repayment economics before moving an existing loan.</p>
        <NumberControl label="Outstanding amount" value={outstanding} setValue={setOutstanding} min={100000} max={20000000} step={50000} />
        <NumberControl label="Existing rate (% p.a.)" value={oldRate} setValue={setOldRate} min={0} max={30} step={0.1} />
        <NumberControl label="New rate (% p.a.)" value={newRate} setValue={setNewRate} min={0} max={30} step={0.1} />
        <NumberControl label="Remaining tenure (years)" value={years} setValue={setYears} min={1} max={30} step={1} />
        <NumberControl label="Processing and transfer cost" value={cost} setValue={setCost} min={0} max={500000} step={5000} />
      </div>
      <div className="calculator-results sticky-results">
        <Metric label="Estimated net savings" value={formatInr(result.netSavings)} featured />
        <Metric label="Current EMI" value={formatInr(result.oldLoan.emi)} />
        <Metric label="New EMI" value={formatInr(result.newLoan.emi)} />
        <Metric label="Break-even time" value={result.breakEvenMonths ? `${result.breakEvenMonths} months` : "Not viable"} />
        <p className="disclaimer">Include foreclosure, legal, valuation and processing charges before deciding to transfer a loan.</p>
      </div>
    </section>
  );
}

function Metric({ label, value, featured = false }: { label: string; value: string; featured?: boolean }) {
  return (
    <div className={featured ? "metric featured" : "metric"}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}
