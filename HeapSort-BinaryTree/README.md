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
