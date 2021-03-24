### 做个总结吧

#### 获取 class component state 中的某个属性的方法
```js
this.state = {
    list: this props.list
}

expect(wrapper.state("list").length).toBe(0)
```
获取 wrapper state 中 的list 属性, 基本上就是下面的样子
<br/>


