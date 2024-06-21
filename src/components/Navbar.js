import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }

    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? 'open' : 'close'}>
                <Link to='/'>
                <img src={Logo} />
                </Link>
                <div className='hiddenLinks'>
                    <Link to='/'>Home</Link>
                    <Link to='/List'>List</Link>
                    <Link to='/AboutUs'>About us</Link>
                    <Link to='/Contact'>Contact</Link>
                </div>
            </div>
            <div className='rightSide'>
                <Link to='/'>Home</Link>
                <Link to='/List'>List</Link>
                <Link to='/AboutUs'>About us</Link>
                <Link to='/Contact'>Contact</Link>
                <Link to='/LoginForm' className='button-85'>Login</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}

export default Navbar