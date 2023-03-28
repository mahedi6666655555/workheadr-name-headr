import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./coponents/Header/Header";
import Shope from "./coponents/shope/Shope";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <>
        <Header></Header>
        <Shope></Shope>
      </>
    </div>
  );
}

export default App;
