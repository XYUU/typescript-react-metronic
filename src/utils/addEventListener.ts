export default function addEventListener(ele, event: string, fn) {
    if (ele.addEventListener) {
        ele.addEventListener(event, fn, false);
    } else {
        ele.attachEvent('on' + event, fn.bind(ele));
    }
}