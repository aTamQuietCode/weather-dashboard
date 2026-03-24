import { useTimer } from "../hooks/useTimer";
import "./Clock.css";

const LANG_JP:string = "ja-JP";

interface ClockProps {
  // 秒単位の時差（オプションにする：なければ自分のPCの時間）
  timezoneOffset?: number;
}

export function Clock({ timezoneOffset = 0 }: ClockProps) {
    const {time} = useTimer();
    
    // 1. タイムゾーンを考慮した「現地時刻」を計算
    // time.getTimezoneOffset() は「分」なので 60 * 1000 倍してミリ秒に
    // timezoneOffset は「秒」なので 1000 倍してミリ秒に
    const localTime = new Date(
        time.getTime() + (time.getTimezoneOffset() * 60 * 1000) + (timezoneOffset * 1000)
    );

    const dateString = time.toLocaleDateString(LANG_JP, {
        year:"numeric",
        month:"long",
        day:"numeric",
        weekday:"long"
    });

    const timeString = localTime.toLocaleTimeString(LANG_JP, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false // 24時間表記
    });
    
    // クリーンアップ：タイマー停止
    return(
        <div className="clock-container">
            <p className="date">{dateString}</p>
            <h1 className="time">{timeString}</h1>
        </div>
    );
}