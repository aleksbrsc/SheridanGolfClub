import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Home from "@pages/Home";
// import About from "@pages/About";
// import Membership from "@pages/Membership";
// import Events from "@pages/Events";
import Contact from "@pages/Contact";
import { Toaster } from 'sonner'
import './index.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster
          toastOptions={{
            className: "toast",
          }}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/membership" element={<Membership />} /> */}
          {/* <Route path="/events" element={<Events />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
