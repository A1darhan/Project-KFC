import Menu from "./pages/Menu.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./pages/Navigation.js";
import Careers from "./pages/Careers.js";
import "./pages/Main.css";
import Card from "./pages/Card.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Menu />}>
          </Route>
          <Route path="/card/:id" element={<Card />} />
          <Route path="/careers" element={<Careers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
