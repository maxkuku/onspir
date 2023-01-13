import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Layout from './Layout/Layout'
import Sogl from './sogl_form/Sogl';
import Sklad from './Sklad/Sklad'
import Nopage from './Nopage/Nopage'
import Tsennosti from "./Tsennosti/Tsennosti";



function App() {

  return ( <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route path = "sogl" element = {<Sogl />}/> 
          <Route path = "sklad" element = {<Sklad />}/> 
          <Route path = "tsennosti" element = {<Tsennosti />}/> 
          <Route path = "*" element = {<Nopage />}/> 
        </Route> 
      </Routes> 
    </BrowserRouter>

  );
}

export default App;