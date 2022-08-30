import './App.css';
import Clients from './components/Clients';
import Form from './components/Form';
import Hero from './components/Hero';
import MyWork from './components/MyWork';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <MyWork/>
      <Clients/>
      <Form/>
    </>
  );
}

export default App;
