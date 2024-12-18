import './App.css';
import { HeroSection } from './Components/HeroSection';
import { CustomNavbar } from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SecondSec } from './Components/SecondSec';
import { ThirdSec } from './Components/ThirdSec';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="Container">
      <CustomNavbar/>
      <HeroSection/>
      <SecondSec/>
      <ThirdSec/>
      <Footer/>
    </div>
  );
}

export default App;
