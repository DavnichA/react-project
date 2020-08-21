import React from 'react';
import header from './Header.module.css';
import { Redirect } from 'react-router-dom';


const Header = (props) => {
    return (
        <header>
            <img src="https://www.veeam.com/content/dam/veeam/global/veeam-graphics/veeam_logo_white-500.png.web.1280.1280.png?ck=1572622163865&ck=1572622163865" alt="logo" />
            <div className={header.login_block}>
                {props.isAuth
                ?<div className={header.sign}><span onClick={props.logout}>&#10162;</span><p>{props.login}</p></div>
                : <Redirect to={'/login'}/>}
            </div>
        </header>
    )
}

export default Header;
