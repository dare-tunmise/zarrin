import React from 'react';
import zarrinLogo from '../assets/zarrinLogo.svg'

const Navbar = () => {
    return ( 
        <header>
            <nav>
                <div className="logo">
                    <img src={zarrinLogo} alt="" />
                    <span>Zarrin</span>
                </div>
                <ul className='nav-list'>
                    <li><a className='active' href="">Blog</a></li>
                    <li><a href="">About</a></li>
                    <li><i class='bx bx-search'></i></li>
                    <li><a className='button' href="">Contact Us</a></li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Navbar;