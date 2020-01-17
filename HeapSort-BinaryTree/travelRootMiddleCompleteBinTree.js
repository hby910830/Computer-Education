//中根序遍历顺序存储的完全二叉树
const completeBinTree = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

const travelRootMiddleCompleteBinTree = (tree, fn) => {
	const t = (tree, i, fn) => {  // i 为子树的根的索引
		if(tree === undefined || tree[i] === undefined) return
		t(tree, 2*i + 1, fn)
		fn(tree[i])
		t(tree, 2*i + 2, fn)
	}
	t(tree, 0, fn)
}

const result = []
travelRootMiddleCompleteBinTree(completeBinTree, value => {
	result.push(value)
})
console.log(result)