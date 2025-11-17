import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import arrowIcon from 'assets/icons/arrowRight.png'
import closeMenuIcon from 'assets/icons/x.png'

import './NavActions.css'

function NavActions() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const closeVerticalMenu = function(){
        setTimeout(
            ()=>{setMenuOpen((_) => false)}
        , 100)
    }
    const location = useLocation();

    return (
        <div className='nav-btn-container'>
            <div className='nav-btn'>
                <div className='menu-wrapper'>
                    <button className='menu-btn btn btn-dark' onClick={()=>setTimeout(()=>{setMenuOpen((prev) => !prev)}, 300)}>
                        <div className="button-text barlow-regular">Menu</div>
                        <div className='dots-container'>
                            <span className='dots'></span>
                            <span className='dots'></span>
                            <span className='dots'></span>
                        </div>
                    </button>

                    <div className={"vertical-menu-container "+(isMenuOpen?"vertical-menu-open":"vertical-menu-closed")} >
                        <div className="vertical-menu-leaving-region"></div>
                        <div className="vertical-menu">
                            <div className="vertical-menu-entry-container">
                                <Link to="/" className='vertical-menu-link' onClick={closeVerticalMenu}>
                                    <div className="vertical-menu-entry">
                                        <span className="barlow-light">Home</span>
                                    </div>
                                </Link>
                                <Link to="/smartplants" className='vertical-menu-link' onClick={closeVerticalMenu}>
                                    <div className="vertical-menu-entry">
                                        <span className="barlow-light">Smart Plants</span>
                                    </div>
                                </Link>
                                <Link to="/about-smartplanter" className='vertical-menu-link' onClick={closeVerticalMenu}>
                                    <div className="vertical-menu-entry">
                                        <span className="barlow-light">About Smart Planter</span>
                                    </div>
                                </Link>
                                <Link to="/about-sindustry" className='vertical-menu-link' onClick={closeVerticalMenu}>
                                    <div className="vertical-menu-entry">
                                        <span className="barlow-light">About Sesso Industry</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="vertical-menu-leaving-region">
                                <button className="vertical-menu-close-btn" onClick={closeVerticalMenu}>
                                    <img src={closeMenuIcon} className="vertical-menu-close-icon">
                                    </img>
                                </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='nav-btn  admin-btn'>
                <button className='btn btn-dark'>
                    <div className="button-text barlow-regular">
                        Admin
                    </div>
                    <span className='arrow-container'>
                        <img src={arrowIcon} alt="" className='arrow' />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default NavActions
