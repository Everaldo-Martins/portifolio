import React from "react";
import { Link } from "react-router-dom";
import '../style/Sicial.css'


const Social: React.FC = () => {
    return (
        <div className="social">
            <Link to="mailto:everaldoinfortecnico@gmail.com" target="_blank" className="fa-solid fa-envelope">
                <i className="tooltip">Contato</i>
            </Link>
            <Link to="https://www.linkedin.com/in/everaldo-martins-de-oliveira-214400b3/" target="_blank" className="fa-brands fa-linkedin">
                <i className="tooltip">Linkdin</i>
            </Link>
            <Link to="https://www.instagram.com/everaldo_martins1/" target="_blank" className="fa-brands fa-instagram-square">
                <i className="tooltip">Instagram</i>
            </Link>
            <Link to="https://github.com/Everaldo-Martins" target="_blank" className="fa-brands fa-github">
                <i className="tooltip">Github</i>
            </Link>
        </div>
    );
};

export default Social;