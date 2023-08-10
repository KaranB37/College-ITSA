import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Carousel/>}/>
        <Route path="/card" element={<Card/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
       <Route path="/register" element={<Register/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
