import {Outlet} from "react-router-dom";
import Navbar from "../pages/Navbar";

const LandingNavbar = () => {
  return(
      <main className="App">
          <Navbar/>
          <Outlet />
      </main>

  )
}
export  default LandingNavbar