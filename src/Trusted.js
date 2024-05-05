import React from 'react'
import './Trusted.css'

const Trusted = () => {
  return (
     <>
     <div className='trusted-section'>
            <div className='trusted-header'>
            <h6 className='header'>Trusted By Over 1000+ Companies</h6>
            </div>
            <div className='iconssection'>
                 <img src='images/logo1.png'className='logo' alt='my logo image'></img>
                 <img src='images/logo2.jpg' className='logo'alt='my logo image'></img>
                 <img src='images/logo4.png'className='logo'alt='my logo image'></img>
                 <div className='combine'>
                 <img className='lastlogo logo' src='images/company3.jpg'alt='my logo image'></img>
                 <h4>VERTEX</h4>
                 </div>
            </div>
        </div>
     </>
  )
}

export default Trusted