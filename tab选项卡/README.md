### tab选项卡
1. 使用方法：
>js中:

```javascript
new Tab({param1:'xxx1', param2:'xxx2'});
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
  - tabPadding
    - 含义：tab按钮的padding属性设置
    - 默认：'5px 20px'
    - 类型：字符串
  - tabBgColor
    - 含义：tab按钮的背景色设置（从左向右依次设置）
    - 默认：['#00ffd3fa', '#00ffd3fa', '#00ffd3fa']
    - 类型：数组
  - left
    - 含义：tab选项卡整体的位置
    - 默认：0 
    - 类型：数字
  - top
    - 含义：tab选项卡整体的位置
    - 默认：0 
    - 类型：数字
  - boxWidth
    - 含义：切换区域的容器宽度
    - 默认：400
    - 类型：数字
  - boxHeight
    - 含义：切换区域的容器高度
    - 默认：400
    - 类型：数字
  - event
    - 含义：触发切换的事件类型
    - 默认：'click'
    - 类型：字符串
  - contain
    - 含义：最外层容器的类名参数
    - 默认：'tab-contain'
    - 类型：字符串
3. 其他：
  - 如果一个页面使用多个tab，外层容器请定义不同的类名，其他照旧模板。（外层容器类名默认是模板中的：tab-contain）
  - 传递参数时前后顺序任意即可，内部已经做过了相关处理
