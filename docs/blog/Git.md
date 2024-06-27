## 1. 暂存

临时储存代码在本地，可以用 save 添加提示信息

```git
git stash save '信息'
```

## 2. 查看暂存

可以查看 git stash 的代码

```git
git stash list
```

## 3. 清除所有暂存

```git
git stash clear
```

## 4. 重置当前分支，重置成远程分支状态

```git
git reset --hard origin/远程分支名
```

## 5. 撤销提交

如果你想撤销最后一次提交，但保留文件的更改（即未暂存的更改）

```git
git reset --soft HEAD^
```

如果你想撤销最后一次提交，并且不仅撤销提交，还想撤销文件的更改

```git
git reset --hard HEAD^
```
