# 1 选择排序
- 公式
![image.png](https://upload-images.jianshu.io/upload_images/1181204-5957c5f0b5cc8313.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 代码
```
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
```

- 时间复杂度
> n + (n - 1) + (n - 2) + ... + 1
>
> 约等于n + n + n + ... + n
>
> 即 O(n^2)

# 思维特点
- 分而治之
``把一个问题分解为两个相对简单的问题``

- 降低规模
``每次规模减少1``

# 2 计数排序
- 思路
![image.png](https://upload-images.jianshu.io/upload_images/1181204-bf12421ea9079914.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 代码
```
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
```

# 思维特点
- 空间换时间
> 用一个 hash table 计数，两次遍历解决问题
>
> 第一次遍历将数组遍历到 hash table 
>
> 第二次遍历 i 从 1 到 max ( max 为最大值)
>
> 时间复杂度降为O(n + max)

- 在某些情况下效率很低
> 元素个数比较少，值跨度大时
>
> 比如[1, 99999, 5555] 排序时就很慢
