import { useEffect } from "react";
import "./App.css";
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import { changeLanguage } from "./utils/language";

function App() {
  useEffect(() => {
    const storedLanguage = window.localStorage.getItem("language");
    if (storedLanguage !== null) {
      changeLanguage(storedLanguage);
    }
  }, []);

  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Value />
      <Residencies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

/*
  
*/
