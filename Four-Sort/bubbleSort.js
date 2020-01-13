const bubbleSort = arr => {
	const {length} = arr
	for(let r = 0; r < arr.length -1; r++){
		for(let i = 0; i < arr.length - r - 1; i++){
			if(arr[i] > arr[i + 1]){
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
			}
		}
	}
	return arr
}

bubbleSort([3,2,1])
// [1, 2, 3]
bubbleSort([1,2,1])
// [1, 1, 2]