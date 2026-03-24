import { useState, useEffect } from "react";

const ONE_SECOND = 1000;

export const useTimer = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date())
        },  ONE_SECOND);
                
        return() => clearInterval(timerId); // clean up
    }, []);

    return {time};    
}