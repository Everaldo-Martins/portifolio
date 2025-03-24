import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import lineSpan from '../../components/AnimatedButton';
import { FaEnvelope } from 'react-icons/fa6';
import './Skills.css';

const skillsData = [
    { name: 'HTML', percentage: 90, className: 'html' },
    { name: 'CSS', percentage: 90, className: 'css' },
    { name: 'JavaScript', percentage: 80, className: 'js' },
    { name: 'PHP', percentage: 70, className: 'php' },
    { name: 'React', percentage: 75, className: 'react' },
    { name: 'Flutter', percentage: 70, className: 'flutter' },
    { name: 'MySQL', percentage: 70, className: 'mysql' }
];

function Skills(){
    const [percentages, setPercentages] = useState<number[]>(Array(skillsData.length).fill(0));

    useEffect(() => {
        skillsData.forEach((skill, index) => {
            let start = 0;
            const interval = setInterval(() => {
                setPercentages(prev => {
                    const updated = [...prev];
                    if (updated[index] < skill.percentage) {
                        updated[index] = start;
                    } else {
                        clearInterval(interval);
                    }
                    return updated;
                });
                start += 1;
            }, 51);
        });
    }, []);

    return (
        <section className="skills">
            <div className="box-content">
                <div className="skills-left">
                    <h1 className="text">Minhas habilidades e experiências.</h1>
                    <p>Tenho experiência em desenvolvimento web, desktop e mobile, abrangendo diversas tecnologias e 
                        linguagens de programação. Ao longo da minha trajetória, com muito esforço, desenvolvi habilidades 
                        em várias áreas. O conjunto diversificado de habilidades permite enfrentar uma ampla gama de desafios 
                        de desenvolvimento, desde a criação de interfaces atraentes até a implementação de funcionalidades 
                        complexas. Sempre buscando adquirir conhecimento e adaptar-se às novas tecnologias para entregar 
                        soluções de alta qualidade.
                    </p>
                    <Link to="/portifolio/contact" className='animated-button'>
                        {lineSpan()}
                        <FaEnvelope className="icon" /> Contrate-me
                    </Link>
                </div>
                
                <div className="skills-right">
                    {skillsData.map((skill, index) => (
                        <div key={skill.name} className="bars">
                            <div className="info">
                                <span>{skill.name}</span>
                                <span>{percentages[index]}%</span>
                            </div>
                            <div className={`line ${skill.className}`} style={{ width: `${percentages[index]}%` }}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;