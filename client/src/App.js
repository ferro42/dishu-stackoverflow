import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from "./components/navbar/navbar"
import './App.css';
import AllRoutes from './AllRoutes'
import  {useDispatch}  from 'react-redux'
import { fetchallquestion } from './actions/question';
import { useEffect } from 'react';
import { fetchallusers } from './actions/users';
import React, { useState } from 'react';
function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchallquestion())
    dispatch(fetchallusers())
  },[dispatch])
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const updateTheme = () => {
      const currentHour = new Date().getHours();
      
      const newTheme = currentHour >= 6 && currentHour < 18 ? 'light' : 'dark';
      setTheme(newTheme);
    };

    updateTheme(); // Initial theme update

    const intervalId = setInterval(updateTheme, 60 * 60 * 1000); // Update every hour

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const themeStyles = {
      background: theme === 'light' ? '#f0f0f0' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
  };
  return (
    <div className="App" style={{ ...themeStyles }}>
      <Router style={{ ...themeStyles }}>
        <Navbar style={{ ...themeStyles }} / >
        <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
