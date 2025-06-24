import { useState } from "react";
import Home from "./task/home/Home";
import Form from "./task/form/Form";
import Navbar from "./task/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/form/:id" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
