import { BrowserRouter,  Routes , Route } from 'react-router-dom';
import './App.css';
import Navbar from './navbar';
import About from './Routes/About';
import Home from './Routes/Home';
import Contact from './Routes/Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Navbar />
      <Routes>
        <Route path="home" element={<Home/>} />
        <Route path="" element={<Contact/>} />
        <Route path="about" element={<About />}/>
      </Routes>
      </div>
      </BrowserRouter>
    
  );
}

export default App;
