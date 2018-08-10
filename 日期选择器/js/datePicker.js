class datePicker {
    constructor(config = {}) {
        this.init(config);
    }

    init(config) {
        this.config = {
            container: 'bg-datePick-container'
        };
        this.itemLevel1 = ['bg-datePick-input', 'bg-datePick-content', 'bg-datePick-icon'];
        this.itemLevel2 = ['bg-datePick-last-year', 'bg-datePick-last-month', 'bg-datePick-year-value', 'bg-datePick-month-value', 'bg-datePick-next-month', 'bg-datePick-next-year'];
        this.itemLevel3 = ['bg-datePick-bar', 'bg-datePick-table'];
        this.item3 = ['div', 'table'];
        this.item1 = ['lastYear', 'lastMonth', 'yearValue', 'monthValue', 'nextMonth', 'nextYear'];
        this.extend(config);
        let date = new Date();
        let month;
        if (0 < date.getMonth() && date.getMonth() < 9) {
            month = `0${date.getMonth() + 1}`;
        } else {
            month = `${date.getMonth() + 1}`;
        }
        this.year = date.getFullYear();
        this.month = month;
        this.setStyle();
    }

    setElement() {
        this.container = this.$(document, this.config.container);
        this.itemLevel1.forEach(v => {
            let str = this.getConst(v);
            this[str] = this.$(this.container, v);
        });
        this.itemLevel3.forEach((v, i) => {
            let str = this.getConst(v);
            this.createEle(this.item3[i], str, this.content);
            this[str].className = v;
        });
        this.itemLevel3.forEach(v => {
            let str = this.getConst(v);
            this[str] = this.$(this.content, v);
        });
        this.itemLevel2.forEach((v, i) => {
            this.createEle('span', this.item1[i], this.bar);
            this[this.item1[i]].className = v;
        });
        this.itemLevel2.forEach((v, i) => {
            this[this.item1[i]] = this.$(this.bar, v);
        });
        let itemLevel4 = ['iconfont icon-houtui', 'iconfont icon-shangyiye', 'iconfont icon-xiayiye', 'iconfont icon-qianjin'];
        let item4 = ['lastYear', 'lastMonth', 'nextMonth', 'nextYear'];
        let sp = [];
        itemLevel4.forEach((v, i) => {
            sp[i] = document.createElement('span');
            sp[i].className = v;
            this[item4[i]].appendChild(sp[i]);
        });
    }

    bindEvent() {
        this.lastMonth.addEventListener('click', () => {
            this.getLastMonth();
        }, false);
        this.nextMonth.addEventListener('click', () => {
            this.getNextMonth();
        }, false);
        this.lastYear.addEventListener('click', () => {
            this.getLastYear();
        }, false);
        this.nextYear.addEventListener('click', () => {
            this.getNextYear();
        }, false);
        this.input.addEventListener('focus', () => {
            this.css(this.content, {
                display: 'block'
            });
        }, false);
        this.trWeek.forEach(v => {
            v.addEventListener('mouseover', (ev) => {
                this.css(ev.target, {
                    color: '#009eff'
                })
            }, false);
            v.addEventListener('mouseout', (ev) => {
                this.css(ev.target, {
                    color: 'rgb(96, 98, 102)'
                })
            }, false);
            v.addEventListener('click', (ev) => {
                let today = ev.target.innerText;
                if (0 < today && today < 9) {
                    this.today = `0${ev.target.innerText}`;
                } else {
                    this.today = today;
                }
                this.input.value = `${this.year}-${this.month}-${this.today}`;
                this.css(this.content, {
                    display: 'none'
                })
            }, false);
        });
        this.bar.addEventListener('mouseover', (ev) => {
            this.css(ev.target, {
                color: '#009eff'
            })
        }, false);
        this.bar.addEventListener('mouseout', (ev) => {
            this.css(ev.target, {
                color: 'rgb(96, 98, 102)'
            })
        }, false);
    }

    createEle(ele, rename, obj) {
        this[rename] = document.createElement(ele);
        obj.appendChild(this[rename]);
    }

    createAp(tag, obj, text = '', complex = false, index = null) {
        if (!complex) {
            this[tag] = document.createElement(tag);
            obj.appendChild(this[tag]);
        } else {
            this[tag] = document.createElement(tag);
            this[tag].innerText = text;
            tag === 'tr' ? this.trContain.push(this[tag]) : '';
            if (index === 0 && tag === 'tr') {
                this.css(this[tag], {
                    borderBottom: '1px solid #ebeef5'
                })
            } else if (tag === 'tr') {
                this.trWeek.push(this[tag]);
            }
            if (tag === 'th') {
                if (typeof text === 'number') {
                    this.thContain.push(this[tag]);
                    this.css(this[tag], {
                        padding: '6px 10px',
                        color: '#606266',
                        fontSize: '14px',
                        fontFamily: 'Helvetica',
                        fontWeight: 200,
                        cursor: 'pointer'
                    })
                } else {
                    this.thWeek.push(this[tag]);
                    this.css(this[tag], {
                        padding: '5px 10px',
                        color: '#606266',
                        fontSize: '14px',
                        fontFamily: 'Helvetica',
                        fontWeight: 400,
                    })
                }
            }
            obj.appendChild(this[tag]);
        }
    }

    initDate() {
        this.trWeek = [];
        this.trContain = [];
        this.thWeek = [];
        this.thContain = [];
        let index = 0;
        while (index < 7) {
            this.createAp('tr', this.tbody, '', true, index);
            index++;
        }
        let tempArr = this.cacl();
        let arr = [];
        let arrIndex = 0;
        while (arrIndex < 7) {
            arr[arrIndex] = tempArr.slice((arrIndex + 1) * 7 - 7, (arrIndex + 1) * 7);
            arrIndex++;
        }
        this.trContain.forEach((v, i) => {
            delete this.week;
            let suoyin = 0;
            this.week = ['日', '一', '二', '三', '四', '五', '六'];
            while (suoyin < 7) {
                if (i === 0) {
                    this.createAp('th', v, this.week[suoyin], true);
                } else {
                    this.createAp('th', v, arr[i - 1][suoyin], true);
                }
                suoyin++;
            }
        });
        this.yearValue.innerText = `${this.year}年`;
        this.css(this.yearValue, {
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '22px',
            textAlign: 'center',
            cursor: 'pointer',
            color: '#606266'
        });
        this.monthValue.innerText = `${this.month}月`;
        ;
        this.css(this.monthValue, {
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '22px',
            textAlign: 'center',
            cursor: 'pointer',
            color: '#606266'
        });
    }

    setStyle() {
        this.setElement();
        this.css(this.content, {
            width: '300px',
            border: '1px solid #e3e7ec',
            boxSizing: 'border-box',
            borderRadius: '2px',
            marginTop: '5px',
            display: 'none'
        });
        this.css(this.input, {
            width: '150px',
            height: '20px',
            textIndent: '2em',
            outline: 'none'
        });
        this.css(this.icon, {
            position: 'absolute',
            left: '12px',
            top: '10px'
        });
        this.css(this.bar, {
            width: '270px',
            margin: '5px auto',
            display: 'flex',
            justifyContent: 'space-around',
        });
        this.css(this.table, {
            borderCollapse: 'collapse',
            margin: '0 auto'
        });
        let lastYear = this.lastYear.getElementsByTagName('span')[0];
        this.css(lastYear, {
            fontSize: '14px',
            position: 'relative',
            top: '-1px',
            color: '#303133',
            cursor: 'pointer'
        });
        let nextYear = this.nextYear.getElementsByTagName('span')[0];
        this.css(nextYear, {
            fontSize: '14px',
            position: 'relative',
            top: '-1px',
            color: '#303133',
            cursor: 'pointer'
        });
        let lastMonth = this.lastMonth.getElementsByTagName('span')[0];
        this.css(lastMonth, {
            color: '#303133',
            cursor: 'pointer'
        });
        let nextMonth = this.nextMonth.getElementsByTagName('span')[0];
        this.css(nextMonth, {
            color: '#303133',
            cursor: 'pointer'
        });
        this.createAp('tbody', this.table);
        this.initDate();
        this.css(this.trContain[0], {
            borderBottom: '1px solid #e3e7ec'
        });
        this.bindEvent();
    }

    isRun() {
        let year = new Date().getFullYear();
        let isRunYear;
        year % 4 === 0 ? isRunYear = true : isRunYear = false;
        return isRunYear;
    }

    cacl() {
        let dateNum = [31, this.isRun(), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let year = this.year;
        let month = this.month;
        let weekNum = new Date(`${year},${month},01`).getDay();
        let index = 1;
        let arr = [];
        while (index <= dateNum[month - 1]) {
            arr.push(index);
            index++;
        }
        let lastIndex = weekNum;
        let lastNum = dateNum[month - 2];
        while (lastIndex > 0) {
            arr.unshift(lastNum);
            lastNum--;
            lastIndex--;
        }
        let nextNum = 42 - arr.length;
        let nextIndex = 1;
        while (nextIndex <= nextNum) {
            arr.push(nextIndex);
            nextIndex++;
        }
        return arr;
    }

    getLastMonth() {
        this.table.remove(this.table);
        console.log(this.month);
        this.month = `0${this.month - 1}`;
        console.log(this.month);
        this.setStyle();
    }

    getNextMonth() {
        this.table.remove(this.table);
        this.month = `0${this.month + 1}`;
        this.setStyle();
    }

    getLastYear() {
        this.table.remove(this.table);
        this.year = `0${this.year - 1}`;
        this.setStyle();
    }

    getNextYear() {
        this.table.remove(this.table);
        this.year = `0${this.year + 1}`;
        this.setStyle();
    }

    getConst(str) {
        let index = str.lastIndexOf('-');
        let res = str.substring(index + 1);
        return res;
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