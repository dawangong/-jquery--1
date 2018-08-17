class Message {
    constructor(config = {}) {
        this.config = {
            container: 'bg-message-container',
            message: 'example',
            type: 'tishi'
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
        this.message = this.createElement(this.container, 'span', 'bg-message');
    }

    createElement(parent, tagName, className) {
        let tempNode = document.createElement(tagName);
        tempNode.className = className;
        parent.parentNode.appendChild(tempNode);
    }

    setStyle() {
        this.css(this[this.config.type], {
            padding: '0 10px',
            color: this.recognize(this.config.type)
        })
    }

    recognize(type) {
        let color;
        switch (type) {
            case 'tishi': color = 'red';break;
            case 'jinggao': color = 'red';break;
            case 'chenggong': color = 'red';break;
            case 'shibai': color = 'red';break;
        }
        return color;
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