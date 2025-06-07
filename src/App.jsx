import Slider from "./components/Slider/Slider";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import InformationSection from "./components/InformationSection/InformationSection";
import Companies from "./components/Companies/Companies";
import Services from "./components/Services/Services";
function App() {
  return (
    <>
      <Nav />
      <Slider/>
      <About/>
      <InformationSection/>
      <Companies/>
      <Services/>
    </>
  )
}

export default App
