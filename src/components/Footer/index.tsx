import { useEffect } from 'react';
import './Footer.css'

function Footer () {    
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