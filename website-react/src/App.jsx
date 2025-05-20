import { Routes, Route } from 'react-router-dom';


//import all our routes to different pages
import Homepage from './routes/Homepage';
import About from './routes/About';
import Projects from './routes/Projects';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App
