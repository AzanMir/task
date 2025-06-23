import { useState } from "react";
import Form from "../public/task/Form";
import Home from "../public/task/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <Form />
    </>
  );
}

export default App;
