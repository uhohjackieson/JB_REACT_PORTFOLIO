import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Content from "./components/Content";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Projects />
      <Work />
      <Content />
      <Contact />
    </div>
  );
}

export default App;
