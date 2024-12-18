import React from "react";

interface TitleProps {
  text: string;
  className?: string;
}

const Title = ({ text, className = "" }: TitleProps) => {
  return (
    <h1
      className={`text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${className}`}
    >
      {text}
    </h1>
  );
};

export default Title;
