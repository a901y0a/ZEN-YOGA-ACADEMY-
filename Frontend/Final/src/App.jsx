import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Admin from './pages/admin/admin';
import AdminService from './pages/admin/adminservice';
import Status from './pages/admin/status';
import About from './pages/user/about';
import Application from './pages/user/application';
import Contact from './pages/user/contact';
import Course from './pages/user/course';
import Feedback from './pages/user/feedback';
import Front from './pages/user/front';
import Home from './pages/user/home';
import Login from './pages/user/login';
import Payment from './pages/user/payment';
import Profile from './pages/user/profile';
import Service from './pages/user/service';
import Signup from './pages/user/signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/application" element={<Application />} />
        <Route path="/course" element={<Course />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/status" element={<Status />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminservice" element={<AdminService />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/service" element={<Service />} />
        <Route path="/payment" element={<Payment />} />



  
      </Routes>
    </Router>
  );
}

export default App;
