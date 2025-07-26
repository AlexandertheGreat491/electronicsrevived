import React, { useState } from 'react';
// imports the Header component
import Header from "./components/Header"
// imports the Project component
import Project from "./components/Project"
// imports the Foot component
import Footer from "./components/Footer"
// imports the About component
import About from "./components/About"
// imports the Contact component
import Contact from "./components/Contact"
// imports the Resume component
import Resume from "./components/Resume"
// imports the Nav component
import Nav from "./components/Nav"
import './App.css';


function App() {
  const [categories] = useState([
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div id="app">
      <div>
        <Header></Header>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        ></Nav>
      </div>
      <div id='main'>
        {currentCategory === categories[0] && <About></About>}
        {currentCategory === categories[1] && <Project></Project>}
        {currentCategory === categories[2] && <Contact></Contact>}
        {currentCategory === categories[3] && <Resume></Resume>}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;