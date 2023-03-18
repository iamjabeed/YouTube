import React from "react";
import Button from "./Button";
const ButtonList = () => {
  const buttonsCategory = [
    "All",
    "Latest",
    "Cricket",
    "News",
    "Live",
    "Gaming",
    "Urdu",
    "Football",
  ];
  return (
    <div className="hidden md:flex">
      {buttonsCategory.map((button, index) => {
        return <Button key={index} name={button} />;
      })}
    </div>
  );
};

export default ButtonList;
