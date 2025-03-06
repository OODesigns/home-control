import { useEffect, useRef } from 'react';

export default function useRotation(boostActive) {
    const fanGroupRef = useRef(null);
    const animationRef = useRef(null);
    const currentRotation = useRef(0);

    useEffect(() => {
        const fanGroup = fanGroupRef.current;
        if (!fanGroup) return;

        // Set the transform origin once.
        if (boostActive) {
            const speed = 60; // degrees per second
            const rotate = () => {
                currentRotation.current = (currentRotation.current + speed / 60) % 360;
                fanGroup.style.transform = `rotate(${currentRotation.current}deg)`;
                animationRef.current = requestAnimationFrame(rotate);
            };
            rotate();
        } else {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
                animationRef.current = null;
            }
        }

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [boostActive]);

    return fanGroupRef;
}
