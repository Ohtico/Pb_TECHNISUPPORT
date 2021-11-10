import React from "react";
import { Home } from "../components/Home";
import { Tabla } from "../components/Tabla";

export const App = () => {
  return (
    <div className="mt-4">
      <h1 className="text-info d-flex justify-content-center">
        Address Book
      </h1>
      <div className="row container mt-4">
        <div className="col">
          <Home />
        </div>
        <div className="col">
          <Tabla/>          
        </div>
      </div>
    </div>
  );
};
