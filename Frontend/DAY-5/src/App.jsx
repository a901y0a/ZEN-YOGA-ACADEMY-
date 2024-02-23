import './App.css'
import { BrowserRouter,Routes,Route, Form } from 'react-router-dom';
import Login from './pages/user/login';
import Home from './pages/user/home';
import Contact  from './pages/user/contact';
import About from './pages/user/about';
import Profile from './pages/user/profile';
import Application from './pages/user/application';



function App() {

  return (
    <BrowserRouter>
   
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/application" element={<Application/>}></Route>




 
    </Routes>
    </BrowserRouter>
  );
}

export default App