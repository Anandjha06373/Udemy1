import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import {Home, SingleCourse, Cart, Courses} from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import USER from "./components/Lg"
import ADMIN from "./components/admin";
import PAYMENT from "./pages/Payment";
import Signup from './components/Signup';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path = "/" element = {<Home />} /> 
        <Route path="/Lg" element={<USER/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/admin" element={<ADMIN/>} />
        <Route path="/Payment" element={<PAYMENT/>} />
        <Route path = "/courses/:id" element = {<SingleCourse />} />
        <Route path = "/category/:category" element = {<Courses />} />
        <Route path = "/cart" element = {<Cart />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
