import './App.css';
import AboutUs from './components/AboutUs';
import Advantage from './components/Advantage';
import AppointmentBar from './components/AppointmentBar';
import DataCounter from './components/DataCounter';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Showcase from './components/showcase/Showcase';
import Testimonials from './components/Testimonials';
import WhatsappIconFloat from './components/WhatsappIconFloat';

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
      <WhatsappIconFloat/>
    </div>
  );
}

export default App;
