import React from "react";
import { ItemsList } from "./items-list/ItemsList";

function Shop() {
  return (
    <div className="d-flex justify-content-center">
      <div className="col-3">
        <h5>Searching something</h5>
      </div>
      <div className="col-9">
        <ItemsList />
      </div>
    </div>
  );
}

export { Shop };
