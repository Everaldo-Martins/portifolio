import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from '../components/Typewriter';
import User from '../assets/images/user.png';
import '../style/Home.css';
import '../style/BounceCSS.css';

const Home: React.FC = () => { 
    const ndots = 30;
    const renderDots = () => {
        const dots = [];
        for (let i = 1; i <= ndots; i++) {
            dots.push(<span key={i} className={`dot dot-${i}`}></span>);
        }
        return dots;
    };   
    return (       
        <section className="home">
            <div className="box-content">
                <div className="home-left">
                    <div className="text-1">Olá, meu nome é</div>
                    <div className="text-2">Everaldo Martins</div>
                    <div className="text-3"><i className="fa-solid fa-laptop-code"></i><Typewriter /><b>_</b></div>
                    <Link to="/contact"> Contrate-me</Link>
                </div>
                <div className="home-right">
                    <figure>
                        <img src={User} alt="" />                        
                    </figure> 
                    {renderDots()}                  
                </div>
            </div>
        </section>
    );
};

export default Home;