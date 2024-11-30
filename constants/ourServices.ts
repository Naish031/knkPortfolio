// Define a type for the accordion item
export type AccordionItem = {
  title: string;
  text: string;
  imageUrl: string;
};

// Create an array of accordion items
export const accordionItems: AccordionItem[] = [
  {
    title: "Heating, Ventilation & Air Condition (HVAC)",
    text: "The choice and design of an HVAC system makes a difference in any living and working environment. This is why we do our best to design quality systems that are cost-competitive while successfully providing an appropriate quality air, lower energy costs, and easier maintenance.",
    imageUrl: "/assets/images/services3x/ventilation.png",
  },
  {
    title: "Plumbing Works",
    text: "The plumbing industry is a basic and substantial part of every building and facility due to the need for clean water, & proper collection & transport of wastes. Given the importance of water in our lives, our installers are extremely careful in the treatment of a resource that is scarce worldwide.",
    imageUrl: "/assets/images/services3x/plumbing.png",
  },
  {
    title: "Electrical Works",
    text: "Power Distribution to Low Voltage System in accordance with the National & International standards to the top quality & efficiency. The Electrical Division carryout all types of electrical systems from, productivity & to the satisfaction of our clients. We build all work related to Electrical Services, Building Management System, Medium & Low Voltage Switchgear, Cabling Electrical Distribution System & Low Voltage Power & Control System.",
    imageUrl: "/assets/images/services3x/electrical.png",
  },
  {
    title: "Firefighting Works",
    text: "Our purpose behind our Fire protection practice is based on three vital goals: The continuity of operations, property protection and last but not least life safety.",
    imageUrl: "/assets/images/services3x/firefighting.png",
  },
  {
    title: "Civil Works",
    text: "The choice and design of an HVAC system makes a difference in any living and working environment. This is why we do our best to design quality systems that are cost-competitive while successfully providing an appropriate quality air, lower energy costs, and easier maintenance.",
    imageUrl: "/assets/images/services3x/civil.png",
  },
  {
    title: "Lift & Escalator Installation",
    text: "we specialize in the seamless installation of lifts and escalators, providing reliable and efficient solutions tailored to meet the unique needs of our clients. Whether for residential, commercial, or industrial spaces, our expert team ensures the highest standards of safety, quality, and functionality.",
    imageUrl: "/assets/images/services3x/esclator.png",
  },
];

export default accordionItems;
