import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Hero from './Pages/Hero/Hero';
import Services from './Pages/Services/Services';
import Clients from './Pages/Clients/Clients';
import Projects from './Pages/Projects/Projects';
import Whyus from './Pages/WhyUs/Whyus';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
   <div>
<Navbar />
<Hero />
<Services/>
<Clients />
<Contact />
<Footer />
   </div>
  );
}

export default App;
