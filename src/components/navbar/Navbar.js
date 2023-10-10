import About from '../../slides/about/About'
import Home from '../../slides/home/Home'
import Projects from '../../slides/projects/Projects'
import './Navbar.css'
import { useRef, useState } from 'react'

function Navbar() {
    const homes = useRef(null);
    const abouts = useRef(null);
    const contacts = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="navbar1">
                <div className="navbar1-conatiner">
                    <div className="logo-logo"><i> <b>Brian</b> </i></div>
                    <div className="ul-el">
                        <li><i> <b>Welcome!!</b> </i></li>
                        <li><i> <b>my-portfolio</b> </i></li>
                    </div>
                </div>
            </div>
            <nav className="navbar">
                <div className="container">
                    <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                        <li onClick={() => scrollToSection(homes)}><a>HOME</a></li>
                        <li onClick={() => scrollToSection(abouts)}><a>ABOUT</a></li>
                        <li onClick={() => scrollToSection(contacts)}><a>PROJECTS</a></li>
                    </ul>
                    <div className="burger" onClick={toggleNavbar}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
            </nav>

            <div ref={homes} className='home'>
                <Home />
            </div>
            <div ref={abouts} className='about'>
                <About />
            </div>
            <div ref={contacts} className='contact'>
                <Projects />
            </div>

        </>
    )
}

export default Navbar