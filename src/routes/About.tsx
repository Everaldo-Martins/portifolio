import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/images/profile-1.jpg';
import '../style/About.css';
import '../style/AnimatedButton.css';


const About: React.FC = () => {
    const lineSpan = () => {
        const el = [];
        for (let i = 0; i < 4; i++) {
            el.push(<span></span>);          
        }
        return el;
    }
    return (
        <section className="about">
            <div className="box-content">
                <div className="about-left">
                    <figure>
                        <img src={profile} alt="Imagem de Perfil" />
                    </figure>
                </div>
                <div className="about-right">
                    <div className="text-1">Olá, Visitante!</div>
                    <p className='text-2'>Sou Everaldo Martins, um entusiasta da tecnologia, apaixonado por programação e desenvolvimento de software. 
                        Ao custo de muito esforço, desenvolvi habilidades em algumas tecnologias como HTML, CSS, JavaScript, Node.js, 
                        Flutter, Java e Python, procuro aprimorar minhas habilidades para enfrentar desafios cada vez mais 
                        complexos. Tenho formação acadêmica em Técnico em Informática e Ciência da Computação.
                    </p>
                    <p className='text-2'>Tenho experiência em desenvolvimento web, desktop e mobile, busco a possibilidade de aprender 
                        com os desafios, aplicando o conhecimento em projetos inovadores que visem proporcionar experiências excepcionais 
                        aos usuários. Sou comprometido com a excelência, a criatividade e a busca contínua por soluções tecnológicas de 
                        alta qualidade.
                    </p>
                    <p className='text-2'>A formação como Técnico em Informática possibilita desenvolver um papel multifacetado que envolve desde a configuração, 
                        manutenção de sistemas, criação e configuração de redes, dentre outros. Estou aberto a novas oportunidades que me permitam continuar crescendo 
                        profissionalmente e contribuir para o avanço da tecnologia.
                    </p>
                    <p className='clearBoth'></p>
                    <Link to="/portifolio/downloads/CV-Everaldo.txt" target='_blank' className='animated-button'>
                        {lineSpan()}
                        <i className="fa-solid fa-file-arrow-down"></i>
                        Baixar C.V.
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;