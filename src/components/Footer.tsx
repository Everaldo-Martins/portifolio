import React, { useEffect } from 'react';
import '../style/Footer.css'

const Footer: React.FC = () => {    
    useEffect(() => {
        const copy = document.querySelector(".copy") as HTMLElement;
        copy.innerHTML = `&copy; EDM &#174; - Dev Everaldo Martins - ${new Date().getFullYear()} - Todos os direitos reservados.`;
    }, []);

    return (
        <footer>            
            <span className="copy"></span>
        </footer>
    );
};

export default Footer;