## 1. 父子组件的执行顺序

父组件

```jsx
// 父组件index.jsx
import { PageContainer } from "@ant-design/pro-components";
import { Button } from "antd";
import { useEffect, useState } from "react";
import Child from "./Child";

const DemoPage: React.FC = () => {
  const [count, setCount] = useState < number > 0;
  useEffect(() => {
    console.log("father-useEffect");
  }, []);
  console.log("father-page");
  return (
    <PageContainer ghost>
      <div>
        {count}
        <Button onClick={() => setCount((val) => val + 1)}>ddd</Button>
      </div>
      <Child />
    </PageContainer>
  );
};

export default DemoPage;
```

子组件

```jsx
// 子组件Child.jsx
import React, { useEffect } from "react";

const ChildPage: React.FC = (props: any) => {
  const { testFn } = props;
  useEffect(() => {
    console.log("child-useEffect");
  }, []);
  console.log("child-Page");
  return <div>ChildPage</div>;
};

export default React.memo(ChildPage);
```

执行顺序：father-page，child-Page，child-useEffect，father-useEffect

## 2. React.memo

memo 允许你的组件在 props 没有改变的情况下跳过重新渲染。

当父组件的 count 改变时，子组件没有使用 count，但是子组件也会重新渲染。
使用 React.memo 时，子组件不会重新渲染，优化性能可能会用到。<br>
使用方式如下：

```jsx
import React, { useEffect } from "react";

const ChildPage: React.FC<{ testFn?: any, count?: number }> = (props) => {
  const { testFn, count } = props;

  useEffect(() => {
    console.log("child-useEffect");
    testFn && testFn();
  }, []);

  console.log("child-Page");
  return <div>ChildPage</div>;
};

// export default ChildPage
export default React.memo(ChildPage);
```

## 3. useMemo

useMemo 是一个 React Hook，它在每次重新渲染的时候能够缓存计算的结果。<br>

```jsx
const [count, setCount] = useState(0);
// 适用于复杂计算时，依赖数据count没有变化时，不会重新计算，会缓存之前的计算结果
const result = useMemo(() => {
  return count + 1;
}, [count]);
```

使用场景跟 vue 的 computed 计算属性使用场景一样。
