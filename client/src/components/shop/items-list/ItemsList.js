import { Item } from "../item/Item";
import { useState, useEffect } from "react";
import { getAllProducts } from "../../../http/productsAPI";

function ItemsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <>
      <div className="row">
      {
        products.map((product) => <Item item={product} key={product._id}></Item>)
      }
      </div>
    </>
  );
}

export { ItemsList };
