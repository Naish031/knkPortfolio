export interface Project {
  title: string;
  imageUrl: string;
  categories: string[];
  location?: string;
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
  {
    value: "residential",
    label: "Residential",
  },
  {
    value: "otherProjects",
    label: "Other Projects",
  },
];

const featuredProjects: Project[] = [
  // Commercial Projects Begin
  {
    title: "Sukh Chayn – F10",
    imageUrl: "/assets/images/projects3x/Sukh.png",
    categories: ["allProjects", "commercial"],
    location: "Islamabad, Pk",
  },
  {
    title: "Carrefour Hyper Box",
    imageUrl: "/assets/images/projects3x/Carrefour.png",
    categories: ["allProjects", "commercial"],
    location: "Gujranwala, Pk",
  },
  {
    title: "Serena Hotel (Hunza)",
    imageUrl: "/assets/images/projects3x/hunzaSerena.png",
    categories: ["allProjects", "commercial"],
    location: "Hunza, Pk",
  },
  {
    title: "Serena Hotel (Peshawar)",
    imageUrl: "/assets/images/projects3x/peshawarSerena.png",
    categories: ["allProjects", "commercial"],
    location: "Peshawar, KPK",
  },
  {
    title: "Serena Hotel (SOST)",
    imageUrl: "/assets/images/projects3x/serenaSost.png",
    categories: ["allProjects", "commercial"],
    location: "Gilgit & Baltistan, Pk",
  },
  {
    title: "District Head Quarter Hospital",
    imageUrl: "/assets/images/projects3x/hospital.png",
    categories: ["allProjects", "commercial"],
    location: "Swabi, KPK",
  },
  {
    title: "Arbab Niaz Cricket Stadium",
    imageUrl: "/assets/images/projects3x/cricket.png",
    categories: ["allProjects", "commercial"],
    location: "Peshawar, KPK",
  },
  {
    title: "Pakistan Cadet College Manshera",
    imageUrl: "/assets/images/projects3x/hospital.png",
    categories: ["allProjects", "commercial"],
    location: "Mansehra, Pk",
  },

  // Residential Projects Begin
  {
    title: "Villa in Bahria Garden City - 2 Kanal",
    imageUrl: "/assets/images/projects3x/2kanal.png",
    categories: ["allProjects", "residential"],
    location: "Islamabad, Pk",
  },
  {
    title: "Villa in Bahria Garden City - 5 Kanal",
    imageUrl: "/assets/images/projects3x/5kanal.png",
    categories: ["allProjects", "residential"],
    location: "Islamabad, Pk",
  },
  {
    title: "House in Bahria Phase 8 - 10 Marlas",
    imageUrl: "/assets/images/projects3x/10marla.png",
    categories: ["allProjects", "residential"],
    location: "Islamabad, Pk",
  },
  // More Projects Incoming
];

export { featuredProjects, tabs };
