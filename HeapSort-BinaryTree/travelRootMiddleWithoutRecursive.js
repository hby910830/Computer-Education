const node = (value, left, right) => {
	return {
		value,
		left,
		right
	}
}

const binaryTree =
node('A',
	node('B', node('D'), undefined),
	node('C',
		node('E',undefined, node('G')),
		node('F', node('H'), node('G'))
	)
)

//递归方法
const travelRootMiddleWithRecursive = (bTree, fn) => {
	if(!bTree) return
	travelRootMiddleWithRecursive(bTree.left, fn)
	fn(bTree.value)
	travelRootMiddleWithRecursive(bTree.right, fn)
}

const result = []
travelRootMiddleWithRecursive(binaryTree, value => {
	result.push(value)
})
console.log(result)


//不用递归方法
const travelRootMiddleWithoutRecursive = (bTree, fn) =>{
	const stack = []
	let current = bTree

	// 由于 JS 不支持 goto，我不得不这样写
	while(true){
		//直达最左边，途经的根节点都放到 stack 里（入栈）
		while(current){
			stack.push(current)
			current = current.left
		}
		if(stack.length > 0){
			//栈顶元素没有左节点（弹栈）
			current = stack.pop()
			fn(current.value)
			current = current.right
			continue // 这句话相当于： goto 第 27 行
		}else{
			break
		}
	}

}

const result2 = []
travelRootMiddleWithoutRecursive(binaryTree, value => {
	result2.push(value)
})
console.log(result2)
