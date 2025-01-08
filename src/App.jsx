import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Navbar from './components/Navbar';
import Scheduler from './components/Scheduler';
import Login from './pages/Login';
import Finance from './pages/Finance';




function App() {

  const [financeData, setFinanceData] = useState([])

  useEffect(() => {
    console.log('CALLING USEEFFECT');
    axios.get('http://localhost:3000/api/data')
      .then(response => {
        console.log(response.data);
        setFinanceData(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [])


  return (
    
      
      <Router>
        <div className='main text-center'>
        <Navbar />
        <h1 className='text-9xl font-bold'>PRODUCTIVITY</h1>
        <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route path="/finance" element={<Finance listOfItems={financeData}/>} />
          <Route path="/" element={<Scheduler ListOfTasks={[{name: 'dancing'}, {name: 'running'}]}/>} />
        </Routes>
        </div>
      </Router>
      
   
    
  )
}

export default App;
