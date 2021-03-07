interface MinPriorityQueue {
    enqueue(item: number, weight: number): void
    dequeue(): number | undefined // return the item of the queue with the lowest weight
}