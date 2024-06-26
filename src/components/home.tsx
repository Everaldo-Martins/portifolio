import React, { useEffect, useRef } from 'react';

const Home: React.FC = () => {
    const texts = ["Estudante", "Web Designer", "Desenvolvedor", "Técnico em Informática"];
    const speed = 300;
    let currentIndex = 0;
    let charIndex = 0;
    const typingRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const typingElement = typingRef.current;
        if (!typingElement) return;

        function typeWriter() {
            if (typingElement) {
                if (charIndex < texts[currentIndex].length) {
                    typingElement.textContent += texts[currentIndex][charIndex++];
                    setTimeout(typeWriter, speed);
                } else {
                    setTimeout(eraseWriter, speed + 1000);
                }
            }
        }

        function eraseWriter() {
            if (typingElement) {
                if (charIndex > 0) {
                    typingElement.textContent = typingElement.textContent?.slice(0, -1) || "";
                    charIndex--;
                    setTimeout(eraseWriter, speed / 2);
                } else {
                    currentIndex = (currentIndex + 1) % texts.length;
                    setTimeout(typeWriter, speed);
                }
            }
        }

        typeWriter();
    }, []);

    return (
        <>
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
            <section className="home" id="home">
                <div className="max-width">
                    <div className="home-content">
                        <div className="text-1">Olá, meu nome é</div>
                        <div className="text-2">Everaldo Martins</div>
                        <div className="text-3">E eu sou <span className="typing" ref={typingRef}></span></div>
                        <a href="#contact">Contrate-me</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;