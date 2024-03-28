---
outline: deep
---

# 盒子模型
盒子大小=content+左右padding+左右border
## padding内边距又称补白
影响盒子大小
> left 左侧
> 
> top 上
> 
> bottom 下
> 
> right 右

### 复合属性
>* 两个值
```css
.a{
    padding: 20px 10px;
}
```
**含义:上下,左右**

>* 三个值

```css
.a{
    padding: 10px 20px 30px;
}
```
**含义:上,左右,下**

>* 四个值

```css
.a{
    padding: 10px 20px 30px 40px;
}
```
**含义:上,右,下,左**

### 注意
>* padding不能写负值
>* 行内元素左右可以设置  上下可能会不占位


## content 内容区

### 默认宽度
不设置width属性的时候元素所呈现出来的宽度

总宽度=父的content-自身的左右margin

内容区域的宽度=父的content-自身左右margin-自身左右border-自身左右padding

## border边框
影响盒子大小


## margin 外边距
影响盒子位置  不影响盒子大小

复合属性:
**含义:上,右,下,左**

