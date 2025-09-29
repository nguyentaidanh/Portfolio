import { AnimatePresence } from "framer-motion";
import "./App.css";
import GalaxyBackground from "./components/Hero/galaxyBackground";
import ScrollProgressBar from "./components/Hero/scrollProgressBar";
import BodyPage from "./components/layout/body";

import NavbarDock from "./components/layout/navbar";
import "./index.css";

function App() {
  return (
    <>
      <GalaxyBackground />
      <AnimatePresence mode="wait">
        {/* <IntroPage /> */}
        <ScrollProgressBar />
        <NavbarDock />
        {/* <Header /> */}

        <BodyPage />

        {/* <FooterPage /> */}
      </AnimatePresence>
    </>
  );
}

export default App;
