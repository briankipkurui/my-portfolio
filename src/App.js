import './App.css';
import {Route, Routes} from "react-router-dom";
import LandingNavbar from './layout/LandingNavbar';

function App() {
  return (
   <Routes>
     <Route path='/' element={<LandingNavbar/>}>
        
     </Route>
   </Routes>
  );
}

export default App;
