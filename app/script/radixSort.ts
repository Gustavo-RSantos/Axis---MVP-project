interface Event {
  calendar_id: number;
  calendar_consulta: string;
  calendar_data: string;
}

function countDigits(num: number): number {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getDigit(num: number, i: number): number {
    return Math.floor(num / Math.pow(10, i)) % 10;
}

function mostDigits(arr: number[]): number {
    let max = -Infinity;
    for (const element of arr) {
        max = Math.max(max, countDigits(element));
    }
    return max;
}

export function radixSort(dates: Event[]): Event[] {
    const now: number = new Date().getTime();
    const futureEvents: Event[] = dates.filter(event => new Date(event.calendar_data).getTime() >= now);
    if (futureEvents.length === 0) return [];

    let items = futureEvents.map(event => ({
        event,
        timestamp: new Date(event.calendar_data).getTime()
    }));

    const timestamps: number[] = items.map(item => item.timestamp);
    const maxDigitCount = mostDigits(timestamps);
    for (let i = 0; i < maxDigitCount; i++) {
        const digitBuckets: Array<Array<{ event: Event; timestamp: number }>> = Array.from({ length: 10 }, () => []);
        for (const item of items) {
            const digit = getDigit(item.timestamp, i);
            digitBuckets[digit].push(item);
        }

        items = [];
        for (const bucket of digitBuckets) {
            items.push(...bucket);
        }
    }
    return items.map(item => item.event);
}