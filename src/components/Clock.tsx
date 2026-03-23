import { useTimer } from "../hooks/useTimer";

const LANG_JP:string = "ja-JP";

export function Clock() {
    const {time} = useTimer();

    const dateString = time.toLocaleDateString(LANG_JP, {
        year:"numeric", month:"long", day:"numeric", weekday:"long"
    });

    const timeString = time.toLocaleDateString(LANG_JP);
    
    // クリーンアップ：タイマー停止
    return(
        <div className="clock-container" style={{ textAlign: 'center', margin: '30px 0' }}>
            <p style={{ margin: 0, color: '#666' }}>{dateString}</p>
            <h1 style={{ margin: 0, fontSize: '3rem', fontFamily: 'monospace' }}>
                {timeString}
            </h1>
        </div>
    );
}