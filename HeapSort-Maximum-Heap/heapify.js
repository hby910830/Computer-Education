const array = [35, 26, 48, 10, 59, 64, 17, 23, 45, 31]
const heapify = array => {
	for (let i = parseInt((array.length - 1) / 2); i >= 0; i--) {
		siftDown(array, i, array.length)
	}
	return array
}
siftDown = (heap, i, length) => {
	const left = 2 * i + 1, right = 2 * i + 2
	let greater = left
	if (greater >= length) {return}
	if (right < length && heap[right] > heap[greater]) {
		greater = right
	}
	if(heap[greater]>heap[i]){
		console.log(`换 ${heap[greater]} ${heap[i]}`);
    [heap[greater],heap[i]] = [heap[i],heap[greater]]
    siftDown(heap, greater, length)
}
}
heapify(array)
// [64, 59, 48, 45, 31, 35, 17, 23, 10, 26]