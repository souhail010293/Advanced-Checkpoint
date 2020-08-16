import React from "react";
import ProductRow from "./ProductRow";
import PropTypes from "prop-types";

function ProductsTable(props) {
  return (
    <table className="table mt-3 container-fluid">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Categorey</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((product, index) => (
          <ProductRow key={index} product={product} index={index} />
        ))}
      </tbody>
    </table>
  );
}
ProductsTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ProductsTable;