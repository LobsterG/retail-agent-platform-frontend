import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import './index.css'
import reactLogo from './assets/react.svg'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <header className='sticky'>
        <span className='logo'>
          <img src={reactLogo} alt='logo' width="49" height="99" />
        </span>
        <NavLink to="/"  className="button rounded">
        <span className="icon-home"></span>
          Home
        </NavLink>
        {/* <NavLink to="/projects" className="button rounded">
          Projects
        </NavLink> */}
      </header>


    
      <div className='container'>
          <Routes>
            <Route path="/" element={<App />}/>
            {/* <Route path="/projects" element={<ProjectsPage />}/>
            <Route path="/projects/:id" element={<ProjectPage />}/> */}
          </Routes>
      </div>
    </Router>
  </React.StrictMode>,
)
