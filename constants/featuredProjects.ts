export interface Project {
  title: string;
  imageUrl: string;
  categories: string[];
  location?: string;
  details: {
    contractCost: {
      value: string; // The actual cost value
      icon: string; // Path to the icon for contract cost
    };
    typeOfWork: string[]; // Changed to an array of strings
    typeOfWorkIcon: string; // Added a single icon for all types of work
    height: {
      value: string; // The height value
      icon: string; // Path to the icon for height
    };
    time: {
      value: string; // The time value
      icon: string; // Path to the icon for time
    };
  };
}

export interface TabItem {
  value: string;
  label: string;
}

const tabs: TabItem[] = [
  {
    value: "allProjects",
    label: "All Projects",
  },
  {
    value: "commercial",
    label: "Commercial",
  },
  // {
  //   value: "residential",
  //   label: "Residential",
  // },
  {
    value: "otherProjects",
    label: "Other Projects",
  },
];

const featuredProjects: Project[] = [
  {
    title: "Sukh Chayn – F10",
    imageUrl: "/assets/images/projects3x/Sukh.png",
    categories: ["allProjects", "commercial"],
    location: "Islamabad, Pk",
    details: {
      contractCost: {
        value: "220000000",
        icon: "/assets/icons/contract.png",
      },
      typeOfWork: ["Plumbing", "Firefighting"],
      typeOfWorkIcon: "/assets/icons/work.png",
      height: {
        value: "18 Stories",
        icon: "/assets/icons/height.png",
      },
      time: {
        value: "3 Months to Build",
        icon: "/assets/icons/time.png",
      },
    },
  },
  {
    title: "Carrefour Hyper Box",
    imageUrl: "/assets/images/projects3x/Carrefour.png",
    categories: ["allProjects", "commercial"],
    location: "Gujranwala, Pk",
    details: {
      contractCost: {
        value: "150000000",
        icon: "/assets/icons/contract.png",
      },
      typeOfWork: ["Retail", "Construction"],
      typeOfWorkIcon: "/assets/icons/work.png",
      height: {
        value: "5 Stories",
        icon: "/assets/icons/height.png",
      },
      time: {
        value: "6 Months to Build",
        icon: "/assets/icons/time.png",
      },
    },
  },
  {
    title: "Serena Hotel (Hunza)",
    imageUrl: "/assets/images/projects3x/hunzaSerena.png",
    categories: ["allProjects", "commercial"],
    location: "Hunza, Pk",
    details: {
      contractCost: {
        value: "300000000",
        icon: "/assets/icons/contract.png",
      },
      typeOfWork: ["Hospitality", "Construction"],
      typeOfWorkIcon: "/assets/icons/work.png",
      height: {
        value: "10 Stories",
        icon: "/assets/icons/height.png",
      },
      time: {
        value: "1 Year to Build",
        icon: "/assets/icons/time.png",
      },
    },
  },
  {
    title: "Serena Hotel (Peshawar)",
    imageUrl: "/assets/images/projects3x/peshawarSerena.png",
    categories: ["allProjects", "commercial"],
    location: "Peshawar, KPK",
    details: {
      contractCost: {
        value: "250000000",
        icon: "/assets/icons/contract.png",
      },
      typeOfWork: ["Hospitality", "Construction"],
      typeOfWorkIcon: "/assets/icons/work.png",
      height: {
        value: "12 Stories",
        icon: "/assets/icons/height.png",
      },
      time: {
        value: "8 Months to Build",
        icon: "/assets/icons/time.png",
      },
    },
  },
  {
    title: "Serena Hotel (SOST)",
    imageUrl: "/assets/images/projects3x/sostSerena.png",
    categories: ["allProjects", "commercial"],
    location: "Gilgit & Baltistan, Pk",
    details: {
      contractCost: {
        value: "200000000",
        icon: "/assets/icons/contract.png",
      },
      typeOfWork: ["Hospitality", "Construction"],
      typeOfWorkIcon: "/assets/icons/work.png",
      height: {
        value: "8 Stories",
        icon: "/assets/icons/height.png",
      },
      time: {
        value: "9 Months to Build",
        icon: "/assets/icons/time.png",
      },
    },
  },
  {
    title: "District Head Quarter Hospital",
    imageUrl: "/assets/images/projects3x/hospital.png",
    categories: ["allProjects", "commercial"],
    location: "Swabi, KPK",
    details: {
      contractCost: {
        value: "180000000",
        icon: "/assets/icons/contract.png",
      },
      typeOfWork: ["Healthcare", "Construction"],
      typeOfWorkIcon: "/assets/icons/work.png",
      height: {
        value: "4 Stories",
        icon: "/assets/icons/height.png",
      },
      time: {
        value: "1 Year to Build",
        icon: "/assets/icons/time.png",
      },
    },
  },
  {
    title: "Arbab Niaz Cricket Stadium",
    imageUrl: "/assets/images/projects3x/cricket.png",
    categories: ["allProjects", "commercial"],
    location: "Peshawar, KPK",
    details: {
      contractCost: {
        value: "50000000",
        icon: "/assets/icons/contract.png",
      },
      typeOfWork: ["Sports", "Construction"],
      typeOfWorkIcon: "/assets/icons/work.png",
      height: {
        value: "2 Stories",
        icon: "/assets/icons/height.png",
      },
      time: {
        value: "6 Months to Build",
        icon: "/assets/icons/time.png",
      },
    },
  },
  {
    title: "Pakistan Cadet College Manshera",
    imageUrl: "/assets/images/projects3x/hospital.png",
    categories: ["allProjects", "commercial"],
    location: "Mansehra, Pk",
    details: {
      contractCost: {
        value: "120000000",
        icon: "/assets/icons/contract.png",
      },
      typeOfWork: ["Education", "Construction"],
      typeOfWorkIcon: "/assets/icons/work.png",
      height: {
        value: "3 Stories",
        icon: "/assets/icons/height.png",
      },
      time: {
        value: "1 Year to Build",
        icon: "/assets/icons/time.png",
      },
    },
  },
  // {
  //   title: "Villa in Bahria Garden City - 2 Kanal",
  //   imageUrl: "/assets/images/projects3x/2kanal.png",
  //   categories: ["allProjects", "residential"],
  //   location: "Islamabad, Pk",
  //   details: {
  //     contractCost: {
  //       value: "15000000",
  //       icon: "/assets/icons/contract.png",
  //     },
  //     typeOfWork: ["Residential", "Construction"],
  //     typeOfWorkIcon: "/assets/icons/work.png",
  //     height: {
  //       value: "2 Stories",
  //       icon: "/assets/icons/height.png",
  //     },
  //     time: {
  //       value: "8 Months to Build",
  //       icon: "/assets/icons/time.png",
  //     },
  //   },
  // },
  // {
  //   title: "Villa in Bahria Garden City - 5 Kanal",
  //   imageUrl: "/assets/images/projects3x/5kanal.png",
  //   categories: ["allProjects", "residential"],
  //   location: "Islamabad, Pk",
  //   details: {
  //     contractCost: {
  //       value: "25000000",
  //       icon: "/assets/icons/contract.png",
  //     },
  //     typeOfWork: ["Residential", "Construction"],
  //     typeOfWorkIcon: "/assets/icons/work.png",
  //     height: {
  //       value: "3 Stories",
  //       icon: "/assets/icons/height.png",
  //     },
  //     time: {
  //       value: "10 Months to Build",
  //       icon: "/assets/icons/time.png",
  //     },
  //   },
  // },
  // {
  //   title: "House in Bahria Phase 8 - 10 Marlas",
  //   imageUrl: "/assets/images/projects3x/10marla.png",
  //   categories: ["allProjects", "residential"],
  //   location: "Islamabad, Pk",
  //   details: {
  //     contractCost: {
  //       value: "12000000",
  //       icon: "/assets/icons/contract.png",
  //     },
  //     typeOfWork: ["Residential", "Construction"],
  //     typeOfWorkIcon: "/assets/icons/work.png",
  //     height: {
  //       value: "1 Story",
  //       icon: "/assets/icons/height.png",
  //     },
  //     time: {
  //       value: "6 Months to Build",
  //       icon: "/assets/icons/time.png",
  //     },
  //   },
  // },
  // More Projects Incoming
];

export { featuredProjects, tabs };
