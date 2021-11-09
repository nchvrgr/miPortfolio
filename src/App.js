import React from "react";
import { BrowserRouter } from "react-router-dom";
import { getInTouch } from "./editable-stuff/config.js";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Home from "./components/Home";

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
     <Navbar ref={titleRef}/>
        <Home ref={titleRef}/>
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
