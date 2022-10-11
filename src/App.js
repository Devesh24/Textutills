import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [color, setColor] = useState("#ffffff");
  const [alert, setAlert] = useState(null);

  //basically there are four types of alert - primary, success, warning, dnager (refer bootstrap)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    //after two seconds, the alert will automatically be dismissed
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // const toggleMode = () => {
  //   if(mode === 'light')
  //   {
  //     setMode("dark")
  //     document.body.style.backgroundColor = '#071326'
  //     showAlert("Dark Mode has been Enabled", "success")
  //     document.title = "TextUtills - Dark"
  //   }
  //   else
  //   {
  //     setMode("light")
  //     document.body.style.backgroundColor = 'white'
  //     showAlert("Dark Mode has been Disabled", "success")
  //     document.title = "TextUtills - Home"
  //   }
  // }
  const toggleMode = (rang) => {
    if (rang === "#ffffff") {
      setMode("light");
      setColor("#ffffff");
      document.body.style.backgroundColor = "#ffffff";
      document.title = "TextUtills - Home";
    } else {
      setMode("dark");
      setColor(rang);
      document.body.style.backgroundColor = rang;
      document.title = "TextUtills - Dark";
    }
    showAlert("Theme Changed!", "success");
  };

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtills" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      
      <div className="container my-3">


        {/* <TextForm heading="Enter the text below to analyze" mode={mode} showAlert={showAlert} /> */}
        <TextForm
          heading="Enter the text below to analyze"
          mode={mode}
          color={color}
          showAlert={showAlert}
          />
      
        {/* <About mode={mode} /> */}
        <About mode={mode} color={color} />
      
        {/* Below commented part is for the case when we use router and non commented when we dont use router */}
        {/* <Routes>
          <Route exact path="/about" element={<About mode={mode} color={color} />} />
          <Route exact path="/" element={
            <TextForm
            heading="Enter the text below to analyze"
            mode={mode}
            color={color}
            showAlert={showAlert}
            />
          } />
        </Routes> */}

      </div>
    {/* </Router> */}
    </>
  );
}

export default App;