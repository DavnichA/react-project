import React from 'react';
import header from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <header>
            <img src="https://www.veeam.com/content/dam/veeam/global/veeam-graphics/veeam_logo_white-500.png.web.1280.1280.png?ck=1572622163865&ck=1572622163865" alt="logo" />
            <div className={header.login_block}>
                {props.isAuth ? <p>{props.login}</p> :<NavLink to={'/login'}>Login</NavLink>  }
                
            </div>
        </header>
    );
}

export default Header;