export interface ProjectImage {
  title?: string;
  location?: string;
  projectType?: string;
  src?: string;
}

export interface Project {
  heading: string;
  images: ProjectImage[];
}

export const projects = {
  kktek: {
    heading: "K&K Tek (SMC-Pvt) Ltd",
    images: [
      {
        title: "Sukh Chayn",
        location: "Islamabad, Pakistan",
        projectType: "Commercial Design",
        src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Serena Peshawar",
        location: "Peshawar, Pakistan",
        projectType: "Commercial Design",
        src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Serana Sost",
        location: "Sost, Pakistan",
        projectType: "Commercial Design",
        src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Carrefour Hyper Box",
        location: "Gujranwala, Pakistan",
        projectType: "Commercial Design",
        src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "District Head Quarter Hospital",
        location: "Swabi (KPK), Pakistan",
        projectType: "Commercial Design",
        src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Arbab Niaz Cricket Stadium",
        location: "Swabi (KPK), Pakistan",
        projectType: "Commercial Design",
        src: "https://assets.aceternity.com/the-first-rule.png",
      },
      {
        title: "Pakistan Cadet College",
        location: "Manshera, Pakistan",
        projectType: "Commercial Design",
        src: "https://assets.aceternity.com/the-first-rule.png",
      },
    ],
  },
  kza: {
    heading: "KZA (SMC-Pvt) Ltd",
    images: [
      {
        title: "Serena Hunza",
        location: "Hunza, Pakistan",
        projectType: "Commercial Design",
        src: "https://assets.aceternity.com/the-first-rule.png",
      },
    ],
  },
  kktameer: {
    heading: "K&K Tameer (SMC-Pvt) Ltd",
    images: [],
  },
} satisfies Record<string, Project>;

export type ProjectSlug = keyof typeof projects;
