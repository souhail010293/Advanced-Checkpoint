import React from "react";
import PropTypes from "prop-types";

const ProductRow = ({ product: { name, price, category }, index }) => (
  <tr>
    <th scope="row">{index + 1}</th>
    <td>{name}</td>
    <td> {price} </td>
    <td>{category} </td>
  </tr>
);

ProductRow.propTypes = {
  product: PropTypes.exact({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default ProductRow;