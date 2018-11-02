import css from "./css";

export default function outerWidth(el: HTMLElement, margin?: boolean): number {
    if (margin === true) {
        let width = el.offsetWidth;
        width += parseFloat(css(el, 'margin-left')) + parseFloat(css(el, 'margin-right'));
        return width;
    } else {
        const width = el.offsetWidth;
        return width;
    }
}
