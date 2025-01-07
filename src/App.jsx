import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Navbar from './components/Navbar';
import Scheduler from './components/Scheduler';
import Login from './pages/Login';




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main text-center'>
      <Navbar />
      <h1 className='text-9xl font-bold'>PRODUCTIVITY</h1>
      
      <Router>
        <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Scheduler ListOfTasks={[{name: 'dancing'}, {name: 'running'}]}/>} />
        </Routes>
      </Router>
      
    </div>
    
  )
}

export default App;
