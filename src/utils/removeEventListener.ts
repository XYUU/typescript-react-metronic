export default function removeEventListener(ele, event: string, fn) {
    if (ele.removeEventListener) {
        ele.removeEventListener(event, fn, false);
    } else {
        ele.detachEvent('on' + event, fn.bind(ele));
    }
}