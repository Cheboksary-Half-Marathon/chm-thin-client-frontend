import React from 'react';
import mainLogo from '../assets/logo.png';
import sliderLogo from '../assets/slider.png';

const Header = ({list}) => {
    return (
        <div className="header-container">
            <div className="header-container__logo">
                <img src={mainLogo} alt="main-logo"/>
            </div>
            <div className="header-container__list">
                <nav className="header-container__list-navigation">
                    {list.map((item,index) => (
                        <li className="header-container__list-item" key={index}>{item}</li>
                    ))}
                </nav>
                <button className="header-container__button">Войти</button>
            </div>
            <div className="header-container__slider">
                <img src={sliderLogo} alt="slider-logo"/>
            </div>
        </div>
    );
};

export default Header;