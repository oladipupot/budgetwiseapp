
import './App.css';
// import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import Index from './pages/Index';




function App() {
  return (
  <>
   <ToastContainer />
   <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
   </Router>
  </>
  );
}

export default App;
