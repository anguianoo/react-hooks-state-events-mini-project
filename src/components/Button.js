import React, { useState } from "react";

export default function Button({ children, item }) {
  const [isSelected, setSelected] = useState("");
  function handleClassChange(e) {
    e.preventDefault();
    setSelected((current) => !current);
  }
  return (
    <button
      className={isSelected ? "selected" : ""}
      name={item}
      onClick={handleClassChange}
    >
      {children}
    </button>
  );
}
