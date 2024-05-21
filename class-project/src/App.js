import './App.css';
import Navbar from './components/Navbar';
import bg from "./assets/sec-1_bg.png"
import Hero from './components/Hero';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Fifth from './components/Fifth';
import Sixth from './components/Sixth';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className='w-screen relative h-[700px]'>
        <img src={bg} alt="" className='absolute object-cover w-screen h-full -z-10' />
        <Navbar />
        <Hero />
      </div>
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Footer />
    </div>
  );
}

export default App;
