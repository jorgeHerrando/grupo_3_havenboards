import React, { useState, useEffect } from "react";
import image from "../assets/images/logo-DH.png";
import ContentWrapper from "./ContentWrapper";
import ProductsInCategory from "./ProductsInCategory";
import LastProductInDb from "./LastProductInDb";
import ContentRowMovies from "./ContentRowMovies";
import SearchMovies from "./SearchMovies";
import ProductDetail from "./ProductDetail";
import ProductsChart from "./ProductsChart";
import SalesChart from "./SalesChart/SalesChart";
import TopFiveChart from "./TopFiveChart";
import Login from "./Login/Login";
import Help from "./Help";
import Denied from "./Denied";
import NotFound from "./NotFound";
import { Link, Route, Switch } from "react-router-dom";

function SideBar() {
  // // estado conectado false por default
  const [connected, setConnected] = useState(false);
  // // guardar el usuario conectado
  const [userLogged, setUserLogged] = useState();

  // useEffect(() => {
  //   const loggedUser = window.localStorage.getItem("userLogged");
  //   let user = JSON.parse(loggedUser);
  //   setUserLogged(user);
  //   // console.log(product);
  // }, []);
  // funcion para setear si connected. La pasamos como props a Login para que setee el estado para los 'middlewares' de aquí
  const access = (state, response) => {
    setConnected(state);
    setUserLogged(response);
  };
  console.log(connected, userLogged);

  // para guardar el producto
  const [product, setProduct] = useState();

  // producto para productDetail
  useEffect(() => {
    const getInfo = async () => {
      let resProduct = await fetch(`http://localhost:3001/api/products/last`);
      let productSaved = await resProduct.json();
      // console.log(productSaved);

      let lastProduct = productSaved;
      // console.log(lastProduct);

      setProduct(lastProduct);
    };
    getInfo();
    // console.log(product);
  }, []);

  return (
    <React.Fragment>
      {/*<!-- Sidebar -->*/}
      <ul
        className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/*<!-- Sidebar - Brand -->*/}

        {/* para que no entre en la ruta equivocada al hacer login */}
        {userLogged ? (
          <Link
            className="sidebar-brand d-flex align-items-center justify-content-center"
            to="/ContentWrapper"
          >
            <div className="sidebar-brand-icon">
              <img className="w-100" src={image} alt="Digital House" />
            </div>
          </Link>
        ) : (
          <Link
            className="sidebar-brand d-flex align-items-center justify-content-center"
            to="/"
          >
            <div className="sidebar-brand-icon">
              <img className="w-100" src={image} alt="Digital House" />
            </div>
          </Link>
        )}

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider my-0" />

        {/*<!-- Nav Item - Dashboard -->*/}
        <li className="nav-item active">
          {connected ? (
            <Link className="nav-link" to="/SearchMovies">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard - DH movies</span>
            </Link>
          ) : (
            <Link className="nav-link" to="/">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard - DH movies</span>
            </Link>
          )}
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Actions</div>

        {/*<!-- Nav Item - Pages -->*/}
        <li className="nav-item">
          {connected ? (
            <Link className="nav-link" to="/GenresInDb">
              <i className="fas fa-fw fa-folder"></i>
              <span>Products in categories</span>
            </Link>
          ) : (
            <Link className="nav-link" to="/">
              <i className="fas fa-fw fa-folder"></i>
              <span>Products in categories</span>
            </Link>
          )}
        </li>

        {/*<!-- Nav Item - Charts -->*/}
        <li className="nav-item">
          {connected ? (
            <Link className="nav-link" to="/LastProductInDb">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Last Product in Database</span>
            </Link>
          ) : (
            <Link className="nav-link" to="/">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Last Product in Database</span>
            </Link>
          )}
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item nav-link">
          {connected ? (
            <Link className="nav-link" to="/ContentRowMovies">
              <i className="fas fa-fw fa-table"></i>
              <span>Tables</span>
            </Link>
          ) : (
            <Link className="nav-link" to="/">
              <i className="fas fa-fw fa-table"></i>
              <span>Tables</span>
            </Link>
          )}
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item nav-link">
          {connected ? (
            <Link className="nav-link" to="/ProductsChart">
              <i className="fas fa-fw fa-table"></i>
              <span>Products List</span>
            </Link>
          ) : (
            <Link className="nav-link" to="/">
              <i className="fas fa-fw fa-table"></i>
              <span>Products List</span>
            </Link>
          )}
        </li>

        {/*<!-- Nav Item - Tables -->*/}
        <li className="nav-item nav-link">
          {connected ? (
            <Link className="nav-link" to="/SalesChart">
              <i className="fas fa-fw fa-table"></i>
              <span>Sales List</span>
            </Link>
          ) : (
            <Link className="nav-link" to="/">
              <i className="fas fa-fw fa-table"></i>
              <span>Sales List</span>
            </Link>
          )}
        </li>

        <li className="nav-item nav-link">
          {connected ? (
            <Link className="nav-link" to="/TopFiveChart">
              <i className="fas fa-fw fa-table"></i>
              <span>Top Five</span>
            </Link>
          ) : (
            <Link className="nav-link" to="/">
              <i className="fas fa-fw fa-table"></i>
              <span>Top Five</span>
            </Link>
          )}
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
      {/*<!-- End of Sidebar -->*/}

      <Switch>
        <Route exact path="/">
          {/* que se muestre login si no está conectado y entra ruta por barra navegación */}
          <Login access={access} />
        </Route>
        <Route path="/ContentWrapper">
          {userLogged ? <ContentWrapper userLogged={userLogged} /> : <Help />}
        </Route>
        <Route path="/GenresInDb">
          {userLogged ? <ProductsInCategory /> : <Help />}
        </Route>
        <Route path="/LastProductInDb">
          {userLogged ? <LastProductInDb /> : <Help />}
        </Route>
        <Route path="/ContentRowMovies">
          {userLogged ? <ContentRowMovies /> : <Help />}
        </Route>
        <Route path="/SearchMovies">
          {userLogged ? <SearchMovies /> : <Help />}
        </Route>
        <Route path="/ProductDetail">
          {product && <ProductDetail {...product.product} />}
        </Route>
        <Route path="/ProductsChart">
          {userLogged ? <ProductsChart /> : <Help />}
        </Route>
        <Route path="/SalesChart">
          {userLogged && userLogged.role == "admin" && connected ? (
            <SalesChart />
          ) : (
            <Denied />
          )}
        </Route>
        <Route path="/TopFiveChart">
          {userLogged && userLogged.role == "admin" && connected ? (
            <TopFiveChart />
          ) : (
            <Denied />
          )}
        </Route>

        <Route component={NotFound} />
      </Switch>
      {/*<!-- End Microdesafio 2 -->*/}
    </React.Fragment>
  );
}
export default SideBar;
