
import React, { Component } from 'react';
import Products from './Component/Products/Products';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from './Component/Navigation/Navigation';
import Footer from './Component/Footer/Footer';
import HomePage from './Component/Homepage/HomePage';
import AboutUs from './Component/About/AboutUs';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';



//import './css/bootstrap.css';
//import './js/bootstrap.bundle.min.js';
//import Calculation from './Component/Calculation';
//import Greetings from './Component/Greetings/Greetings';
//import Song from './Component/Song';
//import ComponentLifeCycle from './Component/ComponentLifeCycle';


/*function App() {
  return (*/

/* <div className="App">

 <Greetings/>
 <Calculation/>
 <Song name="Matte maleyagide" year="2017" artistName="Sonu Nigam"/>
 <Song name="ondu malebillu" year="2017" artistName="Shreya Goshal"/>
 <Song name="Nannavale Nannavale" year="2017" artistName="Sonu Nigam"/>
 <Song name="Gayatri Mantra" year="2020" artistName="Anuradha Paudwal"/>
 </div>*/
/*<div className="App">


<ComponentLifeCycle/>

</div>
);
}*/

//import Details from './Product/Details';

function App() {
  return (
    <div>
      
     <Navigation/>
     
    
     
       <BrowserRouter>
       <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/AboutUs" element={<AboutUs/>}/>
      <Route path="/Products" element={<Products/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
   
    </div>
  );
}

export default App;