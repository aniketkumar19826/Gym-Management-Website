import React from 'react'
import './Header.css'
import {Link} from 'react-scroll';
const Header = () => {
  return (
    <>
   <div className="header">
    <h1>Fit club</h1>
    <nav className='navbar'>
        <ul>
            <li>
              <Link>home</Link>
              </li>
            <li><Link
            to='reasons'
            span='true'
            smooth='true'
            >why us</Link></li>
            <li><Link
            to='programs'
            span='true'
            smooth='true'
            >programs</Link></li>
            <li><Link
            to='plans'
            span='true'
            smooth='true'
            >our plans</Link></li>
            <li><Link
            to='testimonials'
            span='true'
            smooth='true'
            >testimonials</Link></li>
        </ul>
    </nav>
   </div>
   
</>
  )
}

export default Header
