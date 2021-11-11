import React, { useState, useEffect } from "react";
import ProductsChartRow from "./ProductsChartRow";

function Chart() {
  // estado productos
  const [products, setProducts] = useState();

  // componentDidMount
  useEffect(() => {
    const allInfo = async () => {
      let resProducts = await fetch(`http://localhost:3001/api/products/`);
      let productsSaved = await resProducts.json();

      setProducts(productsSaved); //products=productsSaved
    };
    allInfo();
  }, []);

  return (
    /* <!-- DataTales Example --> */
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">
          Listado de productos
        </h5>
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
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Tallas</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Tallas</th>
              </tr>
            </tfoot>
            <tbody>
              {products &&
                products.products.map((product, i) => {
                  return <ProductsChartRow {...product} key={i} />;
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Chart;
