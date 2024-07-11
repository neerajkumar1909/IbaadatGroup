import React, { useState } from 'react';
import './Topbar.css';
import ibaadatIcon from '../../assets/ibaadatIcon.png'

import { Link } from 'react-scroll';

const Topbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const navItems = [
        { id: 1, text: "Home" },
        { id: 2, text: "About" },
        { id: 3, text: "Shows" },
        { id: 4, text: "Awards" },
        { id: 5, text: "Booking" },
        { id: 6, text: "Contact" },
    ];

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to={"Home"} ><img className='main-cover-img' src={ibaadatIcon} alt='' /></Link>
                <Link to={"Home"} className="navbar-brand" href="/">Ibaadat</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded={!isNavCollapsed ? true : false}
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}

                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse `} id="navbarNav">
                    <ul className="navbar-nav">
                        {
                            navItems.map(({ id, text }) => (
                                <li
                                    key={id} className="nav-item ">
                                    <Link className='nav-link'
                                        to={text}
                                        offset={-70}
                                        smooth={true}
                                        duration={100}
                                        activeClass="active"
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Topbar;
