import { Link } from 'react-router';
import Typewriter from '../../components/Typewriter';
import lineSpan from '../../components/AnimatedButton';
import User from '../../assets/images/user.png';
import './Home.css';
import { FaSquareEnvelope, FaLinkedin, FaSquareInstagram, FaSquareGithub, FaFileLines } from 'react-icons/fa6';

function Home() {
    return (
        <section className="home">
            <div className="box-content">
                <div className="home-left">
                    <div className='home-text'>
                        <h2>Everaldo Martins</h2>
                        <h4>Sou <Typewriter /><b>_</b></h4>
                        <p>
                            Sou um entusiasta da tecnologia, apaixonado por programação e desenvolvimento de software.
                            Ao custo de muito esforço, desenvolvi e estou desenvolvendo habilidades em algumas tecnologias como HTML, CSS, JavaScript, Node.js,
                            Flutter e Java, procuro aprimorar minhas habilidades para enfrentar desafios cada vez mais
                            complexos. Tenho formação acadêmica em Técnico em Informática e Ciência da Computação.
                        </p>
                        <div className="social">
                            <Link to="mailto:everaldoinfortecnico@gmail.com" target="_blank">
                                <FaSquareEnvelope className="icon" />
                            </Link>
                            <Link to="https://www.linkedin.com/in/everaldo-martins-de-oliveira-214400b3/" target="_blank">
                                <FaLinkedin className="icon" />
                            </Link>
                            <Link to="https://www.instagram.com/everaldo_martins1/" target="_blank">
                                <FaSquareInstagram className="icon" />
                            </Link>
                            <Link to="https://github.com/Everaldo-Martins" target="_blank">
                                <FaSquareGithub className="icon" />
                            </Link>
                        </div>
                        <Link to="/contact" className='animated-button'>
                            {lineSpan()}
                            <FaFileLines className="icon" /> Contrate-me
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