import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from '../components/Typewriter';
import User from '../assets/images/user.png';
import '../style/Home.css';
import '../style/BounceCSS.css';

const Home: React.FC = () => { 
    const nbols = 30;
    const renderbols = () => {
        const bols = [];
        for (let i = 1; i <= nbols; i++) {
            bols.push(<span key={i} className={`bol bol-${i}`}></span>);
        }
        return bols;
    };   
    return (       
        <section className="home">
            <div className="box-content">
                <div className="home-left">
                    <div className="text-1">Quem sou eu?</div>
                    <div className="text-2">Everaldo Martins</div>
                    <div className="text-3"><i className="fa-solid fa-laptop-code"></i><Typewriter /><b>_</b></div>
                    <Link to="/contact"><i className="fa-solid fa-file-signature"></i> Contrate-me</Link>
                </div>
                <div className="home-right">
                    <figure>
                        <img src={User} alt="" />                        
                    </figure> 
                    {renderbols()}                  
                </div>
            </div>
        </section>
    );
};

export default Home;