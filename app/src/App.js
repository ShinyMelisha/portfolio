import './App.css';
import Profile from './Home/Profile';
import Footer from './Footer/Footer';
import Topbar from './Topbar/Topbar';
import Feature from './Feature/Feature';
import Porfolio from './Portfolio/Portfolio';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from  "react-router-dom";
import Portfolio from './Portfolio/Portfolio';
function App() {
  return (
    <div className='App'>
    <Router>
      <Topbar/>
      <Profile/>
      <Feature/>
      <Portfolio/>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
