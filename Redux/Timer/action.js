export const START_TIMER = "START_TIMER";
export const STOP_TIMER = "STOP_TIMER";
export const RESET_TIMER = "RESET_TIMER";

export function startTimer(baseTime=0) {
    return {
        type: START_TIMER,
        baseTime: baseTime,
        now: new Date().getTime()
    };
}

export function stopTimer() {
    return {
        type: "STOP_TIMER",
        now: new Date().getTime()
    };
}

export function resetTimer() {
    return {
        type: "RESET_TIMER",
        now: new Date().getTime()
    }
}