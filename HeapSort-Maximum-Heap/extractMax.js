const heap = [64, 60, 48, 45, 59, 35, 17, 23, 10, 26, 31]

const extractMax = (heap, start, end) => {
	[heap[start], heap[end - 1]] = [heap[end - 1], heap[start]]
	const max = heap[end - 1]
	siftDown(heap, start, end - 1)  // 将 start 沉下去
	return max
}

const siftDown = (heap, i, length) => {
	const left = 2 * i + 1,
		right = 2 * i + 2
	let greater = left
	if (greater >= length) return
	if (right < length && heap[right] > heap[greater]) {
		greater = right
	}
	if (heap[greater] > heap[i]) {
		console.log(`交换 ${heap[greater]} ${heap[i]}`);
		[heap[greater], heap[i]] = [heap[i], heap[greater]]
		siftDown(heap, greater, length)
	}
}

max = extractMax(heap, 0, heap.length)
heap.pop() // 删掉最后一个多余的最大值
console.log(max, heap)
// 64, [60, 59, 48, 45, 31, 35, 17, 23, 10, 26]