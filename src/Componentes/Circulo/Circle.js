import { useState } from "react";

const Circle = () => {
  const [selected, setSelected] = useState(false);
  const toggleSelected = () => {
    setSelected(!selected);
  };
  return (
    <div
      className={`circle${selected ? " on" : ""}`}
      onClick={toggleSelected}
    ></div>
  );
};

export default Circle;
