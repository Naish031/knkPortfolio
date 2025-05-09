type SkeletonCardProps = {
  title: string;
  description?: string;
};

export const SkeletonCard = ({ title, description }: SkeletonCardProps) => (
  <div className="flex h-full w-full flex-col items-start justify-center gap-2">
    <p className="text-base font-semibold text-white sm:text-lg md:text-2xl">
      {title}
    </p>
    <p className="max-w-lg text-xs text-neutral-200 sm:text-sm md:text-lg">
      {description}
    </p>
  </div>
);

export const cardContent = [
  {
    title: "Carrefour Supermarket (Interior)",
    description:
      "A bustling and vibrant interior of Carrefour, showcasing retail excellence and festive ambiance.",
  },
  {
    title: "Carrefour Supermarket (Exterior - Day View)",
    description:
      "Exterior view of the Carrefour facility, highlighting modern infrastructure and organized site planning.",
  },
  {
    title: "Carrefour Supermarket (Exterior - Night View)",
    description:
      "Nighttime facade of Carrefour with illuminated branding and secure parking.",
  },
  {
    title: "Multan Cricket Stadium (Aerial View)",
    description:
      "A panoramic aerial view of Multan Cricket Stadium, reflecting urban integration and capacity.",
  },
  {
    title: "Serena Hotel in Peshawar",
    description:
      "A luxurious hotel set in the heart of Peshawar, offering premium hospitality and comfort.",
  },
  {
    title: "Piping Equipment at Serena Hotel Peshawar",
    description:
      "High-quality piping equipment installed within the walls, ensuring operational efficiency and a refined aesthetic in a luxury hotel setting at Serena Hotel in Peshawar.",
  },
  {
    title: "Piping Equipment at Serena Hotel Peshawar",
    description:
      "High-quality piping equipment installed within the walls, ensuring operational efficiency and a refined aesthetic in a luxury hotel setting at Serena Hotel in Peshawar.",
  },
  {
    title: "",
    description: "",
  },
  // 9-12
  {
    title: "Serena Hotel in Hunza",
    description:
      "A luxurious hotel set in the midst of Hunza's breathtaking scenery, offering premium hospitality and comfort.",
  },
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
  // 13-16
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
  // 17-20
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
  {
    title: "",
    description: "",
  },
];

export const getCard = (index: number) => {
  const { title, description } = cardContent[index % cardContent.length];
  return <SkeletonCard title={title} description={description} />;
};

export const cards = [
  {
    id: 1,
    content: getCard(0),
    className: "md:col-span-2",
    thumbnail:
      "https://framerusercontent.com/images/ttXrXSNb1n8oEYLP45WFHD04FU.png",
  },
  {
    id: 2,
    content: getCard(1),
    className: "col-span-1",
    thumbnail:
      "https://framerusercontent.com/images/hdI4YOQuAeGVtQiJgvhsam0w.png",
  },
  {
    id: 3,
    content: getCard(2),
    className: "col-span-1",
    thumbnail:
      "https://framerusercontent.com/images/FkEYnsqcXKW9AK6s81X73Wj1Qo.png",
  },
  {
    id: 4,
    content: getCard(3),
    className: "md:col-span-2",
    thumbnail:
      "https://framerusercontent.com/images/BkytBP8atXMHI0NeRH2TrJtxemI.png",
  },
];

export const cardsTwo = [
  {
    id: 1,
    content: getCard(4),
    className: "md:col-span-2",
    thumbnail:
      "https://framerusercontent.com/images/fwIkrrnZgrtdcUhpgSGjACc1s.png",
  },
  {
    id: 2,
    content: getCard(5),
    className: "col-span-1",
    thumbnail:
      "https://framerusercontent.com/images/cW2lRwuRJei1nhMacw7WmPqi8Q8.png",
  },
  {
    id: 3,
    content: getCard(6),
    className: "col-span-1",
    thumbnail:
      "https://framerusercontent.com/images/MymmaAnL3JP1wqw2pPB13FMHw.png",
  },
  {
    id: 4,
    content: getCard(7),
    className: "md:col-span-2",
    thumbnail:
      "https://framerusercontent.com/images/zj1YscUi8nWzlSDuhE1TEAvGGSI.png",
  },
];

export const cardsThree = [
  {
    id: 1,
    content: getCard(8),
    className: "md:col-span-2",
    thumbnail:
      "https://framerusercontent.com/images/UaAE8ooteaaJqL1jsCvt14FQ.png",
  },
  {
    id: 2,
    content: getCard(9),
    className: "col-span-1",
    thumbnail:
      "https://framerusercontent.com/images/GwXAYYlMViFn7WwchNtmTUn4zPI.png",
  },
  {
    id: 3,
    content: getCard(10),
    className: "col-span-1",
    thumbnail:
      "https://framerusercontent.com/images/LsqSpXZScyyy9B457vXh9sOqIo.png",
  },
  {
    id: 4,
    content: getCard(11),
    className: "col-span-1",
    thumbnail:
      "https://framerusercontent.com/images/gQcj10b6NlxVrwWkhkRZnrXg0g.png",
  },
  {
    id: 5,
    content: getCard(12),
    className: "col-span-1",
    thumbnail:
      "https://framerusercontent.com/images/WUz341ah07Uc0ZETn1Au8CyPZY.png",
  },
  {
    id: 6,
    content: getCard(13),
    className: "col-span-1",
    thumbnail:
      "https://framerusercontent.com/images/rmNulOJheGAWuAkptn0Pyl18MwM.png",
  },
  {
    id: 7,
    content: getCard(14),
    className: "col-span-1",
    thumbnail:
      "https://framerusercontent.com/images/whkewh2Oytk3OFn3jOSuVJSCPrU.png",
  },
  {
    id: 8,
    content: getCard(15),
    className: "col-span-1",
    thumbnail:
      "https://framerusercontent.com/images/TCBTHSlAERe1qBfpmgO8E3aQgqI.png",
  },
];

export const cardsFour = [
  {
    id: 1,
    content: getCard(16),
    className: "md:col-span-2",
    thumbnail:
      "https://framerusercontent.com/images/BTuqf8lX0xCEuel4G8wvs2t0Mc.png",
  },
  {
    id: 2,
    content: getCard(17),
    className: "col-span-1",
    thumbnail:
      "https://framerusercontent.com/images/ucEwMpdtQ6sYbJqAhYrODC0XBgs.png",
  },
  {
    id: 3,
    content: getCard(18),
    className: "col-span-1",
    thumbnail:
      "https://framerusercontent.com/images/3RG7N2zCVVVhoXyLbpYWkVwlU2o.png",
  },
  {
    id: 4,
    content: getCard(19),
    className: "md:col-span-2",
    thumbnail:
      "https://framerusercontent.com/images/3RG7N2zCVVVhoXyLbpYWkVwlU2o.png",
  },
];
