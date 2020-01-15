//二分查找法
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
