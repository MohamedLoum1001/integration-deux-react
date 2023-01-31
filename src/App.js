import logo from './logo.svg';
import './App.css';
import './Media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Product from './Components/Product';
import ProductText from './Components/ProductText';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
       <Home/>
      <Product/>
      <ProductText/>
      <Pricing/>
      <Contact/>
       <Footer/> 
    </div>
  );
}

export default App;
