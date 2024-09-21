import React from 'react';
import Typewriter from '../components/Typewriter';
import User from '../assets/images/user.png';
import '../style/Home.css';

const Home: React.FC = () => {
    return (       
        <section className="home" id="home">
            <div className="row">
                <div className="home-left">
                    <div className="text-1">Olá, meu nome é</div>
                    <div className="text-2">Everaldo Martins</div>
                    <div className="text-3">Sou um <Typewriter /></div>
                    <a href="#"> Contrate-me</a>
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