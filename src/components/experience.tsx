import React from 'react';

const Experience: React.FC = () => {
    return (
        <section className="experience" id="experience">
            <div className="max-width">
                <h1 className="title">Minhas Experiencias</h1>
                <div className="exp-content">
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