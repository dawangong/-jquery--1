### tab选项卡
1. 使用方法：
    >js中:
    - 不传参数  
    ```javascript
    new Tab();
    ```
    - 传入配置参数
    ```javascript
    new Tab({param1:'xxx1', param2:'xxx2'});
    ```
    - 传入回调函数的
    ```javascript
    new Tab({param1:'xxx1', param2:'xxx2'}, function() {
            // do something
    });
    ```
    >html中:
    ```html
    <body>
    <div class="dg-tab-contain">
        <ul class="dg-tab-contain.ul">
            <li class="dg-tab-contain.item">tab1</li>
            <li class="dg-tab-contain.item">tab2</li>
            <li class="dg-tab-contain.item">tab3</li>
        </ul>
        <div class="dg-tab-contain.box">1</div>
        <div class="dg-tab-contain.box">2</div>
        <div class="dg-tab-contain.box">3</div>
    </div>
    <script src="js/Tab.js"></script>
    </body>
    ```
2. tab对象参数解释：
    - configuration（参数一）
            - 含义：配置tab需要的配置参数
            - 可选参数
            - 类型：对象
            - 默认：见配置参数解释
        - callback（参数二）
            - 含义：tab选项卡切换后触发的回调函数
            - 可选参数
            - 类型：function
            - 默认：无
3. 配置参数(configuration)解释：
    - left
        - 含义：tab选项卡整体的位置
        - 默认：1 
        - 类型：数字
      - top
        - 含义：tab选项卡整体的位置
        - 默认：0 
        - 类型：数字
      - tabPadding
        - 含义：tab按钮的padding属性设置
        - 默认：'5px 20px'
        - 类型：字符串
      - tabBgColor
        - 含义：tab按钮的背景色设置（从左向右依次设置）
        - 默认：['#00ffd3fa', '#00ffd3fa', '#00ffd3fa']
        - 类型：数组
      - tabBorderColor
        - 含义：tab按钮切换后的背景色设置（从左向右依次设置） 
        - 默认：['black', 'black', 'black']
        - 类型：数组 
      - fontSize
        - 含义：tab中的字体大小
        - 默认：14
        - 类型：数字
      - fontColor
        - 含义：tab中的字体颜色
        - 默认：['white', 'white', 'white']
        - 类型：数组   
      - contentWidth
        - 含义：切换区域的容器宽度
        - 默认：400
        - 类型：数字
      - contentHeight
        - 含义：切换区域的容器高度
        - 默认：400
        - 类型：数字
      - contentBorderColor
        - 含义：切换区域的边框颜色
        - 默认：'black'
        - 类型：字符串
      - contentBorder
        - 含义：是否开启内容区域无边框模式
        - 默认：true
        - 类型：布尔值
      - event
        - 含义：触发切换的事件类型
        - 默认：'click'
        - 类型：字符串
      - contain
        - 含义：最外层容器的类名参数
        - 默认：'tab-contain'
        - 类型：字符串
4. 其他：
    - 如果一个页面使用多个tab，外层容器请定义不同的类名，其他照旧模板。（外层容器类名默认是模板中的：tab-contain）
    - 传递参数时前后顺序任意即可，内部已经做过了相关处理
5. 更新：
  - 2018.3.3
    - 增加了回调函数，在切换tab时触发
  - 2018.3.4  
    - 增加了触发tab后的背景色定制参数
    - 增加了tab间的间距参数
    - 增加了tab的字体大小及颜色的定制参数
    - 修复了第一个tab选项左侧边框没有的bug
    - 切换区域的宽高参数更改为contentWidth和contentHeight（原来为boxWidth和boxHeight）
    - 增加了tab及切换区域的边框颜色自定义参数
  - 2018.3.16
    - 整体转为es6写法
  - 2018.8.9
    - 降低类名冲突的可能性
  
