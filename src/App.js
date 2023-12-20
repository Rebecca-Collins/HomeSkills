import './App.scss';
import HomePage from './Components/HomePage/HomePage';
import NavBar from './Components/NavBar/Navbar';
import BurgerMenu from './Components/BurgerMenu/BurgerMenu';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
   <BurgerMenu/>
   <NavBar/>
   <Routes>
   <Route path='/' element={<HomePage/>}/>
   </Routes>

   </BrowserRouter>
  );
}

export default App;
