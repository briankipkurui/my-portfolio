import {Outlet} from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import About from "../about/About";

const LandingNavbar = () => {
  return(
      <main className="App">
          <Navbar/>
          <Outlet />
      </main>

  )
}
export  default LandingNavbar