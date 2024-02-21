import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Navi from "./components/nav";
import Login from './components/login';
import Home from './pages/user/home';
import Navi from './components/nav';

function App() {

  return (
    <BrowserRouter>
    <Navi/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App