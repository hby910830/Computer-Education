//二分查找法
/*思路：
* 将 arr 中间的元素与 n 对比，如果相等就找到了
* 如果比 n 大，就用 arr[0..mid]进行第一步
* 如果比 n 小，就用 arr[mid..len]进行第一步
* 直到数组长度缩为0，还找不到就是找不到了
 */
bSearch = (arr, n, start, end)=>{
	if(end === start) return -1
	let mid = parseInt((start + end) / 2) //某些语言会溢出
	console.log(mid)
	return n === arr[mid] ? mid :
		n > arr[mid] ? bSearch(arr,n,mid+1,end) :
			n < arr[mid] ? bSearch(arr,n,start,mid) :
				undefined
}
bSearch([2,2,2,4,5,6,7],1,0,7)
/*log: 3
* log: 1
* log: 0
* 结果：-1
* 7个数字只需要查找3次
* */
