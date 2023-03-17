import React from "react";
import Button from "./Button";
const buttonList = () => {
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
    <div className="flex">
      {buttonsCategory.map((button, index) => {
        return <Button name={button} />;
      })}
    </div>
  );
};

export default buttonList;
