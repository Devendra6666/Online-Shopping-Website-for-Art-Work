import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='subfooters'>
            <div className='subone'>
                <h4>Art-website</h4>
            </div>
            <div className='subtwo'>
                <h5>Features</h5>
                <p>Home</p>
                <p>Products</p>
                <p>Contact</p>
            </div>
            <div className='subthree'>
                <h5>Contact Us</h5>
                <p>2019yoga@gmail.com</p>
                <p>sathyabama Institute of science and technology</p>
                <p>7981222394</p>
            </div>
            <div className='subfour'>
                <h5>Features</h5>
                <div className='icons'> 
                 <div className='icon'>
                    <a href='https://github.com/Devendra6666'>
                 <i class="fa-brands fa-github"></i></a>
                 </div>
                 <div className='icon'>
                    <a href='#'> 
                 <i class="fa-brands fa-instagram"></i></a>
                 </div>
                 <div className='icon'>
                 <a href='#'> 
                 <i class="fa-brands fa-linkedin"></i></a>
                 </div>
                 <div className='icon'>
                 <a href='#'> 
                 <i class="fa-brands fa-twitter"></i></a>
                 </div>
                 </div>
            </div>
        </div>
        <div className='copy'>
            <p>@CopyWrite 2024.Powered by WDeveloper</p>
        </div>
      </div>
    </>
  )
}

export default Footer