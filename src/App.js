import './App.css';
import { Route, Routes } from "react-router-dom";
import LandingNavbar from './layout/LandingNavbar';
import About from './about/About';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingNavbar />}>

        <Route path="about" element={<About />} />
      </Route>

    </Routes>
  );
}

export default App;
