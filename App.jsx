import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from  './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Signin from './components/Signin';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Signin' element={<Signin/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
