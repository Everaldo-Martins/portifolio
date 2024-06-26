import React from 'react';

const Home: React.FC = () => {
    return (
        <>
        <section className="social">
            <a href="mailto:everaldoinfortecnico@gmail.com" target="_blank" className="fa fa-envelope"><i className="tooltip">Contato</i></a>
            <a href="https://www.linkedin.com/in/everaldo-martins-de-oliveira-214400b3/" target="_blank" className="fab fa-linkedin"><i className="tooltip">Linkdin</i></a>
            <a href="https://www.instagram.com/everaldo_martins1/" target="_blank" className="fab fa-instagram-square"><i className="tooltip">Instagram</i></a>
            <a href="https://github.com/Everaldo-Martins" target="_blank" className="fab fa-github"><i className="tooltip">Github</i></a>
        </section>
        <section className="home" id="home">
            <div className="max-width">
                <div className="home-content">
                    <div className="text-1">Olá, meu nome é</div>
                    <div className="text-2">Everaldo Martins</div>
                    <div className="text-3">E eu sou <span className="typing"></span></div>
                    <a href="#contact">Contrate-me</a>
                </div>
            </div>
        </section>
        </>        
    );
};

export default Home;