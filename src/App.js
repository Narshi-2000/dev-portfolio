import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message) => {
    setAlert({
      msg: message,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <div>
      <Navbar />
      <Alert alert={alert} />
      <Home showAlert={showAlert} />
    </div>
  );
}

export default App;
