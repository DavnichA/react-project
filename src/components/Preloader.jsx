import React from 'react';
import pre from './Preloader.module.css';


let Preloader = () => {
    return <div className={pre.loader}>
        <div className={pre.loader_logo}>
            <div className={pre.loader_circle}>
                <svg className={pre.loader_circle_spinner} viewBox="0 0 500 500" >
                <circle cx="250" cy="250" r="239" />
            </svg>
        </div>
    </div>
</div >   

}


export default Preloader;