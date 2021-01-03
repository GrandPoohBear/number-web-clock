import React, { useEffect, useState } from 'react';
import './App.css';
import Clock from './Clock';

function App() {
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const nowDateTime = new Date()
      setHours(nowDateTime.getHours())
      setMinutes(nowDateTime.getMinutes())
    }, 100)

    return () => {clearInterval(interval)}
  }, [])

  return (
    <div className="App">
      <Clock hours={hours} minutes={minutes}/>
    </div>
  );
}

export default App;
