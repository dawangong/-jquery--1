### datePicker
1. 使用方法：
    >js中:
    - 不传参数  
    ```javascript
    new datePicker();
    ```
    - 传入配置参数
    ```javascript
    new datePicker({container:'xxx', max:'xxx', min:'xxx'});
    ```
2. datePicker配置参数详解：
    - container
        - 释义：最外层容器的className
        - 类型：字符串
        - 可选参数（第二个dataPicker起为必填参数）
        - 默认值：bg-datePick-container
    - max
        - 释义：限制日期选择器可选择的结束日期
        - 类型：字符串
        - 可选参数
        - 默认值：''
        - 示例：'2018-08-08'
    - min
        - 释义：限制日期选择器可选择的开始日期
        - 类型：字符串
        - 可选参数
        - 默认值：''
        - 示例：'2018-01-01'
3. 注意：本组件需要引入组件库图标（所有组件公用一套，且只有部分组件需要）