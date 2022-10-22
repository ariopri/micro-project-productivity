import Fitur from "./components/LandingPage/Fitur/Fitur";
import NavigationBar from "./components/LandingPage/NavigationBar/NavigationBar";
import Testimoni from "./components/LandingPage/Testimoni/Testimoni";
import SlideShow from "./components/LandingPage/SlideShowPage/SlideShow";

function App() {
  return (
    <>
      <NavigationBar />
      <SlideShow />
      <Fitur /> 
      <Testimoni />
    </>
  );
}

export default App;
