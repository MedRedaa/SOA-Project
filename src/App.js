import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Navbar/Navbar1';
import  Banner  from './Pages/Page1/Banner';
import Login from './Pages/Page2/Login';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Banner />}></Route>  
      <Route exact path="/Login" element={<Login />}></Route>  
    </Routes>
    </BrowserRouter>
  );
}

export default App;
