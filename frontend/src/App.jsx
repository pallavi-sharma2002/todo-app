import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'
import Navbar from "./components/navbar";
import ManageTask from "./pages/ManageTask";

function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      < Route path="/" element={<Home />}/>
      < Route path ="/manage-task" element={<ManageTask/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
