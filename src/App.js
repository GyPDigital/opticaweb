import './App.css';
import AboutUs from './components/AboutUs';
import Advantage from './components/Advantage';
import AppointmentBar from './components/AppointmentBar';
import DataCounter from './components/DataCounter';
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
    </div>
  );
}

export default App;
