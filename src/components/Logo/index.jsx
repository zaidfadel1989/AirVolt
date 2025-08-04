import React from 'react'
import {PiBuildingsFill} from 'react-icons/pi'
import "./Logo.css"
import img1 from '../../assets/elic.png'

const Logo = () => {
  return (
    <div className='logo'>
      <div className='icon__container'>
        <PiBuildingsFill/>
        <img src={img1} alt="Logo" />
        </div>
<h1 className='name'>Ben<span className="highlight">vix</span></h1>
    </div>
  )
}

export default Logo




