import React, { useState, useEffect } from "react";

interface Props {
    strings: string[];
    className?: string;
}

const TransitioningText: React.FC<Props> = ({ strings, className }) => {
    const [currentStringIndex, setCurrentStringIndex] = useState(0);
    const [currentString, setCurrentString] = useState(strings[0]);
    const [nextString, setNextString] = useState(strings[1]);

    function fadeOut(element: HTMLElement) {
        console.log(element);
        element.classList.add('fade-out');
        element.classList.remove('fade-in');
    }

    function fadeIn(element: HTMLElement, newText: string) {
        element.innerHTML = newText;
        element.classList.add('fade-in');
        element.classList.remove('fade-out');
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentStringIndex((index) => (index + 1) % strings.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [strings.length]);

    useEffect(() => {
        const nextIndex = (currentStringIndex + 1) % strings.length;
        setNextString(strings[nextIndex]);
        setCurrentString("");
    }, [currentStringIndex, strings]);

    return (
        <div style={{ position: "relative" }} className={className}>
            <div style={{
                opacity: nextString === "" ? 0 : 1,
                transition: "opacity 1s ease",
            }}
            >
                {nextString}
            </div>
            <div style={{
                opacity: currentString === "" ? 0 : 1,
                transition: "opacity 1s ease",
            }}
            >
                {currentString}
            </div>
        </div>
    );
};

export default TransitioningText;
