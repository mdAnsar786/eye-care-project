import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Feature from './Components/Feature/Feature';
import Social from './Components/Social/Social';
import CardService from './Components/CardService/CardService';
import Trusted from './Components/Trusted/Trusted';

function App() {
  return (
    <div className="App">
     <Header/>
     <Feature/>
     <Social/>
     <CardService/>
     <Trusted/>
    </div>
  );
}

export default App;
