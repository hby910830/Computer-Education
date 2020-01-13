const countSort = arr => {
	if(arr.length <= 1) return arr
	let hashTable = {}  // 用于计数的对象
	let max = arr[0] // 用于记录最大值，假设第一个最大
	for(let i = 0; i < arr.length; i++){
		const n = arr[i]
		hashTable[n] = hashTable[n] === undefined ? 1 : hashTable[n] + 1 // n 对应的 value 要么置为1，要么加1
		if(n > max) max = n // 更新最大值
	}

	const result = [] // 要返回的数组
	console.log('hashTable')
	console.log(hashTable)
	for(let k = 1; k <= max; k++){ // 正整数数组从1开始
		if(hashTable[k] !== undefined){ // hashTable[k] 表示数字出现的次数
			for(let m = 0; m < hashTable[k]; m++){
				result.push(k) // 出现几次，就 push 几次
			}
		}
	}
	return result
}

countSort([3,2,1])
// [1, 2, 3]
countSort([1,2,1])
// [1, 1, 2]