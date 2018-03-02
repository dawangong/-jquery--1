### tab选项卡
1. 使用方法：
>js中:

```javascript
new Tab({这里传入参数可以定制tab});
```

>html中:

```html
<div class="tab-contain">
    <ul class="tab-contain.ul">
        <li class="tab-contain.item">tab1</li>
        <li class="tab-contain.item">tab2</li>
        <li class="tab-contain.item">tab3</li>
    </ul>
    <div class="tab-contain.box">1</div>
    <div class="tab-contain.box">2</div>
    <div class="tab-contain.box">3</div>
</div>
```
2. 参数解析：
  - tabPadding: '5px 20px' 含义：tab按钮的padding设置 类型：字符串
  - tabBgColor: ['#00ffd3fa', '#00ffd3fa', '#00ffd3fa'] 含义：tab按钮的背景色设置（依次） 类型：数组
  - left: 0 含义：tab选项卡整体的位置 类型：数字
  - top: 0  含义：tab选项卡整体的位置 类型：数字
  - boxWidth: 400  含义：tab选项卡展示切换区域的容器宽度 类型：数字
  - boxHeight: 400 含义：tab选项卡展示切换区域的容器高度 类型：数字
  - event: 'click' 含义：tab选项卡的触发事件 类型：字符串
  - contain:'tab-contain' 含义：tab选项卡的最外层容器类名 类型：字符串
3. 其他：
  - 如果一个页面使用多个tab，外层容器请定义不同的类名，其他照旧模板。（外层容器类名默认是模板中的：tab-contain）
  - 传递参数时前后顺序任意即可，内部已经做过了相关处理
