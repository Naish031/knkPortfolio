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

// Define gallery data with proper structure
export const galleryData = {
  main: [
    {
      id: 1,
      title: "Carrefour Supermarket (Interior)",
      description:
        "A bustling and vibrant interior of Carrefour, showcasing retail excellence and festive ambiance.",
      thumbnail:
        "https://framerusercontent.com/images/ttXrXSNb1n8oEYLP45WFHD04FU.png",
      className: "md:col-span-2",
    },
    {
      id: 2,
      title: "Carrefour Supermarket (Exterior - Day View)",
      description:
        "Exterior view of the Carrefour facility, highlighting modern infrastructure and organized site planning.",
      thumbnail:
        "https://framerusercontent.com/images/hdI4YOQuAeGVtQiJgvhsam0w.png",
      className: "col-span-1",
    },
    {
      id: 3,
      title: "Carrefour Supermarket (Exterior - Night View)",
      description:
        "Nighttime facade of Carrefour with illuminated branding and secure parking.",
      thumbnail:
        "https://framerusercontent.com/images/FkEYnsqcXKW9AK6s81X73Wj1Qo.png",
      className: "col-span-1",
    },
    {
      id: 4,
      title: "Multan Cricket Stadium (Aerial View)",
      description:
        "A panoramic aerial view of Multan Cricket Stadium, reflecting urban integration and capacity.",
      thumbnail:
        "https://framerusercontent.com/images/BkytBP8atXMHI0NeRH2TrJtxemI.png",
      className: "md:col-span-2",
    },
    {
      id: 5,
      title: "Serena Hotel in Peshawar",
      description:
        "A luxurious hotel set in the heart of Peshawar, offering premium hospitality and comfort.",
      thumbnail: "/assets/images/gallery/pakistanCadetOne.jpg",
      className: "md:col-span-2",
    },
    {
      id: 6,
      title: "Serena Hotel in Hunza",
      description:
        "A luxurious hotel set in the midst of Hunza's breathtaking scenery, offering premium hospitality and comfort.",
      thumbnail: "/assets/images/gallery/SerenaHunza.jpg",
      className: "md:col-span-2",
    },
  ],
  serenaPeshawar: [
    {
      id: 1,
      title: "Serena Hotel in Peshawar",
      description:
        "A luxurious hotel set in the heart of Peshawar, offering premium hospitality and comfort.",
      thumbnail:
        "https://framerusercontent.com/images/fwIkrrnZgrtdcUhpgSGjACc1s.png",
      className: "md:col-span-2",
    },
    {
      id: 2,
      title: "Piping Equipment at Serena Hotel Peshawar",
      description:
        "High-quality piping equipment installed within the walls, ensuring operational efficiency and a refined aesthetic in a luxury hotel setting at Serena Hotel in Peshawar.",
      thumbnail:
        "https://framerusercontent.com/images/cW2lRwuRJei1nhMacw7WmPqi8Q8.png",
      className: "col-span-1",
    },
    {
      id: 3,
      title: "",
      description: "",
      thumbnail:
        "https://framerusercontent.com/images/MymmaAnL3JP1wqw2pPB13FMHw.png",
      className: "col-span-1",
    },
    {
      id: 4,
      title: "",
      description: "",
      thumbnail:
        "https://framerusercontent.com/images/zj1YscUi8nWzlSDuhE1TEAvGGSI.png",
      className: "col-span-1",
    },
    {
      id: 5,
      title: "",
      description: "",
      thumbnail: "/assets/images/gallery/SerenaPeshawarOne.jpg",
      className: "col-span-1",
    },
    {
      id: 6,
      title: "",
      description: "",
      thumbnail: "/assets/images/gallery/SerenaPeshawarTwo.jpg",
      className: "col-span-1",
    },
    {
      id: 7,
      title: "",
      description: "",
      thumbnail: "/assets/images/gallery/SerenaPeshawarThree.jpg",
      className: "col-span-1",
    },
    {
      id: 8,
      title: "",
      description: "",
      thumbnail: "/assets/images/gallery/SerenaPeshawarFour.jpg",
      className: "col-span-1",
    },
    {
      id: 9,
      title: "",
      description: "",
      thumbnail: "/assets/images/gallery/SerenaPeshawarFive.jpg",
      className: "col-span-1",
    },
    {
      id: 10,
      title: "",
      description: "",
      thumbnail: "/assets/images/gallery/SerenaPeshawarSix.jpg",
      className: "col-span-1",
    },
    {
      id: 11,
      title: "",
      description: "",
      thumbnail: "/assets/images/gallery/SerenaPeshawarSeven.jpg",
      className: "col-span-1",
    },
    {
      id: 12,
      title: "",
      description: "",
      thumbnail: "/assets/images/gallery/SerenaPeshawarEight.jpg",
      className: "col-span-1",
    },
  ],
  serenaHunza: [
    {
      id: 1,
      title: "Serena Hotel in Hunza",
      description:
        "A luxurious hotel set in the midst of Hunza's breathtaking scenery, offering premium hospitality and comfort.",
      thumbnail:
        "https://framerusercontent.com/images/UaAE8ooteaaJqL1jsCvt14FQ.png",
      className: "md:col-span-2",
    },
    {
      id: 2,
      title: "",
      description: "",
      thumbnail:
        "https://framerusercontent.com/images/GwXAYYlMViFn7WwchNtmTUn4zPI.png",
      className: "col-span-1",
    },
    {
      id: 3,
      title: "",
      description: "",
      thumbnail:
        "https://framerusercontent.com/images/LsqSpXZScyyy9B457vXh9sOqIo.png",
      className: "col-span-1",
    },
    {
      id: 4,
      title: "",
      description: "",
      thumbnail:
        "https://framerusercontent.com/images/gQcj10b6NlxVrwWkhkRZnrXg0g.png",
      className: "col-span-1",
    },
    {
      id: 5,
      title: "",
      description: "",
      thumbnail:
        "https://framerusercontent.com/images/WUz341ah07Uc0ZETn1Au8CyPZY.png",
      className: "col-span-1",
    },
    {
      id: 6,
      title: "",
      description: "",
      thumbnail:
        "https://framerusercontent.com/images/whkewh2Oytk3OFn3jOSuVJSCPrU.png",
      className: "col-span-1",
    },
    {
      id: 7,
      title: "",
      description: "",
      thumbnail: "/assets/images/gallery/SerenaHunzaOne.jpg",
      className: "col-span-1",
    },
    {
      id: 8,
      title: "",
      description: "",
      thumbnail: "/assets/images/gallery/SerenaHunzaTwo.jpg",
      className: "col-span-1",
    },
    {
      id: 9,
      title: "",
      description: "",
      thumbnail: "/assets/images/gallery/SerenaHunzaThree.jpg",
      className: "col-span-1",
    },
    // Add more Serena Hunza entries...
  ],

  pakistanCadet: [
    {
      id: 1,
      title: "",
      description: "",
      thumbnail:
        "https://framerusercontent.com/images/BTuqf8lX0xCEuel4G8wvs2t0Mc.png",
      className: "md:col-span-2",
    },
    {
      id: 2,
      title: "",
      description: "",
      thumbnail:
        "https://framerusercontent.com/images/ucEwMpdtQ6sYbJqAhYrODC0XBgs.png",
      className: "col-span-1",
    },
    {
      id: 3,
      title: "",
      description: "",
      thumbnail:
        "https://framerusercontent.com/images/3RG7N2zCVVVhoXyLbpYWkVwlU2o.png",
      className: "col-span-1",
    },
    {
      id: 4,
      title: "",
      description: "",
      thumbnail: "/assets/images/gallery/pakistanCadetOne.jpg",
      className: "md:col-span-2",
    },
    {
      id: 5,
      title: "",
      description: "",
      thumbnail: "/assets/images/gallery/PakistanCadetTwo.jpg",
      className: "md:col-span-2",
    },
    {
      id: 6,
      title: "",
      description: "",
      thumbnail: "/assets/images/gallery/PakistanCadetThree.jpg",
      className: "md:col-span-2",
    },
    // Add Pakistan Cadet College entries...
  ],

  sukhChayn: [
    {
      id: 1,
      title: "",
      description: "",
      thumbnail: "/assets/images/gallery/SukhChaynOne.jpg",
      className: "md:col-span-2",
    },
    {
      id: 2,
      title: "",
      description: "",
      thumbnail: "/assets/images/gallery/SukhChaynTwo.jpg",
      className: "md:col-span-2",
    },
    {
      id: 3,
      title: "",
      description: "",
      thumbnail: "/assets/images/gallery/SukhChaynThree.jpg",
      className: "md:col-span-2",
    },
    {
      id: 4,
      title: "",
      description: "",
      thumbnail: "/assets/images/gallery/SukhChaynFour.jpg",
      className: "md:col-span-2",
    },
    {
      id: 5,
      title: "",
      description: "",
      thumbnail: "/assets/images/gallery/SukhChaynFive.jpg",
      className: "md:col-span-2",
    },
    {
      id: 6,
      title: "",
      description: "",
      thumbnail: "/assets/images/gallery/SukhChaynSix.jpg",
      className: "md:col-span-2",
    },
    // Add Sukh Chayn entries...
  ],
};

// Helper function to create card content
const createCardContent = (item: { title: string; description?: string }) => (
  <SkeletonCard title={item.title} description={item.description} />
);

// Generate cards with proper typing
export const createGalleryCards = (galleryKey: keyof typeof galleryData) => {
  return galleryData[galleryKey].map((item) => ({
    id: item.id,
    content: createCardContent(item),
    className: item.className,
    thumbnail: item.thumbnail,
  }));
};

// Export specific gallery collections
export const cards = createGalleryCards("main");
export const cardsTwo = createGalleryCards("serenaPeshawar");
export const cardsThree = createGalleryCards("serenaHunza");
export const cardsFour = createGalleryCards("pakistanCadet");
export const cardsFive = createGalleryCards("sukhChayn");



