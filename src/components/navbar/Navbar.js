import About from '../../slides/about/About'
import Home from '../../slides/home/Home'
import Projects from '../../slides/projects/Projects'
import './Navbar.css'
import { useRef } from 'react'

function Navbar() {
    const homes=useRef(null);
    const abouts=useRef(null);
    const contacts=useRef(null);

    const scrollToSection=(elementRef)=>{
        window.scrollTo({
            top:elementRef.current.offsetTop,
            behavior:"smooth"
        })
    }

    return (
        <div className='app'>
            <nav>
                <ul>
                    <li onClick={()=>scrollToSection(homes)}>Home</li>
                    <li onClick={()=>scrollToSection(abouts)}>about</li>
                    <li onClick={()=>scrollToSection(contacts)}>contacts</li>
                </ul>
            </nav>
            <div ref={homes}className='home'>
                <Home/>
            </div>
            <div ref={abouts}className='about'>
                <About/>
            </div>
            <div ref={contacts}className='contact'>
                <Projects/>
            </div>
        </div>


    )
}

export default Navbar