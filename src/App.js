import './App.css';
import Clients from './components/Clients';
import Form from './components/Form';
import Hero from './components/Hero';
import MyWork from './components/MyWork';
import Navbar from './components/Navbar';
import WorkFlow from './components/WorkFlow';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <MyWork/>
      <WorkFlow/>
      <Clients/>
      <Form/>
    </>
  );
}

export default App;
