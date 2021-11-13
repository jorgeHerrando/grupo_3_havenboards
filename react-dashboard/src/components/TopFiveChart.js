import React, { useState, useEffect } from "react";
import TopFiveChartRow from "./TopFiveChartRow";

const TopFiveChart = () => {
  // estado productos
  const [products, setProducts] = useState();

  // componentDidMount
  useEffect(() => {
    const allInfo = async () => {
      let resProducts = await fetch(
        `http://localhost:3001/api/products/topFive`
      );
      let productsSaved = await resProducts.json();

      setProducts(productsSaved);
    };
    allInfo();
  }, []);

  return (
    /* <!-- DataTales Example --> */
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">Top Five</h5>
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
                <th>Total de ventas</th>
              </tr>
            </thead>

            <tbody>
              {products &&
                products.products.map((product, i) => {
                  return <TopFiveChartRow {...product} key={i} />;
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopFiveChart;
