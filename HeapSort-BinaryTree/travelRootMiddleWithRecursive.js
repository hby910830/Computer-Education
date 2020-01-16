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