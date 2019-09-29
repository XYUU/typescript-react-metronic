# metronic皮肤的react + typescript实现

## 代码笔记
### bootstrap框架引入
```jsx
import "../../../framework/vendors/bootstrap/bootstrap.scss";
```

```scss
@import "../../../framework/components/general/forms/config";
@import "../../../framework/components/general/forms/checkbox-radio";
@import "../../../framework/components/general/forms/input";
```

### 等分圆
```TS
        const { bg } = this,
            { awards } = this.props,
            ctx = bg.current.getContext("2d"),
            angle = 360 / awards.length;
        var x = 254, y = 254, r = 254, temp = 0;
        var colors = ["#FF0000", "#0000FF", "#FFFF00", "#00FF00", "#00FFFF", "#FF00FF"];
        ctx.lineWidth = 5;
        for (var i = 0; i < awards.length; i++) {
            ctx.beginPath();
            ctx.lineTo(x, y);
            var startAngle = temp * Math.PI / 180;
            var endAngle = (angle + temp) * Math.PI / 180;
            ctx.arc(x, y, r, startAngle, endAngle, false);
            ctx.fillStyle = colors[i];
            ctx.fill();
            temp += angle;
        }
```
## 图表暂定
Recharts
"redux-saga-ie8"
"redux": "^3.7.2",
"immutable": "^3.8.1"
React Virtualized

reactstrap
https://reactstrap.github.io/components/popovers/
react-bs-notifier
react-redux-toastr
react-toastr
dom-helpers
sweetalert2-react-content
https://github.com/souhe/reactScrollbar
https://www.npmjs.com/package/perfect-scrollbar
React-Perfect-Scrollbar
react-scroll

## 控制台考虑使用
xterm.js

## 侧滑
swipe-js-iso
不建议使用react-swipe

## 去掉
"@types/redux-actions": "^2.3.1",
"redux-actions": "^2.6.3",
因为其不兼容IE8，但使用的api兼容其API接口，为今后切换过去做准备。

## polyfill
```ts
export const CONTENT_TYPE = "Content-Type",
    ContentType = {
        ALL: "*/*",
        XML: "application/xml",
        JSON: "application/json;charset=UTF-8",
        FORM: "application/x-www-form-urlencoded",
        STREAM: "application/octet-stream",
        TEXT: "text/html"
    },
    Method = {
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT',
        DELETE: 'DELETE',
        HEAD: 'HEAD'
    };

fetch("user", { credentials: "include" })
    .then((resp) => resp.json())
    .then((json) => {
        const Page = json.data ? App : Login,
            root = document.getElementById('root'),
            store = configureStore();
        ReactDOM.render(
            <Provider store={store}>
                <Page />
            </Provider>
            , root);
    });
```

## 库的负担：
1. 做前端引入库要考虑体积的大小。
为了两三行代码引入一个库，不合算。
1. 还要考虑浏览器兼容性等实现。
引入一个库还要修补浏览器兼容性，破坏了早期期望的一致性，带来了额外的工作量。
1. 版本控制和升级机制。
因历史问题导致的后续版本推倒重来，无法传承。

Lodash和Underscore存在柯里化的问题，基于这个问题，在函数式流行的今天，其无法满足第3点是肯定的。
Ramda在浏览器兼容方面存在问题，只能作为将来的备选方案。
