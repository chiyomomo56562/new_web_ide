import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigationbar from './components/Navigationbar/Navigationbar';
import Home from './pages/Home/Home.tsx';
import Login from './pages/Login/Login.tsx';
import Profile from './pages/Profile/Profile.tsx';
import Signup from './pages/Signup/Signup';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <Router>
      <div>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
