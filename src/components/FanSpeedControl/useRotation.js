import { useRef, useEffect } from "react";

export default function useRotation(isActive, speed = 60) {
    const rotationRef = useRef(0);
    const animationFrameRef = useRef(null);
    const elementRef = useRef(null);

    useEffect(() => {
        if (isActive) {
            startRotation();
        } else {
            stopRotation();
        }

        return () => stopRotation();
    }, [isActive]);

    const startRotation = () => {
        const rotate = () => {
            rotationRef.current = (rotationRef.current + speed / 60) % 360;
            if (elementRef.current) {
                elementRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
            }
            animationFrameRef.current = requestAnimationFrame(rotate);
        };
        rotate();
    };

    const stopRotation = () => {
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
        }
    };

    return elementRef;
}
