import React, { useState, useEffect } from 'react';
import { Button } from './Button'; // Ensure Button is correctly imported
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return () => window.removeEventListener('resize', showButton); // Cleanup listener
    }, []);

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    NDNM
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu-bar active' : 'nav-menu-bar'}>
                    <li className='nav-item-bar'>
                        <Link to='/' className='nav-links-bar' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item-bar'>
                        <Link to='/instructions' className='nav-links-bar' onClick={closeMobileMenu}>
                            Instructions
                        </Link>
                    </li>
                    <li className='nav-item-bar'>
                        <Link to='/cards' className='nav-links-bar' onClick={closeMobileMenu}>
                            Cards
                        </Link>
                    </li>
                    <li className='button-test'>
                        {button && (
                            <Link to='/sign-up' className='btn-mobile' onClick={closeMobileMenu}>
                                <Button buttonStyle='btn--outline'>SIGN UP</Button>
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;