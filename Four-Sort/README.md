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