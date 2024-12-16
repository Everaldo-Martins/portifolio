'use client'
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };
  return (
    <header className="w-full flex flex-row justify-center items-center">
      <nav className="w-full sm:max-w-[1366] p-3 flex flex-row justify-between items-center gap-3">
        <div className="w-36">
          <Link href="/">
            <img className="w-full" src="logo.svg" alt="EMD" />
          </Link>
        </div>
        <ul className={`hidden sm:flex flex-row justify-between items-center gap-5 ${isOpen ? 'flex' : ''}`}>
          <li><Link className="text-foreground text-sm hover:text-button" href="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link className="text-foreground text-sm hover:text-button" href="/about" onClick={handleLinkClick}>Sobre</Link></li>
          <li><Link className="text-foreground text-sm hover:text-button" href="/experience" onClick={handleLinkClick}>Experiência</Link></li>
          <li><Link className="text-foreground text-sm hover:text-button" href="/skills" onClick={handleLinkClick}>Habilidades</Link></li>
          <li><Link className="text-foreground text-sm hover:text-button" href="/teams" onClick={handleLinkClick}>Equipe</Link></li>
          <li><Link className="text-foreground text-sm hover:text-button" href="/contact" onClick={handleLinkClick}>Contato</Link></li>
        </ul>
        <div className="sm:hidden" onClick={toggleMenu}>|||</div>
    </nav>
    </header>
  );
}
