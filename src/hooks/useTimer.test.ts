// @vitest-environment jsdom
import {renderHook, act} from "@testing-library/react";
import {expect, it, describe, vi, beforeEach, afterEach} from "vitest";
import { useTimer } from "./useTimer";

describe("useTimer", () => {
    beforeEach(() => {
        vi.useFakeTimers(); // virtual timer
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it("Return a Date object as the initial value.", () => {
        const{result} = renderHook(() => useTimer());
        // result.current.time が Date インスタンスであることを確認
        expect(result.current.time).toBeInstanceOf(Date);
    });

    it("The time is updated after 1 second has passed.", () => {
        const{result} = renderHook(() => useTimer());
        const firstTime = result.current.time.getTime();

        act(() => {
            vi.advanceTimersByTime(1000);
        });

        const secondTime = result.current.time.getTime();
        expect(secondTime).toBeGreaterThan(firstTime);
    });
});