import React from 'react'
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import { useEffect } from 'react';
// import Search from './Search';
// import Register from './Register'
// import Login from "./Login"
// import Details from './Details';
import Contact from './Contact'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
 
import Products from './Products';
// import Test from './Test'
 
const App = ()=> {
   
  useEffect(() => {
    document.querySelector('title').innerHTML = "deva app"
  })
  return(
    <>
    <Navbar/>
    <Routes>
      {/* <Route path='/' Component={Register}></Route>
      <Route path='/login' Component={Login}></Route> */}
      <Route path='/' Component={Home}></Route>
      <Route path='/contact' Component={Contact}></Route>
      <Route path='/products' Component={Products}></Route>
      {/* <Route path='/contact' Component={contact}></Route> */}
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
 