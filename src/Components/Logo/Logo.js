import React from 'react';
import { Tilt } from 'react-tilt';
import brainy from './brainy.png';
import "./Logo.css";

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Til br2 shadow-2' options={{ max: 55 }} style={{ height: 149, width: 150 }}>
                <div className='Tilt-inner pa1'>
                    <img style={{ paddingTop: '1px' }} alt='logo' src={brainy} />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;