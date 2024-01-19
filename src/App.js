import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageS=15;
  const apiKey= process.env.REACT_APP_API_KEY;
  const [progress, setProgress] = useState(0);

    return (
      <div style={{backgroundColor:"#f1f1f1"}}>
        <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route path="/"  element={<News apiKey={apiKey} setProgress={setProgress} key="home" pageSize={pageS} country="in" category="general"/>}/>
          <Route path="/business"  element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageS} country="in" category="business"/>}/>
          <Route path="/entertainment"  element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageS} country="in" category="entertainment"/>}/>
          <Route path="/general"  element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageS} country="in" category="general"/>}/>
          <Route path="/health"  element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={pageS} country="in" category="health"/>}/>
          <Route path="/science"  element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={pageS} country="in" category="science"/>}/>
          <Route path="/sports"  element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={pageS} country="in" category="sports"/>}/>
          <Route path="/technology"  element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageS} country="in" category="technology"/>}/> 
        </Routes>
        </Router>
      </div>
    )
  }
  export default App;