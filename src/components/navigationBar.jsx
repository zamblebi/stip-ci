import React from 'react'
import Link from 'gatsby-link'

import {Menu} from '../styled/all-style'
import Brand from '../../public/images/brand.png'

const NavigationBar = () => {
    return (
        <div>
            <Menu>
                <nav>
                    <div className="brand">
                        <Link to="/"><img src={Brand} alt=""/></Link>
                    </div>
                    <ul>
                        <li className="menu-link">
                            <Link to="/">Acceuil</Link>
                        </li>
                        <li className="menu-link">
                            <Link to="services">Service</Link>
                        </li>
                        <li className="menu-link">
                            <Link to="about-us">A propos</Link>
                        </li>
                        <li className="menu-link">
                            <Link to="contacts">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </Menu>
        </div>
    )
}



export default NavigationBar;