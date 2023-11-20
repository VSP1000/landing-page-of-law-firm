import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import Introduction from './Components/Introduction/Introduction';
import Navbar from './Components/NavBar/Navbar';
import Practices from './Components/Practices/Practices';
import WhyUs from './Components/WhyUs/WhyUs';
import HappyClients from './Components/HappyClients/HappyClients'
import { Team } from './Components/Team/Team';
import Faq from './Components/FAQ/Faq';
import Newsletter from './Components/Newsletter/Newsletter';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Introduction />
      <WhyUs />
      <Practices />
      <HappyClients />
      <Team />
      <Faq />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;