import './App.css';
import Features from './Components/Features/Features';
import Header from './Components/Header/Header';
import Header2 from './Components/Header/Header2';
import Home from './Components/Home/Home';
import Protfolio from './Components/Protfolio/Protfolio';
import Resume from './Components/Resume/Resume';
import Testimonial from './Components/Testimonial/Testimonial';

function App() {
  return (
    <>
        {/* <Header /> */}
        <Header2 />
        <Home />
        <Features />
        <Protfolio />
        <Resume />
        <Testimonial />
    </>
  );
}

export default App;
