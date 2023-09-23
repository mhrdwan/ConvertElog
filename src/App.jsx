import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarElog from "./assets/Components/Navbar/NavbarElog";
import Headers from "./assets/Components/Navbar/Headers";
import Ourawasome from "./assets/Components/OurAwasome/Ourawasome";
import ContactUss from "./assets/Components/ContactUs";
import OurAwesomeService from "./assets/Components/OurAwesomeService";
import Headoffices from "./assets/Components/HeadOffice";
import Brench from "./assets/Components/Brench";
import Media from "./assets/Components/Media";
import OpeningHours from "./assets/Components/OpeningHour";
import Footer from "./assets/Components/Foooter";
import Tracking from "./Pages/Tracking/Tracking";
import HalamanRouter from "./Router/ROuter";

function App() {

  return (
    <>
      <NavbarElog />
      <Headers />
      <Ourawasome />
      <ContactUss />
      <OurAwesomeService />
      <Headoffices />
      <Brench />
      <OpeningHours/>
      <Media/>
      <Footer/>
    </>
  );
}

export default App;
