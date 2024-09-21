import React from "react";
import '../style/Sicial.css'

const Social: React.FC = () => {
    return (
        <section className="social">
            <a href="mailto:everaldoinfortecnico@gmail.com" target="_blank" className="fa fa-envelope">
                <i className="tooltip">Contato</i>
            </a>
            <a href="https://www.linkedin.com/in/everaldo-martins-de-oliveira-214400b3/" target="_blank" className="fab fa-linkedin">
                <i className="tooltip">Linkdin</i>
            </a>
            <a href="https://www.instagram.com/everaldo_martins1/" target="_blank" className="fab fa-instagram-square">
                <i className="tooltip">Instagram</i>
            </a>
            <a href="https://github.com/Everaldo-Martins" target="_blank" className="fab fa-github">
                <i className="tooltip">Github</i>
            </a>
        </section>
    );
};

export default Social;