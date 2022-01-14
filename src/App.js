import "./app.scss";
import Topbar from "F:/React/portfolio/src/Components/Topbar/topbar.jsx";
import About from "F:/React/portfolio/src/Components/About/about.js";
import Portfolio from "F:/React/portfolio/src/Components/Portfolio/portfolio.jsx";
import Contact from "F:/React/portfolio/src/Components/Contact/contact.jsx";
import Testimonial from "F:/React/portfolio/src/Components/Testimonials/testimonials.jsx";
import Intro from "F:/React/portfolio/src/Components/Intro/intro.jsx";
import { useState } from "react";
import Menus from "F:/React/portfolio/src/Components/Menus/menus.jsx";

function App() {
    const [menustatus, setmenustatus] = useState(false);
  return (
      <div className="app">
          <Topbar menustatus={menustatus} state={setmenustatus} />
          <Menus menustatus={menustatus} state={setmenustatus} />
          <div className="sections">
              <Intro />
              <About/>
              <Portfolio />
              <Testimonial />
              <Contact />
          </div>
      </div>
  );
}

export default App;
