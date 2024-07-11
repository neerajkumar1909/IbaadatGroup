import './App.css';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Awards from './components/Awards/Awards';
import Booking from './components/Booking/Booking';
import Main from './components/Main/Main';
// import Navbar from './components/Navbar/Navbar';
import Show from './components/Shows/Show';
import Topbar from './components/Topbar/Topbar';
import Rights from './components/Rights/Rights';
import ContactForm2 from './components/ContactForm2/ContactForm2';
import { Toaster } from 'react-hot-toast';




function App() {
  return (
    <div className="App">
      {/* <Navbar />   This is just for Practice, not working*/}
      <Topbar />
      <Main />
      <About />
      <Show />
      <Awards />
      <Booking />
      <Contact />
      <Rights />

      <div>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
