# 二叉堆，简称堆 Heap
``尖的完全二叉树。也有三叉堆以及普通堆，但大部分时候堆就是指二叉堆``

- 二叉堆的定义
> 一棵完全二叉树
> 父节点的值 >= 子节点的值，则称为最大二叉堆
> 
> 父节点的值 <= 子节点的值，则称为最小二叉堆
>
> 注意：并没有要求左右节点的大小顺序

- 举例
> [35，26，48，10，59，64，17，23，45，31]

![image.png](https://upload-images.jianshu.io/upload_images/1181204-1fb260e8f97045c4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 最大堆的性质
- 堆序性 heap order
> 任意节点 >= 它的所有后代，最大值在堆的根上

- 完全树
> 只有最底层不满，且节点尽可能的往左靠

# 最小堆的性质
- 堆序性 heap order
> 任意节点 <= 它的所有后代，最小值在堆的根上

- 完全树
> 只有最底层不满，且节点尽可能的往左靠

# 堆的 API
![image.png](https://upload-images.jianshu.io/upload_images/1181204-1e943313b421d06d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# API - heapify 如何把完全二叉树变成堆
完全二叉树可以用数组存储

# 思路 (siftDown)
![image.png](https://upload-images.jianshu.io/upload_images/1181204-d714583aec53893e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 从最后一个节点开始，逐个向前，把每个节点与其后代比较，最大的放在上面
>
> 注意一个节点有可能需要调整多次（递归）
>
> 由于每次调整都是把数字下降，所以叫 siftDown

- 代码
```
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
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-995ea972a925750e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 问答
- 为什么要从后往前
> 为了从易到难

- 为什么从 59 开始
>  因为所以叶子节点都可以跳过

- 什么时候递归
> 调整父子之后，子节点所在的子树要再调整一次

# API - insert(heap, item) 如何向堆中插入一个值
要保证插入之后，依然得到一个堆

# 思路 (siftUp)
![image.png](https://upload-images.jianshu.io/upload_images/1181204-8b78f6d22cfaab49.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 代码
```
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
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-8bbd9fe0b302a0df.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# API - extractMax(heap) 如何弹出堆顶的值
要保证弹出后，剩下的元素依然组成堆

# 思路 (extractMax)
![image.png](https://upload-images.jianshu.io/upload_images/1181204-f320211fe57662b6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 代码
```
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
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-19254495278b9492.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 堆排序
- 思路（结合前面的知识可以很简单的写出堆排序）
![image.png](https://upload-images.jianshu.io/upload_images/1181204-9da6ab4baf523e9d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 代码
```
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
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-0a098ec711b37cf3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
