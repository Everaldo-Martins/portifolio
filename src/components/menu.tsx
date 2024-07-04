import React, { useEffect } from 'react';
import logo from '../assets/logo.svg';

const Menu: React.FC = () => {
    useEffect(() => {
        const menuBtn = document.querySelector('.menu-btn');
        const menu = document.querySelector('.menu');

        if (menuBtn && menu) {
            menuBtn.addEventListener('click', () => {
                menu.classList.toggle('active');
            });
            return () => {
                menuBtn.addEventListener('click', () => {
                    menu.classList.toggle('active');
                });
            }
        }
    }, []);

    return (
        <nav className="navbar">
            <div className="max-width">
                <div className="logo">
                    <a href="/"><img src={logo} alt="EMD" /></a>
                </div>
                <ul className="menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#experience">Experiência</a></li>
                    <li><a href="#skills">Habilidades</a></li>
                    <li><a href="#teams">Equipe</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
                <div className="menu-btn fas fa-bars"></div>
            </div>
        </nav>
    );
};

export default Menu;