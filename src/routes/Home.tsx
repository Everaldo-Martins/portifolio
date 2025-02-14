import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from '../components/Typewriter';
import User from '../assets/images/user.png';
import '../style/Home.css';

const Home: React.FC = () => {      
    return (       
        <section className="home">
            <div className="box-content">
                <div className="home-left">
                    <div className='home-text'>
                        <div className="text-1">Quem sou eu?</div>
                        <div className="text-2">Everaldo Martins</div>
                        <div className="text-3"><i className="fa-solid fa-laptop-code"></i><Typewriter /><b>_</b></div>
                        <Link to="/portifolio/contact"><i className="fa-solid fa-file-signature"></i> Contrate-me</Link>
                    </div>

                    <div className="social">
                        <Link to="mailto:everaldoinfortecnico@gmail.com" target="_blank" className="fa-solid fa-envelope">
                            <i className="tooltip">Contato</i>
                        </Link>
                        <Link to="https://www.linkedin.com/in/everaldo-martins-de-oliveira-214400b3/" target="_blank" className="fa-brands fa-linkedin">
                            <i className="tooltip">Linkdin</i>
                        </Link>
                        <Link to="https://www.instagram.com/everaldo_martins1/" target="_blank" className="fa-brands fa-instagram-square">
                            <i className="tooltip">Instagram</i>
                        </Link>
                        <Link to="https://github.com/Everaldo-Martins" target="_blank" className="fa-brands fa-github">
                            <i className="tooltip">Github</i>
                        </Link>
                    </div>
                </div>
                <div className="home-right">
                    <figure>
                        <img src={User} alt="" />                        
                    </figure>                 
                </div>
            </div>
        </section>
    );
};

export default Home;