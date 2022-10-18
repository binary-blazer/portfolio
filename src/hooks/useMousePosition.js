import { useEffect, useState } from "react";

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null, delayX: null, delayY: null });

    useEffect(() => {
        const mouseMoveHandler = (event) => {
            const { clientX, clientY } = event;
            setMousePosition(options => ({ ...options, x: clientX, y: clientY }));
            setTimeout(() => {
                setMousePosition(options => ({ ...options, delayX: clientX, delayY: clientY }));
            }, 100);
        };
        document.addEventListener("mousemove", mouseMoveHandler);
        return () => {
            document.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, []);
    return mousePosition;
};

export default useMousePosition;