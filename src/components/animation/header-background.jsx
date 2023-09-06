import React, { useRef, useEffect } from 'react';
import Lottie from 'lottie-web';
import animationData from '../../assets/lottie/lottie2.json';

export const LottieBackground= () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const animation = Lottie.loadAnimation({
            container: container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData
        });

        return () => {
            animation.destroy();
        };
    }, []);

    return <div ref={containerRef} className="lottie-background" />;
}