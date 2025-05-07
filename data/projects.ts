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
        src: "https://framerusercontent.com/images/mN5ZpQ2zXiPFy7K4EAaZw56P7Y.png",
      },
      {
        title: "Serena Peshawar",
        location: "Peshawar, Pakistan",
        projectType: "Commercial Design",
        src: "https://framerusercontent.com/images/g035WAXyhrgj4ZIWA0o1l6TWWE.png",
      },
      {
        title: "Serana Sost",
        location: "Sost, Pakistan",
        projectType: "Commercial Design",
        src: "https://framerusercontent.com/images/XOW3AyPJCHVw4Az57TGmuDvDIlk.png",
      },
      {
        title: "Carrefour Hyper Box",
        location: "Gujranwala, Pakistan",
        projectType: "Commercial Design",
        src: "https://framerusercontent.com/images/l73pIKzDYfs8DM5u8uNG6maZtg.png",
      },
      {
        title: "District Head Quarter Hospital",
        location: "Swabi (KPK), Pakistan",
        projectType: "Commercial Design",
        src: "https://framerusercontent.com/images/k32XK5LC7nEiQifMlYIgrDS5pMY.png",
      },
      {
        title: "Arbab Niaz Cricket Stadium",
        location: "Swabi (KPK), Pakistan",
        projectType: "Commercial Design",
        src: "https://framerusercontent.com/images/Ux66Ts6iJi0SvZ8vS4Cu1okvU.png",
      },
      {
        title: "Pakistan Cadet College",
        location: "Manshera, Pakistan",
        projectType: "Commercial Design",
        src: "https://framerusercontent.com/images/VH7rmtLsfTgMuGLB18qriUODQ.png",
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
        src: "https://framerusercontent.com/images/E1ObmEHhLOIltjCDQ1kUgOm9ZeY.png",
      },
    ],
  },
  kktameer: {
    heading: "K&K Tameer (SMC-Pvt) Ltd",
    images: [],
  },
} satisfies Record<string, Project>;

export type ProjectSlug = keyof typeof projects;
