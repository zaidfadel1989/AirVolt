// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Teams from "./components/Teams";
import Project from "./components/Project";
import Testimonial from "./components/Testmonial";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Electric from "./components/Services/Electric";
import HVAC from "./components/Services/HVAC";
<Route path="/hvac" element={<HVAC />} />

function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Teams />
      <Project />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/YahYa-GH">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electric" element={<Electric />} />
        <Route path="/hvac" element={<HVAC />} />
      </Routes>
    </BrowserRouter>
  );
}






export default App;
