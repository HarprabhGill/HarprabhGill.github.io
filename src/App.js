import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import TugofWar from "./components/TugofWar";
import OrigamiUnlock from "./components/OrigamiUnlock";
import PoseUnlock from "./components/PoseUnlock";
import VirtualTherapy from "./components/VirtualTherapy";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <TugofWar />
      <OrigamiUnlock />
      <PoseUnlock />
      <VirtualTherapy />
    </div>
  );
}

export default App;