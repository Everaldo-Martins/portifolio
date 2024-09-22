import React, { useEffect, useRef } from 'react';
import '../style/BouncingBlob.css';

class BouncingBlob {
  element: HTMLElement;
  x: number;
  y: number;
  xVel: number;
  yVel: number;

  constructor(element: HTMLElement, x: number, y: number, xVel: number, yVel: number) {
    this.element = element;
    this.x = x;
    this.y = y;
    this.xVel = xVel;
    this.yVel = yVel;
  }

  updatePosition() {
    this.x += this.xVel;
    this.y += this.yVel;

    this.xVel *= (this.x < 0 || this.x > window.innerWidth - this.element.offsetWidth) ? -1 : 1;
    this.yVel *= (this.y < 0 || this.y > window.innerHeight - this.element.offsetHeight) ? -1 : 1;
    this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }
}

const BouncingBlobs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const colors = ['blue', 'pink', 'purple'];
    const blobs: BouncingBlob[] = [];

    colors.forEach(color => {
      const blob = document.createElement('span');
      blob.classList.add('bouncing-blob', `bouncing-blob--${color}`);
      container.appendChild(blob);

      const x = Math.random() * (window.innerWidth - blob.offsetWidth);
      const y = Math.random() * (window.innerHeight - blob.offsetHeight);
      const xVel = (Math.random() - 0.5) * 2;
      const yVel = (Math.random() - 0.5) * 2;

      blobs.push(new BouncingBlob(blob, x, y, xVel, yVel));
    });

    function animate() {
      blobs.forEach(blob => blob.updatePosition());
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      blobs.forEach(blob => blob.element.remove());
    };
  }, []);

  return <div ref={containerRef} className="blob-container"></div>;
};

export default BouncingBlobs;