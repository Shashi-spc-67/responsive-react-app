
// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './COMPONENTS/Header';
import HOME from './COMPONENTS/HOME';
import Products from './COMPONENTS/Products';
import ABOUT from './COMPONENTS/ABOUT';


function App() {
  return (<div>
  <BrowserRouter>
  <Header/>
<Routes>
<Route path='/' element={<HOME/>}/>
<Route path='/Products' element={<Products/>}/>
<Route path='/About' element={<ABOUT/>}/>
  </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;

