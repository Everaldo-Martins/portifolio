import React, { useEffect, useRef } from 'react';
import profile1 from '../assets/images/profile-1.jpg';
import profile2 from '../assets/images/profile-2.jpg';
import profile3 from '../assets/images/profile-3.jpg';
import profile4 from '../assets/images/profile-4.jpg';
import profile5 from '../assets/images/profile-5.jpg';

const Teams: React.FC = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const carousel = carouselRef.current;
        if (!wrapper || !carousel) return;

        const firstCardWidth = (carousel.querySelector(".card") as HTMLElement).offsetWidth;
        const arrowBtns = wrapper.querySelectorAll("i");
        const carouselChildrens = Array.from(carousel.children);

        let isDragging = false, isAutoPlay = true, startX: number, startScrollLeft: number, timeoutId: number;

        const cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

        carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML("afterbegin", (card as HTMLElement).outerHTML);
        });

        carouselChildrens.slice(0, cardPerView).forEach(card => {
            carousel.insertAdjacentHTML("beforeend", (card as HTMLElement).outerHTML);
        });

        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");

        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
            });
        });

        const dragStart = (e: MouseEvent) => {
            isDragging = true;
            carousel.classList.add("dragging");
            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
        };

        const dragging = (e: MouseEvent) => {
            if (!isDragging) return;
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
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
            timeoutId = window.setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
        };

        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);
        carousel.addEventListener("scroll", infiniteScroll);
        wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
        wrapper.addEventListener("mouseleave", autoPlay);

        autoPlay();

        return () => {
            carousel.removeEventListener("mousedown", dragStart);
            carousel.removeEventListener("mousemove", dragging);
            document.removeEventListener("mouseup", dragStop);
            carousel.removeEventListener("scroll", infiniteScroll);
            wrapper.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
            wrapper.removeEventListener("mouseleave", autoPlay);
        };
    }, []);

    return (
        <section className="teams" id="teams">
            <div className="max-width">
                <h2 className="title">Minha equipe</h2>
                <div className="wrapper" ref={wrapperRef}>
                    <i id="left" className="fa fa-caret-left"></i>
                    <ul className="carousel" ref={carouselRef}>
                        <li className="card">
                            <div className="img"><img src={profile1} alt="img" draggable="false" /></div>
                            <h2>Everaldo Martins</h2>
                            <span>Desenvolvedor</span>
                        </li>
                        <li className="card">
                            <div className="img"><img src={profile2} alt="img" draggable="false" /></div>
                            <h2>Joenas Brauers</h2>
                            <span>Sales Manager</span>
                        </li>
                        <li className="card">
                            <div className="img"><img src={profile3} alt="img" draggable="false" /></div>
                            <h2>Lariach French</h2>
                            <span>Online Teacher</span>
                        </li>
                        <li className="card">
                            <div className="img"><img src={profile4} alt="img" draggable="false" /></div>
                            <h2>James Khosravi</h2>
                            <span>Freelancer</span>
                        </li>
                        <li className="card">
                            <div className="img"><img src={profile5} alt="img" draggable="false" /></div>
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