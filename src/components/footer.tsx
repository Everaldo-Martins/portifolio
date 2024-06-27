import React, { useEffect } from 'react';

const Footer: React.FC = () => {
    useEffect(() => {
        const handleScroll = () => {
            const sticky = document.querySelector('.navbar') as HTMLElement;
            const scrollUp = document.querySelector('.scroll-up') as HTMLElement;

            if (sticky) {
                if (window.scrollY > 20) {
                    sticky.classList.add('sticky');
                } else {
                    sticky.classList.remove('sticky');
                }
            }

            if (scrollUp) {
                if (window.scrollY > 500) {
                    scrollUp.classList.add('show');
                } else {
                    scrollUp.classList.remove('show');
                }

                scrollUp.onclick = () => {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                };
            }
        };

        window.addEventListener('scroll', handleScroll);

        const copyElement = document.querySelector('.copy') as HTMLElement;
        if (copyElement) {
            copyElement.innerHTML = 'EDM - Dev Everaldo Martins <span class="far fa-copyright"></span> ' + new Date().getFullYear() + ' - Todos os direitos reservados.';
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer>
            <div className="scroll-up">
                <i className="fas fa-angle-up"></i>
            </div>
            <span className="copy"></span>
        </footer>
    );
};

export default Footer;