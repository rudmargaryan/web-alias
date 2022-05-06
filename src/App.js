import { useEffect, useState } from 'react';
import './assets/style.scss'
import React from 'react'
import { isFirstVisited } from './func/isFirstVisit';
import Router from './func/Router';


function App() {
  const [isFirstVisit,setIsFirstVisit] = useState(false)
  useEffect(()=>{
      setIsFirstVisit(isFirstVisited())
  },[])
  return (
    <div className="app">
        <Router isFirst={isFirstVisit} />
    </div>
  );
}

export default App;
