---
outline: deep
---

# 元素显示模式

## 块元素(block)
特点:
>* 在页面中独占一行,不会与任何元素共用一行,是从上到下排列的
>* 默认宽度,撑满父元素
>* 默认高度,由内容撑开
>* 可以通过css设置宽高

### 常见的块元素
```html
html,body,h1~h6,hr,p,pre,
div,ul,ol,li,dl,dt,dd,
table,tbody,thread,tfoot,tr,caption,form,option
```

## 行内元素(inline)
特点
>* 在页面中**不独占一行**,一行中不能容纳下的行内元素,会在下一行开始继续从左到右排列
>* 默认宽度由内容撑开
>* 默认高度由内容撑开
>* 无法通过css设置宽高

```html
br,em,strong,
sup,sub,del,ins,a,label
```

## 行内块元素(inline-block)
特点
>* 在页面中**不独占一行**,一行中不能容纳下的行内元素,会在下一行开始继续从左到右排列
>* 默认宽度由内容撑开
>* 默认高度由内容撑开
>* 可以通过css设置宽高

```html
img,td,th,input,textarea,
select,button,iframe
```

