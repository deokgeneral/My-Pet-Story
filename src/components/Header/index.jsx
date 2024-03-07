import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

function Header() {
  return (
    <div className='header-content'>
        <Link to={'/'} className='header-title'>
            <span>pet</span>Park
        </Link>
        <div className='header-menu'>
            <ul className='header-menu_ul'>
               <Link><li>Park</li></Link>
               <Link><li>Shop</li></Link>
               <Link><li>Login</li></Link>
            </ul>
            <div className='hambar'>
                <input type='checkbox' id='icon' />
                <label htmlFor="icon"> 
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <div className='hambar-menu'>
                    <ul>
                        <Link><li>첫번째</li></Link>
                        <Link><li>두번째</li></Link>
                        <Link><li>세번째</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Header