type SkeletonCardProps = {
  title: string;
  description?: string;
};

export const SkeletonCard = ({ title, description }: SkeletonCardProps) => (
  <div>
    <p className="text-xl font-semibold text-white md:text-2xl">{title}</p>
    <p className="my-4 max-w-lg text-sm font-normal text-neutral-200 md:text-base">
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
    title: "House in the mountains",
    description:
      "A house in the mountains is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
  },
  {
    title: "House in the desert",
    description:
      "A house in the desert is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
  },
  {
    title: "House in the city",
    description:
      "A house in the city is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
  },
  {
    title: "House in the forest",
    description:
      "A house in the forest is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
  },
];

// Helper to get card content
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
    content: getCard(0),
    className: "md:col-span-2",
    thumbnail:
      "https://framerusercontent.com/images/fwIkrrnZgrtdcUhpgSGjACc1s.png",
  },
  {
    id: 2,
    content: getCard(1),
    className: "col-span-1",
    thumbnail:
      "https://framerusercontent.com/images/cW2lRwuRJei1nhMacw7WmPqi8Q8.png",
  },
  {
    id: 3,
    content: getCard(2),
    className: "col-span-1",
    thumbnail:
      "https://framerusercontent.com/images/EOwemIGfB2V7vWuqPVfhwJpBQ8.png",
  },
  {
    id: 4,
    content: getCard(3),
    className: "md:col-span-2",
    thumbnail:
      "https://framerusercontent.com/images/zj1YscUi8nWzlSDuhE1TEAvGGSI.png",
  },
];

export const cardsThree = [
  {
    id: 1,
    content: getCard(0),
    className: "md:col-span-2",
    thumbnail:
      "https://framerusercontent.com/images/UaAE8ooteaaJqL1jsCvt14FQ.png",
  },
  {
    id: 2,
    content: getCard(1),
    className: "col-span-1",
    thumbnail:
      "https://framerusercontent.com/images/GwXAYYlMViFn7WwchNtmTUn4zPI.png",
  },
  {
    id: 3,
    content: getCard(2),
    className: "col-span-1",
    thumbnail:
      "https://framerusercontent.com/images/LsqSpXZScyyy9B457vXh9sOqIo.png",
  },
  {
    id: 4,
    content: getCard(3),
    className: "col-span-1",
    thumbnail:
      "https://framerusercontent.com/images/gQcj10b6NlxVrwWkhkRZnrXg0g.png",
  },
  {
    id: 5,
    content: getCard(4),
    className: "col-span-1",
    thumbnail:
      "https://framerusercontent.com/images/WUz341ah07Uc0ZETn1Au8CyPZY.png",
  },
  {
    id: 6,
    content: getCard(5),
    className: "col-span-1",
    thumbnail:
      "https://framerusercontent.com/images/rmNulOJheGAWuAkptn0Pyl18MwM.png",
  },
  {
    id: 7,
    content: getCard(6),
    className: "col-span-1",
    thumbnail:
      "https://framerusercontent.com/images/whkewh2Oytk3OFn3jOSuVJSCPrU.png",
  },
  {
    id: 8,
    content: getCard(7),
    className: "col-span-1",
    thumbnail:
      "https://framerusercontent.com/images/TCBTHSlAERe1qBfpmgO8E3aQgqI.png",
  },
];

export const cardsFour = [
  {
    id: 1,
    content: getCard(0),
    className: "md:col-span-2",
    thumbnail:
      "https://framerusercontent.com/images/BTuqf8lX0xCEuel4G8wvs2t0Mc.png",
  },
  {
    id: 2,
    content: getCard(1),
    className: "col-span-1",
    thumbnail:
      "https://framerusercontent.com/images/ucEwMpdtQ6sYbJqAhYrODC0XBgs.png",
  },
  {
    id: 3,
    content: getCard(2),
    className: "col-span-1",
    thumbnail:
      "https://framerusercontent.com/images/3RG7N2zCVVVhoXyLbpYWkVwlU2o.png",
  },
  {
    id: 4,
    content: getCard(3),
    className: "md:col-span-2",
    thumbnail:
      "https://framerusercontent.com/images/3RG7N2zCVVVhoXyLbpYWkVwlU2o.png",
  },
];
