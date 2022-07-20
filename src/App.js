import './App.css';
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
    </div>
  );
}

export default App;
