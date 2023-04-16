import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './Pages/Hero/Hero';
import Services from './Pages/Services/Services';
import Clients from './Pages/Clients/Clients';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
   <div>
<Navbar />
<Hero />
<Services/>
<Clients />
<Projects />
   </div>
  );
}

export default App;
