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

# 堆的 API
![image.png](https://upload-images.jianshu.io/upload_images/1181204-1e943313b421d06d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)