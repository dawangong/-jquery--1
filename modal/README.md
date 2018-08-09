### modal
1. 使用方法：
    >js中:
    - 不传参数  
    ```javascript
    new Modal();
    ```
    - 传入配置参数
    ```javascript
    new Tab({contain:'xxx', width:'xxx', height:'xxx'});
    ```
    - modal的配套服务
    ```javascript
            //显式玩法
            new Modal({}).decideFn(() => {
                //do something
                console.log(1);
            }).cancelFn(() => {
                //do something
                console.log(2);
            });
            //隐式玩法
            new Modal({}).initiativeDecide(() => {
                        //do something
                        console.log(1);
                    }).initiativeCancel(() => {
                        //do something
                        console.log(2);
                    });
    ```
    >html中: 如果需要遮盖层，需要在body子元素那级加入modal-cover
    ```html
    <body>
    <div class="dg-modal-contain">
        <div class="dg-modal-header">
            <div class="dg-modal-title">demo</div>
            <div class="dg-modal-close">x</div>
        </div>
        <div class="dg-modal-body">
            <p>xxx</p>
        </div>
        <div class="dg-modal-footer">
            <div class="dg-modal-decide">确定</div>
            <div class="dg-modal-cancel">取消</div>
        </div>
    </div>
    <div class="dg-modal-cover"></div>
    <script src="js/modal.js"></script>
    </body>
    ```
2. modal配置参数详解：
    - contain
        - 释义：最外层容器的className
        - 类型：字符串
        - 可选参数（第二个modal起为必填参数）
        - 默认值：dg-modal-contain
    - width
        - 释义：modal的宽度
        - 类型：数字
        - 可选参数
        - 默认值：400
    - height
        - 释义：modal的高度
        - 类型：数字
        - 可选参数
        - 默认值：200
    - themeColor
        - 释义：modal的主题颜色
        - 类型：字符串
        - 可选参数
        - 默认值：#5998df
    - fontFamily
        - 释义：modal的主题字体
        - 类型：字符串
        - 可选参数
        - 默认值：微软雅黑
3. 配套服务
    - decideFn
        - 接收的参数：回调函数
        - 作用：调用此方法为点击确定后添加回调函数
    - cancelFn
        - 接收的参数：回调函数
        - 作用：调用此方法为点击取消后添加回调函数
    - example：
    ```javascript
            new Modal({}).decideFn(() => {
                //do something
                console.log(1);
            }).cancelFn(() => {
                //do something
                console.log(2);
            });
    ```
4. 简便使用
    - 只含确认键modal
    ```html
    <body>
    <div class="dg-modal-contain">
        <div class="dg-modal-header">
            <div class="dg-modal-title">demo</div>
            <div class="dg-modal-close">x</div>
        </div>
        <div class="dg-modal-body">
            <p>xxx</p>
        </div>
        <div class="dg-modal-footer">
            <div class="dg-modal-decide">确定</div>
        </div>
    </div>
    <div class="dg-modal-cover"></div>
    <script src="js/modal.js"></script>
    </body>
    ```
    - 只含取消键modal
    ```html
    <body>
    <div class="dg-modal-contain">
        <div class="dg-modal-header">
            <div class="dg-modal-title">demo</div>
            <div class="dg-modal-close">x</div>
        </div>
        <div class="dg-modal-body">
            <p>xxx</p>
        </div>
        <div class="dg-modal-footer">
            <div class="dg-modal-cancel">取消</div>
        </div>
    </div>
    <div class="dg-modal-cover"></div>
    <script src="js/modal.js"></script>
    </body>
    ```
    - 无底部modal
    ```html
    <body>
    <div class="dg-modal-contain">
        <div class="dg-modal-header">
            <div class="dg-modal-title">demo</div>
            <div class="dg-modal-close">x</div>
        </div>
        <div class="dg-modal-body">
            <p>xxx</p>
        </div>
    </div>
    <div class="dg-modal-cover"></div>
    <script src="js/modal.js"></script>
    </body>
    ```
5. 更新
- 早期...
    - 修复遮盖层bug
    - 美化遮盖层效果
    - 兼容确定取消按钮的省略布局
    - 省略布局下不存在对应控件的遍历报错修复
    - 增加隐式确认取消的功能调用
- 2018.8.9
    - 修复一些情况下遮盖层无效
    - 增加弹窗自适应居中
    - 增加主题色配置项
    - 减少类名冲突的可能性
    - 增加主题字体类型配置

    