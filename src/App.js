import './App.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Services from './Component/Services';
import NavBar from './NavBar';
import Slider from './Slider';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Slider/>
      <About/>
      <Services/>
      <Contact/>
    </div>

    
    
  );
}

export default App;
