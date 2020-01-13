const selectSort = arr => {
	if (arr.length <= 1) return arr
	for (let i = 0; i < arr.length - 1; i++) { // 一共选择 length - 1 次，因为最后一次只有一个元素不用选
		let minIndex = i  //  假设第一个是最小的
		for(let k = i + 1; k < arr.length; k++){
			if(arr[k] < arr[i]){
				minIndex = k // 第 k 个比第一个小，就用 minIndex 记住 k
			}
		}
		[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]] //  交换 arr[i] 和 arr[minIndex] 的值
	}
	return arr
}

selectSort([3, 2, 1]) // [1, 2, 3]
selectSort([1, 2, 1]) // [1, 2, 3]