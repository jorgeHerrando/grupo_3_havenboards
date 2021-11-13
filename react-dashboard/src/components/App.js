import React, { useEffect } from "react";
import SideBar from "./SideBar";
import Login from "./Login/Login";

function App() {
  // borrar el session al iniciar App
  // useEffect(() => {
  //   window.localStorage.removeItem("loggedUser");
  // }, []);
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        {/* <Login /> */}
      </div>
    </React.Fragment>
  );
}

export default App;
