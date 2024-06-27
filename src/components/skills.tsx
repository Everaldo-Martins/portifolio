import React from 'react';

const Skills: React.FC = () => {
    return (
        <section className="skills" id="skills">
            <div className="max-width">
                <h2 className="title">Minhas habilidades</h2>
                <div className="skills-content">
                    <div className="column left">
                        <div className="text">Minhas habilidades e experiências.</div>
                        <p>Tenho uma sólida experiência em desenvolvimento web e mobile, abrangendo diversas tecnologias
                            e linguagens de programação. Ao longo da minha trajetória, desenvolvi habilidades em várias
                            áreas. Meu conjunto diversificado de habilidades me permite enfrentar uma ampla gama de
                            desafios de desenvolvimento, desde a criação de interfaces atraentes até a implementação de
                            funcionalidades complexas no back-end. Estou sempre buscando aprender e me adaptar às novas
                            tecnologias para entregar soluções de alta qualidade.</p>
                        <a href="#contact"> Mais informação</a>
                    </div>
                    <div className="column right">
                        <div className="bars">
                            <div className="info">
                                <span>HTML</span>
                                <span>90%</span>
                            </div>
                            <div className="line html"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>CSS</span>
                                <span>90%</span>
                            </div>
                            <div className="line css"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>JavaScript</span>
                                <span>80%</span>
                            </div>
                            <div className="line js"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>PHP</span>
                                <span>70%</span>
                            </div>
                            <div className="line php"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>React</span>
                                <span>75%</span>
                            </div>
                            <div className="line react"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Flutter</span>
                                <span>70%</span>
                            </div>
                            <div className="line flutter"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>MySQL</span>
                                <span>70%</span>
                            </div>
                            <div className="line mysql"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;