import React, { useState, useEffect, useRef } from 'react';

type WaveProps = {
    color: string;
    height: number;
    width: number;
    speed: number;
};

const Wave: React.FC<WaveProps> = ({
    color = 'blue',
    height = 200,
    width = 800,
    speed = 0.05,
}) => {
    const [amplitude, setAmplitude] = useState<number>(20);
    const [frequency, setFrequency] = useState<number>(0.02);

    const frameRef = useRef<number>(0);

    useEffect(() => {
        const updateAnimation = () => {
            setAmplitude(Math.sin(frameRef.current) * 15 + 20);
            setFrequency(Math.sin(frameRef.current * 0.02) * 0.01 + 0.02);
            frameRef.current += speed;
            requestAnimationFrame(updateAnimation);
        };

        updateAnimation();

        return () => cancelAnimationFrame(frameRef.current);
    }, [speed]);

    const calcWave = (x: number) => {
        const y = amplitude * Math.sin(frequency * x);
        return y;
    };

    const totalPoints = 200;
    const increment = (width - 0) / (totalPoints - 1);

    const points = Array.from({ length: totalPoints }, (_, i) => {
        const x = i * increment;
        const y = calcWave(x);
        return `${x}, ${y + height / 2}`;
    }).join(' ');

    return (
        <svg viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
            <path d={`M 0 ${height / 2} Q ${points} ${width} ${height / 2}`} stroke={color} fill="none" />
        </svg>
    );
};

export default Wave;
