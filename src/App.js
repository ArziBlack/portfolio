import './App.css';
import Clients from './components/Clients';
import Hero from './components/Hero';
import MyWork from './components/MyWork';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <MyWork/>
      <Clients/>
    </div>
  );
}

export default App;
