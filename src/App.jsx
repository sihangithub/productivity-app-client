import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Navbar from './components/Navbar';
import Scheduler from './components/Scheduler';
import Login from './pages/Login';
import Finance from './pages/Finance';




function App() {
  const [count, setCount] = useState(0)

  const items = [
    { name: "Laptop", amount: 1200 },
    { name: "Smartphone", amount: 800 },
    { name: "Headphones", amount: 150 },
    { name: "Backpack", amount: 60 },
    { name: "Desk Chair", amount: 200 },
    { name: "Monitor", amount: 300 },
    { name: "Keyboard", amount: 100 },
    { name: "Mouse", amount: 50 },
    { name: "External Hard Drive", amount: 120 },
    { name: "Fitness Tracker", amount: 250 }
  ];

  return (
    <div className='main text-center'>
      <Navbar />
      <h1 className='text-9xl font-bold'>PRODUCTIVITY</h1>
      
      <Router>
        <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route path="/finance" element={<Finance listOfItems={items}/>} />
          <Route path="/" element={<Scheduler ListOfTasks={[{name: 'dancing'}, {name: 'running'}]}/>} />
        </Routes>
      </Router>
      
    </div>
    
  )
}

export default App;
