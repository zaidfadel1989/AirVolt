import React from 'react'
import "./Footer.css"
import { footer } from "../../data";
import {Link} from "react-scroll"
import Logo from '../Logo'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container'>
        <div className='row'>
        <div className='column'>
        <Logo/>
        <form className='newsletter'>
        <h3> Get weekly update</h3>
        <div className='control__container'>
        <input type='email' placeholder='Enter your email address' className='control'/>
        <button className='btn' type='button'>Subscribe</button>
        </div>
        </form>
        </div>
        {
          footer.map((list,index)=>(
            <div className='column' key={index}>
              <div className='routes__name'>{list.name}</div>
              <div className='routes__container'>
                {
                  list.routes.map((route,i)=>(
                    <Link to={route.id} className='route__item' key={i}>
                    <p className='name'>{route.name}</p>
                    </Link>
                  ))
                }
              </div>
            </div>
          ))
        }
        </div>
      </div>
      <div className='copyright'>
        <div className='container'>
          <h3> Copyright &copy; All right reserved -| 2025 </h3>
          <p className='text__muted'>Built with love by Emmanuel Eze Adinuba A.K.A Mr. Adinuba</p>
        </div>
      </div>
      </footer>
  )
}

export default Footer
