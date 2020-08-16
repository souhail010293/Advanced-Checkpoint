import React from "react";
import NavBar from "./components/NavBar";
import ProductsTable from "./components/ProductsTable";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

const products = [
  {
    name: "Guitare",
    price: 200,
    category: "instruments"
  },
  {
    name: "Drums",
    price: 800,
    category: "instruments"
  },
  {
    name: "jack plug",
    price: 20,
    category: "Cables"
  },
  {
    name: "Guitare Strings",
    price: 20,
    category: "tools"
  }
];

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <ProductsTable products={products} />
    </div>
  );
}