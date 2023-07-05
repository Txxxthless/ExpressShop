import React from "react";

function Item({ item }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src="https://illustoon.com/photo/dl/7266.png"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.brand}</p>
        <a className="btn btn-primary">See more</a>
      </div>
    </div>
  );
}

export { Item };
