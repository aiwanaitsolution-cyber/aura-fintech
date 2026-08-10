const serviceImageMap: Record<string, string> = {
  "business-loan": "/assets/service/buisnessloan.png",
  "home-loan": "/assets/service/homeloan.png",
  "term-loan": "/assets/service/projectfinanceloan.png",
  "loan-against-property": "/assets/service/loanagaintsproperty.png",
  "surety-bonds": "/assets/service/projectfinanceloan.png",
  "bills-discounting": "/assets/service/workingcapitalloan.png",
  "vehicle-loan": "/assets/service/workingcapitalloan.png",
  "working-capital-loan": "/assets/service/workingcapitalloan.png",
  "msme-loan": "/assets/service/msme.png",
  "project-finance": "/assets/service/projectfinanceloan.png",
  "balance-transfer": "/assets/service/loanagaintsproperty.png"
};

export function getServiceImage(slug: string) {
  return serviceImageMap[slug] ?? "/assets/service/buisnessloan.png";
}
