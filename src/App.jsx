import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SigIn from "./pages/SigIn";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SigIn />} />
        <Route path="/signup" element={<Signup />} />
    

        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
