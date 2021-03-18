import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import Flash from 'react-reveal/Flash';
import Fade from 'react-reveal/Fade';

export default function Header() {
    return (
        <Fragment>
            <div id="header">
                <Flash>
                <div id="headerLeft">
                    <h1 id="headerLeftTitle">Hi, I'm Maxence Lemaire</h1>
                </div>
                </Flash>
                <div className="navLinks">
                    <NavLink className="navEl" to="/">HOME</NavLink>
                    <NavLink className="navEl" to="/about">ABOUT</NavLink>
                    <NavLink className="navEl" to="/loyd">L0YD</NavLink>
                    <NavLink className="navEl" to="/contact">CONTACT</NavLink>
                </div>
            </div>
        </Fragment>
    )
}
