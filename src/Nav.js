import React, { useEffect, useState } from 'react';
import './Nav.scss';

function Nav() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        });

        return () => {
            window.addEventListener('scroll');
        };
    }, []);

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img
                className='nav__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
                alt='Netflix Logo'
            />
            <img
                src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
                alt='avatar'
                className='nav__avatar'
            />
        </div>
    );
}

export default Nav;
