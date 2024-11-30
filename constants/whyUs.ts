export const companyDetails = {
  title: "Why Us?",
  description:
    "We have the ability to go wherever our clients need, delivering in over 13 cities in Pakistan, and Our team is composed of the best and brightest in the industry.",
};

export const featureSet = [
  {
    icon: "/assets/images/whyUs/iconGreen.png",
    title: "Mission Statement",
    description:
      "To become the customer’s most preferred choice by attaining excellence in quality & timely completed value-added projects.",
  },
  {
    icon: "/assets/images/whyUs/iconGreen.png",
    title: "Our Vision",
    description:
      "To be the leading service provider of MEP, renowned for Excellence, Quality, Performance & Reliability in electromechanical works in the Global market.",
  },
];



export interface CompanyProjectsInfo {
  number: number;
  title: string;
}

export const companyProjectsInfo: CompanyProjectsInfo[] = [
  {
    number: 13,
    title: "Completed Projects",
  },
  {
    number: 3,
    title: "Active Projects", 
  },
  {
    number: 13,
    title: "Cities Covered",
  },
  {
    number: 27,
    title: "Happy Clients",
  }
];
