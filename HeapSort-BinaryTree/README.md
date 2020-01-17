# 脑图
![image.png](https://upload-images.jianshu.io/upload_images/1181204-7f44b9f4dc22f952.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 树
- 树的形式化定义
> 树是一个或多个节点的集合 T
>
> T 必须有一个根节点 root
>
> 除了 root 之外，T 剩余的节点被划分为 m>=0 个不相交的集合 T1、T2 ··· Tm，这些集合也是树

- 分析
> 树中最少有一个根节点
>
> 树是由根和子树组成的，子树个数可以为 0

# 树相关概念
- 概念
> 度 - 节点的子树的个数
>
> 叶 - 度为 0 的节点，也叫端节点
>
> 分支节点 - 非叶的节点
>
> 级 - 根节点的级为 0，任何其他节点的级比它爸爸大1
>
> 级 - 另一种解释是节点到根节点的距离
>
> 有序树 - 认为 A(B,C) 和 A(C,B) 是不同的树
>
> 森林 - m>=0 个不相交的树的集合

- 推论
> 把一棵树的根删掉，就得到了一个森林

![image.png](https://upload-images.jianshu.io/upload_images/1181204-7dea8908ade88eb6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


# 二叉树 - 另一种树形结构
- 形式化定义二叉树
> 二叉树是 m>=0 个节点的集合 T
>
> T 要么为空，要么满足 T 由一个根节点和两个二叉树组成

- 分析
> 每个节点必有 2 个子节点，子节点可以是空节点

![image.png](https://upload-images.jianshu.io/upload_images/1181204-9d6476d4f29f2cf4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 二叉树 V.S. 树
- 区别
> 二叉树可以为空，树不能
> 
> 二叉树每个节点的度不大于 2，树则没有限制
>
> 二叉树是有序的，树则分为有序和无序两种

-  二叉树 V.S. 度最大为 2 的有序树
> 在有序树中，下面两棵树是一样的
>
> 但在二叉树中，下面两棵二叉树是不一样的，因为对于二叉树来说，空节点也是节点

![image.png](https://upload-images.jianshu.io/upload_images/1181204-3a493f88edf0fcbb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

``结论：二叉树、树是两种数据结构，只不过都是树形的而已``

# 如何表示树结构
![image.png](https://upload-images.jianshu.io/upload_images/1181204-42a30efb083161a7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/1181204-ee58a89bf0f76713.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/1181204-59b07fd9e4cbc4d5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 用代码表示二叉树
```
const node1 = { 
  value: 12, left: node2, right: node3 
}
const binaryTree1 = {
  value: 'A',
  left: {
    value: 'B',
    left: {value: 'C', left:null, right:null}, 
    right: null
  },
  right: {
    value: 'D',
    left: {value: 'E', left:null, right:null}, 
    right: {value: 'F', left:null, right:null},
  }
 }
// 可以看出一个节点和一棵二叉树的结构是一样的
```

# 树能表示什么
- 公司结构
![image.png](https://upload-images.jianshu.io/upload_images/1181204-397ed50f1e9a4386.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 公式
> a - b * (c/d + e/f)

![image.png](https://upload-images.jianshu.io/upload_images/1181204-9ad7a68d1ad1d694.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 代码
> AST(抽象语法树)

![image.png](https://upload-images.jianshu.io/upload_images/1181204-8304f55478417937.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 面试题：扁平结构变成树
![image.png](https://upload-images.jianshu.io/upload_images/1181204-3d5816fdfbf4b269.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 分析1
![image.png](https://upload-images.jianshu.io/upload_images/1181204-1b782bff96badfbb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 分析2
![image.png](https://upload-images.jianshu.io/upload_images/1181204-2fab7c4a1c49de39.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 参考答案
```
const array = [
	{ id: 9, name: "前端基础设施组", parent: 8 },
	{ id: 10, name: "前端业务组", parent: 8 },
	{ id: 7, name: "后端开发部门", parent: 5 },
	{ id: 8, name: "前端开发部门", parent: 5 },
	{ id: 1, name: "CEO", parent: null },
	{ id: 2, name: "运营部", parent: 1 },
	{ id: 3, name: "财务部", parent: 1 },
	{ id: 4, name: "人事部", parent: 1 },
	{ id: 5, name: "技术部", parent: 1 },
	{ id: 6, name: "产品部", parent: 1 }
]; // 试试把顺序打乱，看看影响结果不

const array2tree = arr => {
	const tree = {};
	const queue = [...arr]; // 浅拷贝一下，防止不小心篡改输入数据
	while (queue.length > 0) {
		const item = queue.shift(); // 弹出一个节点
		if (insert(tree, item)) {   // 尝试插入
			console.log(`插入成功 ${item.name}`);
		} else {
			console.log(`插入失败，放到队尾 ${item.name}，继续看下一个`);
			queue.push(item);
			// 如果数据有问题，这里可能会有死循环
		}
	}
	return tree;
};
const insert = (tree, item) => {
	if (item.parent === null) {
		const newNode = createNode(item);
		Object.assign(tree, newNode); // 不能写 tree = createNode，因为会改变 tree 的指向，改了就无法操作原来的 tree 了
		return true;
	} else {
		const parentNode = findNodeById(tree, item.parent);
		if (parentNode) {
			const newNode = createNode(item);
			parentNode.children.push(newNode);
			return true;
		} else {
			return false;
		}
	}
};

const findNodeById = (tree, id) => {
	if (tree.id === id) {
		return tree;
	} else if (tree.children) {
		const { children } = tree;
		for (let i = 0; i < children.length; i++) {
			const result = findNodeById(children[i], id);
			if (result) return result;
		}
		return null;
	} else {
		return null;
	}
};

const createNode = item => {
	return {
		...item,
		children: []
	};
};

console.log(array2tree(array));

```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-d663b10da2f1877d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 遍历二叉树(把每个节点按指定顺序打印出来)
- 三种方法
![image.png](https://upload-images.jianshu.io/upload_images/1181204-5471f65e070ad800.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 分析
![image.png](https://upload-images.jianshu.io/upload_images/1181204-8f805ba81ca97bb8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 先根序：先根，再左，再右

```
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
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-3e7fd89459b127fa.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> 中根序：先左，再根，再右

```
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
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-6418280d1b58529b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
> 后根序：先左，再右，再根

```
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
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-2855957c5834f1e1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 不用递归，怎么遍历
- 中根序遍历（头条二面题目）
> 使用 goto 的写法，但 JS 没有 goto ，就用 while(true)/continue/break 模拟一个

```
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
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-c87a14a8abff8f05.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 先根序遍历
> 使用 goto 写法，只改动了一行

```
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
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-f6cd478049467de4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 后根序遍历
> 可以用两个 stack， 比较复杂
>
> 另一种思路是把树进行转换，后根转成中根

![image.png](https://upload-images.jianshu.io/upload_images/1181204-407d151b6d566873.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 二叉树的性质
性质1: 每层节点数
- 第 i 层（层数从0开始）
> 二叉树的第 i>=0层最多有 2^i 个节点

- 证明
> 可以用数学归纳法证明
>
> 当 i=0 时，第0层最多有 2^0 = 1 个节点
>
> 假设 i=k 时结论成立，2^k 个节点每个节点最多有两个子节点，那么 k + 1 层最多有 2^(k + 1) 个节点，结论也成立
>
> 故，结论对 i>=0 成立

![image.png](https://upload-images.jianshu.io/upload_images/1181204-800384ab352bbff7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

性质2: 总节点数
- 共 h>=1 层
> 高度为 h 的二叉树至多有 2^h - 1 个节点

- 证明
> 2^0 + 2^1 + 2^2 + ··· + 2^(h-1) = 2^h - 1
>
> 每层都是最多，总节点数就是最多了   

# 满二叉树
- 如果二叉树
> 每层都是满的，就叫做满二叉树

![image.png](https://upload-images.jianshu.io/upload_images/1181204-61fa7180ea2bd4f2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 特点
> 高度为 h=4
>
> 每层的节点数分别为1、2、4、8 ······
>
> 总节点数为 2^h - 1 = 16 - 1 = 15 

# 完全二叉树（不满）
- 如果二叉树
> 只有最后一层不满
> 
> 所以节点都尽量往左边靠
>
> 那么就是完全二叉树
>
> 完全二叉树是差一点点就满了（满二叉树）

![image.png](https://upload-images.jianshu.io/upload_images/1181204-420680d070e038bb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 完全二叉树的性质
- 高度
> 如果完全二叉树的总节点数为 n 
>
> 则高度 h=log2(n) + 1 取整

- 举例
> 节点总数为1，则 h=1
>
> 节点总数为2，则 h=2
>
> 节点总数为3，则 h=2
>
>  节点总数为4~7，则 h=3
>
>  节点总数为8~15，则 h=4

# 树形结构的存储形式（链式存储和顺序存储）
链式存储
- 二叉树如何存储
> 每个节点保存三个数据：value，left(地址)，right(地址)
>
> 如果有需要，可以多保存一个 parent(父节点地址)

- 数如何存储
> 也许你会想到每个节点保存 value 和 children
>
> 但是 children 的长度确定呢？
>
> 如果 children 的长度不确定，你就要写额外的代码
>
> 比如 node.children = []，这是一个动态数组
>
> 当数组的长度不够时，你就要把数组在内存中挪动
>
> 更经济的方法是把树转化成二叉树存储

![image.png](https://upload-images.jianshu.io/upload_images/1181204-cba5be8173d5c36e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 顺序存储
- 满二叉树可以顺序存储
> fullBinTree = ['A', 'B', 'C', 'D', 'E', 'F, 'G', 'H, 'I', 'J', 'K', 'L', 'M', 'N', 'O']

![](https://upload-images.jianshu.io/upload_images/1181204-09e61064f0f0e1fd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 完全二叉树可以顺序存储
> completeBinTree = ['A', 'B', 'C', 'D', 'E', 'F, 'G', 'H, 'I', 'J']

![image.png](https://upload-images.jianshu.io/upload_images/1181204-346f49f9d2552cb9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 普通二叉树这样存很浪费
![image.png](https://upload-images.jianshu.io/upload_images/1181204-0991fd3e1b2c0522.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 顺序存储的完全二叉树
![image.png](https://upload-images.jianshu.io/upload_images/1181204-346f49f9d2552cb9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- 获取下标为 i 的节点的子节点
> 子节点为 2i+1 和 2i+2

- 获取下标为 i 的节点的父节点下标
> 结果为 (i-1)/2 取整(i=0除外)

- 获取下标为 i 的兄弟节点
> 若 i 为0，则为根，没有兄弟节点
>
> 若 i 为单数，则 i 为左节点，i + 1 是它的弟弟
>
> 若 i 为双数，则 i 为右节点，i - 1 是它的哥哥

# 中根序遍历顺序存储的完全二叉树
![image.png](https://upload-images.jianshu.io/upload_images/1181204-d34dd33894c3cafd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 代码（综合前面的遍历知识）
```
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
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-a39de2b148ee9fb8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 二叉堆，简称堆 Heap
``尖的完全二叉树。也有三叉堆以及普通堆，但大部分时候堆就是指二叉堆``

- 二叉堆的定义
> 一棵完全二叉树
> 父节点的值 >= 子节点的值，则称为最大二叉堆
> 
> 父节点的值 <= 子节点的值，则称为最小二叉堆
>
> 注意：并没有要求左右节点的大小顺序

- 举例
> [35，26，48，10，59，64，17，23，45，31]

![image.png](https://upload-images.jianshu.io/upload_images/1181204-1fb260e8f97045c4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 最大堆的性质
- 堆序性 heap order
> 任意节点 >= 它的所有后代，最大值在堆的根上

- 完全树
> 只有最底层不满，且节点尽可能的往左靠

# 最小堆的性质
- 堆序性 heap order
> 任意节点 <= 它的所有后代，最小值在堆的根上

- 完全树
> 只有最底层不满，且节点尽可能的往左靠