import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Home } from './Home page/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Hcources } from './Home page/Hcources';
import { About } from './About page/About';
import { Pricing } from './Pricing page/Pricing';
import { Blog } from './Blog Page/Blog';
import { Popularcource } from './Cources page/All cources';
import { Onlinecource } from './Cources page/Online cources';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/popular Cources' Component={Popularcource}></Route>
          <Route path='/Online Cources' Component={Onlinecource}></Route>

          <Route path='/about' Component={About}></Route>
         <Route path='/Pricing' Component={Pricing}></Route>
         <Route path='/Blog' Component={Blog}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Home></Home> */}
    </>
  );
}

export default App;