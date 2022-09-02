import './App.css';
import AboutUs from './components/AboutUs';
import Advantage from './components/Advantage';
import AppointmentBar from './components/AppointmentBar';
import DataCounter from './components/DataCounter';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Advantage/>
      <Showcase/>
      <AboutUs/>
      <DataCounter/>
      <Testimonials/>
      <AppointmentBar/>
      <Footer/>
      {/* WhatsApp icon */}
      <a
        href="https://wa.me/573118142989"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={require("./assets/icons/whatsapp-icon-white.png")} alt="icono de whatsapp blanco" />
      </a>
      {/* WhatsApp icon */}
    </div>
  );
}

export default App;
