/** @vitest-environment jsdom */
import {render, screen} from "@testing-library/react";
import { expect, it, describe, vi, beforeEach, afterEach } from "vitest";
import { Clock } from "./Clock";

describe("Clock Component", () => {
    // 1. テスト用の固定時間を設定（2026-03-23 12:00:00 UTC）
    // これにより、テストを実行するタイミングに左右されず、常に同じ結果を得られる
    const mockDate = new Date("2026-03-23T12:00:00Z");

    beforeEach(() => {
        // 各テストの前にシステム時間を固定
        vi.useFakeTimers();
        vi.setSystemTime(mockDate);
    });

    afterEach(() => {
        // テストが終わるたびにタイマーをリセット
        vi.useRealTimers();
    });

    it("指定した時差（timezoneOffset）に基づいて、正しい現地時刻が表示されること", () => {
        // 東京 (UTC+9)
        const tokyoOffset = 32400; 
        render(<Clock timezoneOffset={tokyoOffset} />);

        // 12:00 + 9時間 = 21:00:00
        expect(screen.getByText(/21:00:00/)).toBeInTheDocument();
    });

    it("日付が日本語形式で表示されていること", () => {
        // 1つ目のテストと同じ固定時間（3月23日）が使われる
        render(<Clock timezoneOffset={32400} />);
        
        expect(screen.getByText(/2026年/)).toBeInTheDocument();
        expect(screen.getByText(/3月23日/)).toBeInTheDocument();
    });
});