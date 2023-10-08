import { Link } from "react-router-dom"
import './Navbar.css'
import About from "../about/About"
import Home from "../home/Home"

const Navbar = () => {
    return (
        <>
            <nav className="navbarContainer">
                <Link>Brian</Link>
                <ul>
                    <li><Link to="#">HOME</Link></li>
                    <li><Link to="About">ABOUT</Link></li>
                    <li><Link to="#">PROJECTS</Link></li>
                    <li><Link to="#">SKILLS</Link></li>
                    <li><Link to="#">CONTACTS</Link></li>
                </ul>
            </nav>
            <Home/>
            <About/>
        </>
    )
}

export default Navbar