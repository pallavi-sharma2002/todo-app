import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'
import Navbar from "./components/navbar";
import ManageTask from "./pages/ManageTask";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        < Route path="/" element={<Home />} />
        < Route path="/manage-task" element={<ManageTask />} />
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
