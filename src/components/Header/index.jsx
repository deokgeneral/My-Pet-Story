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
               <Link><li>Login</li></Link>
            </ul>
        </div>
    </div>
  )
}
export default Header