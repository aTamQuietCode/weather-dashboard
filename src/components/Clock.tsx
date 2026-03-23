import { useTimer } from "../hooks/useTimer";

export function Clock() {
    const {time} = useTimer();
    
    // クリーンアップ：タイマー停止
    return(
        <div className="clock-container" style={{ textAlign: 'center', margin: '20px 0' }}>
            <h2 style={{ fontSize: '1.2rem', color: '#666' }}>
                {time.toLocaleDateString('ja-JP', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </h2>
            <div style={{ fontSize: '4rem', fontWeight: 'bold', fontFamily: 'monospace' }}>
                {time.toLocaleTimeString('ja-JP')}
            </div>
        </div>
    );
}