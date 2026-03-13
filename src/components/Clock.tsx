import {useState, useEffect} from "react";

const ONE_SECOND = 1000;

export function Clock() {
    const [time, setStime] = useState(new Date());

    useEffect(() => {
        // 1秒ごとに現在時刻を更新するタイマー
        const timerId = setInterval(() => setStime(new Date()), ONE_SECOND);
        return() => clearInterval(timerId);
    }, []);

    // クリーンアップ：タイマー停止
    return(
        <div style={{marginBottom:"30px"}}>
            <h2>{time.toLocaleDateString()}</h2>
            <div style={{fontSize:"3rem", fontWeight:"bold"}}>
                {time.toLocaleTimeString()}
            </div>
        </div>
    );
}