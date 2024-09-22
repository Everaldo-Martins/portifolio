import React from 'react';
import profile from '../assets/images/profile-1.jpg';

const About: React.FC = () => {
    return (
        <section className="about">
            <h2 className="title">Sobre mim</h2>
            <div className="about-content">
                <div className="">
                    <img src={profile} alt="Imagem de Perfil" />
                </div>
                <div className="column right">
                    <div className="text">Sou Everaldo.</div>
                    <p>Sou um entusiasta da tecnologia apaixonado por programação e desenvolvimento de software. Com
                        habilidades em HTML, CSS, JavaScript, Node.js, Flutter, PHP, C, Java e Python, estou
                        constantemente explorando novas tecnologias e aprimorando minhas habilidades para enfrentar
                        desafios cada vez mais complexos. Tenho uma sólida formação acadêmica em Técnico em
                        Informática pelo Instituto Federal da Paraíba e estudo Ciência da Computação na Universidade
                        Estadual da Paraíba.</p>
                    <p>Com experiência em desenvolvimento web e mobile, bem como em manutenção de hardware e redes,
                        busco oportunidades para aplicar meu conhecimento em projetos inovadores que visam
                        proporcionar experiências excepcionais aos usuários. Sou comprometido com a excelência, a
                        criatividade e a busca contínua por soluções tecnológicas de alta qualidade.</p>
                    <p>Além disso, como representante técnico na Prefeitura Municipal de Santa Luzia, desempenho um
                        papel multifacetado que envolve desde a configuração e manutenção de sistemas até a
                        participação ativa na comissão de licitações. Estou disponível para viagens e aberto a novas
                        oportunidades que me permitam continuar crescendo profissionalmente e contribuindo para o
                        avanço da tecnologia.</p>
                    <a target="_blank" href="/downloads/CV-Everaldo.txt"> Download CV</a>
                </div>
            </div>
        </section>
    );
};

export default About;