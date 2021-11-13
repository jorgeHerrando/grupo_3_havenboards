import React, { useState, useEffect } from "react";
import SalesChartRow from "../SalesChartRow/SalesChartRow";

function SalesChart() {
  // estado productos
  const [sales, setSales] = useState();

  // componentDidMount
  useEffect(() => {
    const allInfo = async () => {
      let resProducts = await fetch(`http://localhost:3001/api/products/sales`);
      let productsSaved = await resProducts.json();

      // console.log(productsSaved);

      setSales(productsSaved); //products=productsSaved
    };
    allInfo();
    // console.log(sales);
  }, []);

  return (
    /* <!-- DataTales Example --> */
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">Total de ventas</h5>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Precio Total</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Precio Total</th>
              </tr>
            </tfoot>
            <tbody>
              {sales &&
                sales.products.map((product, i) => {
                  return <SalesChartRow {...product} key={i} />;
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SalesChart;
