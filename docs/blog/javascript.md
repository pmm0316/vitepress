## 1. 函数节流

确保函数在一定时间间隔内最多只能执行一次<br>
使用场景：添加到按钮上，可以防止数据重复提交<br>
[示例](/components/other.html#按钮)

```javascript
function throttle(fn, delay, immediate = true) {
  let timer: any = null;
  let flag = true;
  return function () {
    if (timer) return;
    if (immediate && flag) {
      fn.apply(this, arguments);
      flag = false;
      return;
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}
```

## 2. 函数防抖

函数防抖是在一定时间内连续触发事件后，只在最后执行一次<br>
使用场景：添加到搜索框上，防止重复查询<br>
[示例](/components/other.html#搜索框)

```javascript
function debounce(fn, delay) {
  let timer: number | null = null;
  return function () {
    const args = arguments;
    timer && clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(this, args);
    }, delay);
  };
}
```
