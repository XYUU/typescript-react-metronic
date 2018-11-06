bootstrap框架引入
```jsx
import "../../../framework/vendors/bootstrap/bootstrap.scss";
```
等分圆
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
图表暂定
Recharts
"redux-saga-ie8"
"redux": "^3.7.2",
"immutable": "^3.8.1"
React Virtualized

reactstrap
https://reactstrap.github.io/components/popovers/

侧滑
swipe-js-iso
不建议使用react-swipe

去掉
"@types/redux-actions": "^2.3.1",
"redux-actions": "^2.6.3",
因为其不兼容IE8，但使用的api兼容其API接口，为今后切换过去做准备。

polyfill
```ts

```