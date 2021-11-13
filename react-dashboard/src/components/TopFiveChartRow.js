import React from "react";

function TopFiveChartRow(props) {
  return (
    <tr>
      <td>{props.product.name}</td>
      <td>{props.totalAmount}</td>
      {/* <td>{props.Awards}</td> */}
    </tr>
  );
}

export default TopFiveChartRow;
