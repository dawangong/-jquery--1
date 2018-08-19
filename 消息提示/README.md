### message
1. 使用方法：
    >js中:
    - 不传参数  
    ```javascript
    new Message();
    ```
    - 传入配置参数
    ```javascript
    new Message({message:'xxx', type:'xxx'});
    ```
2. datePicker配置参数详解：
    - message
        - 释义：提示文本
        - 类型：字符串
        - 必填参数
        - 默认值：'这是一段测试提示语'
    - type
        - 释义：消息类型
        - 类型：字符串
        - 可选参数
        - 默认值：'tishi'
3. 注意：本组件需要引入组件库图标（所有组件公用一套，且只有部分组件需要）