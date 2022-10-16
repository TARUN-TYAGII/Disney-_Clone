import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detial/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
