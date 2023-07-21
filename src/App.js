import './App.scss';
import Project from './components/project';
// import Navbar from './components/navbar';
import HomePage from './components/homepage';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import About from './components/about';
function App() {
  return (
    <>
    {/* <Navbar /> */}
      {/* <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />    
        <Route path="/project" element={<Project />} />    
      </Routes> 
    </Router>*/}
    <HomePage />
    <About />
    <Project />
    </>
  );
}

export default App;
