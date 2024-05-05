import React from 'react'
// import Search from './Search'
// import Details from './Details'
import contact from './Contact'
import { NavLink } from 'react-router-dom'
import Home from './Home'
import "./Navbar.css"

const Navbar = () => {
  return (
     <>
     <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Ecommerce</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item mx-3">
          <NavLink to="/"><a className="nav-link active" aria-current="page" href="#">Home</a></NavLink>
        </li>
        <li className="nav-item mx-3">
        <NavLink to="/products"><a className="nav-link active" aria-current="page" href="Search">Products</a></NavLink>
        </li>
        <li className="nav-item mx-3">
        <NavLink to="/contact"><a className="nav-link active" aria-current="page" href="#">Contact Us</a></NavLink>
        </li>
      </ul>
      {/* <div className='search me-3'>
        <input type='text' placeholder='Enter the city'></input>
        <button type='button' className='logout-btn mx-3'>Logout</button>
      </div> */}
    </div>
  </div>
</nav>
     </>
  )
}

export default Navbar