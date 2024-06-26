import React from 'react';
import profile1 from '../assets/images/profile-1.jpg'
import profile2 from '../assets/images/profile-2.jpeg'
import profile3 from '../assets/images/profile-3.jpeg'
import profile4 from '../assets/images/profile-4.jpeg'
import profile5 from '../assets/images/profile-5.jpeg'

const Teams: React.FC = () => {
    return (
        <section className="teams" id="teams">
            <div className="max-width">
                <h2 className="title">Minha equipe</h2>
                <div className="wrapper">
                    <i id="left" className="fa fa-caret-left"></i>
                    <ul className="carousel">
                        <li className="card">
                            <div className="img"><img src={profile1} alt="img" draggable="false"/></div>
                            <h2>Everaldo Martins</h2>
                            <span>Desenvolvedor</span>
                        </li>
                        <li className="card">
                            <div className="img"><img src={profile2} alt="img" draggable="false"/>
                            </div>
                            <h2>Joenas Brauers</h2>
                            <span>Sales Manager</span>
                        </li>
                        <li className="card">
                            <div className="img"><img src={profile3} alt="img" draggable="false"/>
                            </div>
                            <h2>Lariach French</h2>
                            <span>Online Teacher</span>
                        </li>
                        <li className="card">
                            <div className="img"><img src={profile4} alt="img" draggable="false"/>
                            </div>
                            <h2>James Khosravi</h2>
                            <span>Freelancer</span>
                        </li>
                        <li className="card">
                            <div className="img"><img src={profile5} alt="img" draggable="false"/>
                            </div>
                            <h2>Kristina Zasiadko</h2>
                            <span>Bank Manager</span>
                        </li>
                    </ul>
                    <i id="right" className="fa fa-caret-right"></i>
                </div>
            </div>
        </section>
    );
};

export default Teams;