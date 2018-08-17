class Message {
    constructor(config = {}) {
        this.config = {
            container: 'bg-message-container',
            message: '这是一段测试提示语',
            type: 'jinggao'
        };
        this.extend(config);
        this.init()
    }

    init() {
        this.getElement();
        this.setStyle();
        this.setPosition();
    }

    getElement() {
        this.container = this.$(document, 'bg-message-container');
        this[this.config.type] = this.createElement(this.container, 'span', `iconfont icon-${this.config.type}`);
        this.message = this.createElement(this.container, 'span', 'bg-message-message');
        this.close = this.createElement(this.container, 'span', 'bg-message-close');
    }

    createElement(parent, tagName, className) {
        let tempNode = document.createElement(tagName);
        tempNode.className = className;
        parent.appendChild(tempNode);
        return tempNode;
    }

    setStyle() {
        this.css(this.container, {
            position: 'fixed',
            left: '50%',
            top: 20,
            padding: '0px 40px',
            transform: 'translate(-50%)',
            borderRadius: '5px',
            height: '35px',
            border: `1px solid ${this.recognize(this.config.type).borderColor}`,
            background: this.recognize(this.config.type).bgColor
        });
        this.css(this[this.config.type], {
            position: 'absolute',
            left: 0,
            padding: '0 10px',
            height: '35px',
            lineHeight: '35px',
            fontSize: '22px',
            color: this.recognize(this.config.type).color
        });
        this.message.innerText = this.config.message;
        this.css(this.message, {
            display: 'inline-block',
            fontSize: '14px',
            height: '35px',
            lineHeight: '35px',
            color: this.recognize(this.config.type).color
        });
        this.close.innerText = '×';
        this.css(this.close, {
            position: 'absolute',
            top: '3px',
            right: '10px',
            cursor: 'pointer',
            fontSize: '18px',
            color: this.recognize(this.config.type).color
        })
    }

    recognize(type) {
        let theme = {};
        switch (type) {
            case 'tishi':
                theme = {
                    color: '#909399',
                    bgColor: '#edf2fc',
                    borderColor: '#ebeef5'
                };
                break;
            case 'jinggao':
                theme = {
                    color: '#e6a23c',
                    bgColor: '#fdf6ec',
                    borderColor: '#faecd8'
                };
                break;
            case 'chenggong':
                theme = {
                    color: '#67c23a',
                    bgColor: '#f0f9eb',
                    borderColor: '#e1f3d8'
                };
                break;
            case 'shibai':
                theme = {
                    color: '#f56c6c',
                    bgColor: '#fef0f0',
                    borderColor: '#fde2e2'
                };
                break;
        }
        return theme;
    }

    setPosition() {

    }

    extend(config) {
        Object.assign(this.config, config);
    }

    $(parent, obj) {
        return parent.querySelector(`.${obj}`);
    }

    css(obj, option) {
        for (let i in option) {
            obj.style[i] = option[i];
        }
    }
}