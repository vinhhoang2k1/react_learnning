import React from 'react';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './index.css';
import Home from './page/Home';
import Contact from './page/Contact';
import New from './page/New';


function App() {
  return (
    <div>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/New">New</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </nav>
      <Routes>
        //path no se tro toi theo url neu co thi no se hien thi element
        <Route path="/" element={<Home />}>

        </Route>
        <Route path="/New" element={<New />} >

        </Route>
        <Route path="/Contact" element={<Contact />} >

        </Route>
      </Routes>
    </div>
  );
}

export default App;

