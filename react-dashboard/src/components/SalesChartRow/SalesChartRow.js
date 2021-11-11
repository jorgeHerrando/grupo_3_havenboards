import React from "react";

function SalesChartRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.price}</td>
      <td>{props.amount}</td>
      <td>{props.totalPrice}</td>
      {/* <td>{props.Awards}</td> */}
    </tr>
  );
}

export default SalesChartRow;
