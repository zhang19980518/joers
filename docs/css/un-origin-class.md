---
outline: deep
---

# 伪元素选择器
很像元素,但不是元素(element),是元素特殊状态的一种描述

**selection与placeholder需要两个:,其他一个:也可以**

## ::first-letter
选中被标签包围的第一个

## ::first-line
第一行

## ::selection
选中的是被鼠标选择的文字

## ::placeholder
提示相关

## ::before
在某个元素之前

```css

p::before{
    content: "A"
}

```
## ::after
和before用法一样


