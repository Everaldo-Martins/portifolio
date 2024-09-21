import React, { useState, useEffect, useRef } from 'react';
const texts = ["Estudante", "Web Designer", "Desenvolvedor", "Técnico em Informática"];
const typingSpeed = 200;
const erasingSpeed = 100;
const delayAfterTyping = 1000;

const Typewriter: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[index];
      const element = typingRef.current;

      if (!element) return; 

      if (!isDeleting && charIndex < currentText.length) {
        element.innerHTML = currentText.substring(0, charIndex + 1);
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        element.innerHTML = currentText.substring(0, charIndex - 1);
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), delayAfterTyping);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };
    
    const timeout = setTimeout(handleTyping, isDeleting ? erasingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, index, isDeleting]);

  return <span ref={typingRef}></span>;
};

export default Typewriter;
