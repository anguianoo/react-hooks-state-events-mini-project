import React, { useState } from "react";
import Button from "./Button";

// Whichever button was clicked should have a class of selected.
// The other buttons should not have any class assigned.
// make a state within each button, therefore make Button Component

function CategoryFilter({ categories }) {
  const btnCategories = categories.map((item) => (
    <Button key={item} item={item} children={item}>
      {item}
    </Button>
  ));
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {btnCategories}
    </div>
  );
}

export default CategoryFilter;
