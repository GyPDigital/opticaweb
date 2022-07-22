import './App.css';
import AboutUs from './components/AboutUs';
import Advantage from './components/Advantage';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Advantage/>
      <Showcase/>
      <AboutUs/>
    </div>
  );
}

export default App;
