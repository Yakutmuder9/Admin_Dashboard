import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;