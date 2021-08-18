import React from 'react'
import {containerMarginBotton} from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <section className="header" style={containerMarginBotton}>

            <nav className="navbar navbar-expand-lg sticky-top">
                <button className="navbar-toggler nav-style" type="button" data-toggle="collapse" 
                    data-target="#navbarNavheader" aria-controls="navbarNavheader" aria-expanded="false" 
                    aria-label="Toggle navigation"
                    style={{containerMarginBotton}}
                >
                    <FontAwesomeIcon icon={faAlignJustify} size={'lg'} title="Menu"/>
                </button>
                <div className="collapse navbar-collapse justify-content-around" id="navbarNavheader" align="center" role="navigation">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link nav-style" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-style" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-style" href="#profile">Profile</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    );
}

export default Header;