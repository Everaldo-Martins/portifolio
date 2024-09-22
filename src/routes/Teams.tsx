import React, { useEffect, useRef } from 'react';
import profile1 from '../assets/images/profile-1.jpg';
import profile2 from '../assets/images/profile-2.jpg';
import profile3 from '../assets/images/profile-3.jpg';
import profile4 from '../assets/images/profile-4.jpg';
import profile5 from '../assets/images/profile-5.jpg';
import '../style/Teams.css';

const Teams: React.FC = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const carousel = carouselRef.current;
        if (!wrapper || !carousel) return;

        const firstCardWidth = (carousel.querySelector(".card") as HTMLElement).offsetWidth;
        const arrowBtns = wrapper.querySelectorAll("i");
        const carouselChildren = Array.from(carousel.children);
        const cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

        let isDragging = false;
        let isAutoPlay = true;
        let startX = 0;
        let startScrollLeft = 0;
        let timeoutId: number;

        // Duplicate first and last cards for infinite scroll effect
        const duplicateCards = () => {
            carouselChildren.slice(-cardPerView).reverse().forEach(card => {
                carousel.insertAdjacentHTML("afterbegin", (card as HTMLElement).outerHTML);
            });

            carouselChildren.slice(0, cardPerView).forEach(card => {
                carousel.insertAdjacentHTML("beforeend", (card as HTMLElement).outerHTML);
            });

            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        };

        const handleArrowClick = (direction: 'left' | 'right') => {
            carousel.scrollLeft += direction === 'left' ? -firstCardWidth : firstCardWidth;
        };

        const dragStart = (e: MouseEvent) => {
            isDragging = true;
            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
            carousel.classList.add("dragging");
        };

        const dragging = (e: MouseEvent) => {
            if (!isDragging) return;
            const diff = e.pageX - startX;
            carousel.scrollLeft = startScrollLeft - diff;
        };

        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        };

        const infiniteScroll = () => {
            if (carousel.scrollLeft === 0) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
                carousel.classList.remove("no-transition");
            } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove("no-transition");
            }

            clearTimeout(timeoutId);
            if (!wrapper.matches(":hover")) autoPlay();
        };

        const autoPlay = () => {
            if (window.innerWidth < 800 || !isAutoPlay) return;
            timeoutId = setTimeout(() => {
                carousel.scrollLeft += firstCardWidth;
            }, 2500);
        };

        duplicateCards();

        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => handleArrowClick(btn.id === 'left' ? 'left' : 'right'));
        });

        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);
        carousel.addEventListener("scroll", infiniteScroll);
        wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
        wrapper.addEventListener("mouseleave", autoPlay);

        autoPlay();

        return () => {
            arrowBtns.forEach(btn => {
                btn.removeEventListener("click", () => handleArrowClick(btn.id === 'left' ? 'left' : 'right'));
            });
            carousel.removeEventListener("mousedown", dragStart);
            carousel.removeEventListener("mousemove", dragging);
            document.removeEventListener("mouseup", dragStop);
            carousel.removeEventListener("scroll", infiniteScroll);
            wrapper.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
            wrapper.removeEventListener("mouseleave", autoPlay);
        };
    }, []);

    return (
        <section className="teams">
            <div className='box-content'>
                <h2 className="title">Minha equipe</h2>
                <div className="wrapper" ref={wrapperRef}>
                    <i id="left" className="fa-solid fa-angle-left"></i>
                    <ul className="carousel" ref={carouselRef}>
                        {[profile1, profile2, profile3, profile4, profile5].map((profile, index) => (
                            <li className="card" key={index}>
                                <div className="img"><img src={profile} alt={`profile-${index}`} draggable="false" /></div>
                                <h2>{`Membro ${index + 1}`}</h2>
                                <span>{['Desenvolvedor', 'Sales Manager', 'Online Teacher', 'Freelancer', 'Bank Manager'][index]}</span>
                            </li>
                        ))}
                    </ul>
                    <i id="right" className="fa-solid fa-angle-right"></i>
                </div>
            </div>
        </section>
    );
};

export default Teams;