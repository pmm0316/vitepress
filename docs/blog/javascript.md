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

## 3. 不常用的 Array 方法

<span style="color: #42b883;">at()</span> 方法接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。

```javascript
const arr = ["苹果", "香蕉", "橘子", "草莓"];
console.log(arr.at(1)); // 香蕉
console.log(arr.at(-1)); // 草莓
```

<span style="color: #42b883;">findLast()</span> 方法反向迭代数组，并返回满足提供的测试函数的第一个元素的值。如果没有找到对应元素，则返回 undefined。<br>
<span style="color: #42b883;">findLastIndex()</span> 方法反向迭代数组，并返回满足所提供的测试函数的第一个元素的索引。若没有找到对应元素，则返回 -1。

```javascript
const arr2 = [5, 12, 50, 130, 44];
// findLast
console.log(arr2.findLast((val) => val > 45)); // 130
// findLastIndex
console.log(arr2.findLastIndex((val) => val > 45)); // 3
```

<span style="color: #42b883;">flat()</span> 方法创建一个新的数组，并根据指定深度递归地将所有子数组元素拼接到新的数组中。<br>
<span style="color: #42b883;">flatMap()</span> 方法对数组中的每个元素应用给定的回调函数，然后将结果展开一级，返回一个新数组。它等价于在调用 map() 方法后再调用深度为 1 的 flat() 方法（arr.map(...args).flat()），但比分别调用这两个方法稍微更高效一些。

```javascript
// flat
const arr3 = [0, 1, 2, [3, 4], [5]];
console.log(arr3.flat()); // [0, 1, 2, 3, 4, 5]
const arr4 = [0, 1, 2, [3, 4, [5]]];
console.log(arr4.flat()); //  [0, 1, 2, 3, 4, [5]]
console.log(arr4.flat(2)); // [0, 1, 2, 3, 4, 5]
// flatMap
const arr5 = [1, 2, 1];
const result = arr5.flatMap((num) => (num === 2 ? [2, 3] : 1));
console.log(result); // [1, 2, 3 , 1]
```

<span style="color: #42b883;">toString()</span> 方法返回一个字符串，表示指定的数组及其元素。

```javascript
const array1 = [1, 2, "a", "1a"];
console.log(array1.toString()); // "1,2,a,1a"
```

<span style="color: #42b883;">toLocaleString()</span> 方法返回一个字符串，表示数组中的所有元素。每个元素通过调用它们自己的 toLocaleString 方法转换为字符串，并且使用特定于语言环境的字符串（例如逗号“,”）分隔开。

```javascript
const array1 = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
const localeString = array1.toLocaleString("en", { timeZone: "UTC" });
console.log(localeString); // "1,a,12/21/1997, 2:12:00 PM"
```

Array 实例的 <span style="color: #42b883;">with()</span> 方法是使用方括号表示法修改指定索引值的复制方法版本。它会返回一个新数组，其指定索引处的值会被新值替换。

```javascript
const arr7 = [1, 2, 3, 4, 5];
console.log(arr7.with(2, 33)); // [1, 2, 33, 4, 5]
```
