const heap = [64,59,48,45,31,35,17,23,10,26]
const insert = (heap, item) => {
	heap.push(item) //  把新值放到最后一个
	siftUp(heap, heap.length-1) //  开始上升
}
siftUp = (heap, i) => {
	if(i===0){return}
	const parent = parseInt((i-1)/2)
	if(heap[i]>heap[parent]){
		console.log(`换 ${heap[i]} ${heap[parent]}`);
		[heap[i],heap[parent]]=[heap[parent],heap[i]]
		siftUp(heap, parent)
	} }

insert(heap, 60)
console.log(heap) // [64, 60, 48, 45, 59, 35, 17, 23, 10, 26, 31]