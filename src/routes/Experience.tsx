import React from 'react';
import '../style/Experience.css';

const Experience: React.FC = () => {
    return (
        <section className="experience" >
            <div className='box-container'>
                <div className="experience-top">
                    <p className='text'>Ao custo de muito esforço, desenvolvi habilidades em algumas tecnologias como HTML, CSS, JavaScript, Node.js, 
                        Flutter, Java e Python, procuro aprimorar minhas habilidades para enfrentar desafios cada vez mais
                        complexos. Tenho formação acadêmica em Técnico em Informática e Ciência da Computação.
                    </p>

                    <p className='text'>Tenho experiência em desenvolvimento web, desktop e mobile, busco a possibilidade de aprender
                        com os desafios, aplicando o conhecimento em projetos inovadores que visem proporcionar experiências excepcionais
                        aos usuários. Sou comprometido com a excelência, a criatividade e a busca contínua por soluções tecnológicas de
                        alta qualidade.
                    </p>
                </div>
                <div className='experience-bottom'>
                    <div className="card">
                        <div className="box">
                            <i className="fa-solid fa-object-group"></i>
                            <div className="text">Web Design</div>
                            <p>Criação e manutenção de sites com estética, funcionalidade e usabilidade.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fa-solid fa-laptop-code"></i>
                            <div className="text">Desenvolvedor</div>
                            <p>Criação de software, implementação e manutenção de sistemas e aplicações.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="box">
                            <i className="fa-solid fa-rocket"></i>
                            <div className="text">Apps Design</div>
                            <p>Criação de interfaces intuitivas e atraentes para os usuário.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;