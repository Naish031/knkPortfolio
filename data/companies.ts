export const companies = {
  kktek: {
    title: "About K&K Tek (SMC-Pvt) Ltd",
    image:
      "https://framerusercontent.com/images/eohpXiurvFgLhIc8mefklb27mxo.jpg",
    content: `At K&K Tek, we specialize in delivering innovative building solutions that redefine the standards of Civil and MEP (Mechanical, Electrical, and Plumbing) engineering. As a trusted contractor and service provider, we combine cutting-edge technologies with unparalleled craftsmanship to bring your projects to life. From high-rise buildings and five-star hotels to industrial facilities, we ensure excellence in every detail.`,
    subheadings: {
      "Our Mission":
        "To provide sustainable, high-quality Civil and MEP solutions that exceed client expectations, ensuring safety, efficiency, and environmental responsibility.",
      "Our Vision":
        "To be the global leader in building solutions, renowned for our reliability, technical expertise, and commitment to excellence in engineering and construction.",
    },
    services: {
      heading: "Our Services",
      description:
        "Today, we are one of the largest Engineering firms in the country, with a workforce of over 1000 dedicated employees led by a team of seasoned professionals. KNK has built and maintained a robust portfolio of satisfied customers across Pakistan, offering comprehensive services in HVAC, M.E.P, power generation, civil construction, and operation & maintenance.",
      list: [
        {
          title: "HVAC",
          description:
            "Comprehensive heating, ventilation, and air conditioning solutions for superior indoor environments.",
          icon: "1",
        },
        {
          title: "Firefighting Works",
          description:
            "State-of-the-art fire protection services to safeguard life and property.",
          icon: "2",
        },
        {
          title: "Plumbing Work",
          description:
            "Advanced systems ensuring optimal water distribution, sanitation, and waste management.",
          icon: "3",
        },
        {
          title: "Electrical Work",
          description:
            "Efficient power distribution and control systems designed to international standards.",
          icon: "4",
        },
        {
          title: "Civil Work",
          description:
            "Structurally sound and aesthetically remarkable infrastructure solutions.",
          icon: "5",
        },
      ],
    },
  },
  kza: {
    title: "About KZA (SMC-Pvt) Ltd",
    image:
      "https://framerusercontent.com/images/z1n8PeIlVA2Z7zW4lIbrWJFz9Xk.jpg",
    content: `KZ Associates is a leading engineering consultancy firm specializing in MEP (Mechanical, Electrical, and Plumbing) solutions for the commercial, residential, and industrial sectors. Since its establishment in 2020, we have been committed to delivering sustainable, innovative, and cost-effective engineering designs and project management services. From high-rise buildings to healthcare facilities, our extensive expertise ensures precision, efficiency, and excellence in every project.`,
    subheadings: {
      "Our Mission":
        "To provide the best consultancy and project management services in the MEP sector by delivering quality, timely, and value-added engineering solutions tailored to our clients' technical and financial needs.",
      "Our Vision":
        "To be recognized as a benchmark for engineering consultancy, offering unparalleled expertise and sustainable solutions in MEP design, project management, and supervision.",
    },
    services: {
      heading: "Our Services",
      description:
        "KZ Associates is your trusted partner for transformative engineering solutions, setting industry standards and driving success through excellence.",
      list: [
        {
          title: "Project Management Services",
          description:
            "Overseeing projects with precision, ensuring timely execution, and budget control.",
          icon: "1",
        },
        {
          title: "MEP Design Services",
          description:
            "Comprehensive HVAC, fire protection, plumbing, and electrical system designs.",
          icon: "2",
        },
        {
          title: "Supervision & Quality Assurance",
          description:
            "Maintaining the highest standards of safety, functionality, and sustainability.",
          icon: "3",
        },
        {
          title: "Innovation & Sustainability",
          description:
            "Crafting solutions that meet the newest industry trends and environmental standards.",
          icon: "4",
        },
      ],
    },
  },
  kktameer: {
    title: "About K&K Tameer (SMC-Pvt) Ltd",
    image: "https://framerusercontent.com/images/94iei98eKWCkMINJ8Llgrr1A.jpg",
    content: "Coming Soon",
    subheadings: {},
    services: {
      heading: "Our Services",
      description:
        "K&K Tameer is your trusted partner for transformative engineering solutions, setting industry standards and driving success through excellence.",
      list: [
        {
          title: "Coming Soon",
          description: "Coming Soon",
          icon: "🏗️",
        },
      ],
    },
  },
} as const;

export type CompanySlug = keyof typeof companies;
