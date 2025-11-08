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
    for (let element of arr) {
        max = Math.max(max, countDigits(element));
    }
    return max;
}

export function radixSort(dates: Event[]): Event[] {
    const now: number = new Date().getTime();

    const futureEvents: Event[] = dates.filter(event => new Date(event.calendar_data).getTime() >= now);

    const timestamps: number[] = futureEvents.map(event => new Date(event.calendar_data).getTime());

    if (timestamps.length === 0) return [];  

    const maxDigitCount = mostDigits(timestamps);

    for (let i = 0; i < maxDigitCount; i++) {
        let digitBuckets: Array<Array<{ event: Event; timestamp: number }>> = Array.from({ length: 10 }, () => []);

        for (let j = 0; j < futureEvents.length; j++) {
            let digit = getDigit(timestamps[j], i);
            digitBuckets[digit].push({ event: futureEvents[j], timestamp: timestamps[j] });
        }

        // Reordenar o array futureEvents baseado nos buckets
        futureEvents.length = 0;  // Limpar o array
        for (let bucket of digitBuckets) {
            for (let item of bucket) {
                futureEvents.push(item.event);
            }
        }
    }

    return futureEvents;  // Retornar o array ordenado de eventos futuros
}
