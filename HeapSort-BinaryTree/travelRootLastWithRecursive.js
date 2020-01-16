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
const travelRootLastWithRecursive = (bTree, fn) => {
	if(!bTree) return
	travelRootLastWithRecursive(bTree.left, fn)
	travelRootLastWithRecursive(bTree.right, fn)
	fn(bTree.value)
}

const result = []
travelRootLastWithRecursive(binaryTree, value => {
	result.push(value)
})
console.log(result)