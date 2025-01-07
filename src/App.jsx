import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Scheduler from './components/Scheduler'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main text-center'>
      <Navbar />
      <h1 className='text-9xl font-bold'>PRODUCTIVITY</h1>
      <Scheduler ListOfTasks={[{name: 'dancing'}, {name: 'running'}]}/>
      
      
    </div>
  )
}

export default App
