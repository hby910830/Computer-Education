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