import React, { useState, useEffect } from 'react';
import st from './Carousel.module.css';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Cambia cada 4 segundos

        return () => clearInterval(interval);
    }, [images]);

    if (!images || images.length === 0) return null;

    return (
        <div className={st.container}>
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img.url}
                    alt={img.alt}
                    className={`${st.img} ${index === currentIndex ? st.active : ''}`}
                />
            ))}
        </div>
    );
};

export default Carousel;