import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Preloader from "./components/Preloader";

function App() {
  return (
    <div className="audiowide-regular">
      <Router>
        <Preloader>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Preloader>
      </Router>
    </div>
  );
}

export default App;
