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
const travelRootFirstWithRecursive = (bTree, fn) => {
	if(!bTree) return
	fn(bTree.value)
	travelRootFirstWithRecursive(bTree.left, fn)
	travelRootFirstWithRecursive(bTree.right, fn)
}

const result = []
travelRootFirstWithRecursive(binaryTree, value => {
	result.push(value)
})
console.log(result)



//不用递归方法
const travelRootFirstWithoutRecursive = (bTree, fn) =>{
	const stack = []
	let current = bTree

	// 由于 JS 不支持 goto，我不得不这样写
	while(true){
		while(current){
			fn(current.value)
			stack.push(current)
			current = current.left
		}
		if(stack.length > 0){
			current = stack.pop()
			// fn(current.value)
			current = current.right
			continue // 这句话相当于： goto 第 27 行
		}else{
			break
		}
	}

}

const result2 = []
travelRootFirstWithoutRecursive(binaryTree, value => {
	result2.push(value)
})
console.log(result2)
