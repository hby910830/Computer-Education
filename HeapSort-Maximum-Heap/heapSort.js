array = [9,5,1,4,7,8,3,2,6]

const heapSort = arr => {
	// 第一步：数组变成堆 O(N*logN)
	const heap = heapify(arr)
	// 第二步：不停把最大的放到最后 O(N*logN)
	for(let i=0; i<heap.length-1; i++){
		// extractMax 自动把 max 放到最后
		extractMax(heap,0,heap.length-i)
	}
	return heap
}

const heapify = array => {
	for (let i = parseInt((array.length - 1) / 2); i >= 0; i--) {
		siftDown(array, i, array.length)
	}
	return array
}

const siftDown = (heap, i, length) => {
	const left = 2 * i + 1, right = 2 * i + 2
	let greater = left
	if (greater >= length) {return}
	if (right < length && heap[right] > heap[greater]) {
		greater = right
	}
	if (heap[greater] > heap[i]) {
		console.log(`换 ${heap[greater]} ${heap[i]}`);
		[heap[greater], heap[i]] = [heap[i], heap[greater]]
		siftDown(heap, greater, length)
	}
}
const extractMax = (heap, start, end) => {
	[heap[start], heap[end - 1]] = [heap[end - 1], heap[start]]
	const max = heap[end - 1]
	siftDown(heap, start, end - 1)  // 将 start 沉下去
	return max
}

heapSort(array)
console.log(array)
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
//   O(2*N*logN) O(N*logN)