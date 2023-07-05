import React, { useState } from "react";
import { Item } from "../item/Item";

function ItemsList() {
  const [items, setItems] = useState([
    { name: "boots", brand: "Abibas", price: 150 },
    { name: "gloves", brand: "Abibas", price: 30 },
    { name: "t-shirt", brand: "Abibas", price: 50 },
    { name: "boots", brand: "Abibas", price: 150 },
    { name: "gloves", brand: "Abibas", price: 30 },
    { name: "t-shirt", brand: "Abibas", price: 50 },
    { name: "boots", brand: "Abibas", price: 150 },
    { name: "gloves", brand: "Abibas", price: 30 },
  ]);

  return (
    <>
      <div className="row">
        {items.map((item) => (
          <Item item={item} />
        ))}
      </div>
    </>
  );
}

export { ItemsList };
