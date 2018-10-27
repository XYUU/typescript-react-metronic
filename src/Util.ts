export function offset(elem: HTMLElement) {
    let rect, win;
    if (!elem) {
        return;
    }
    // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
    // Support: IE <=11 only
    // Running getBoundingClientRect on a
    // disconnected node in IE throws an error
    if (!elem.getClientRects().length) {
        return { top: 0, left: 0 };
    }
    // Get document-relative position by adding viewport scroll to viewport-relative gBCR
    rect = elem.getBoundingClientRect();
    win = elem.ownerDocument.defaultView;
    return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
    };
}

export function getViewPort() {
    let e: Window | HTMLElement = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return {
        width: e[a + 'Width'],
        height: e[a + 'Height']
    };
}

export function camelCase(name: string) {
    return name.replace(/\-(\w)/g, function (str, letter) {
        return letter.toUpperCase();
    });
}

export function hyphen(name: string) {
    return name.replace(/([A-Z])/g, "-$1").toLowerCase();
}

export function css(el, styleProp: string, value?) {
    if (!el) {
        return;
    }
    if (value !== undefined) {
        el.style[styleProp] = value;
    } else {
        const defaultView = (el.ownerDocument || document).defaultView;
        // W3C standard way:
        if (defaultView && defaultView.getComputedStyle) {
            // sanitize property name to css notation
            // (hyphen separated words eg. font-Size)
            styleProp = hyphen(styleProp);
            return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
        } else if (el.currentStyle) { // IE
            // sanitize property name to camelCase
            styleProp = camelCase(styleProp);
            const value = el.currentStyle[styleProp];
            // convert other units to pixels on IE
            if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
                return (function (value) {
                    var oldLeft = el.style.left,
                        oldRsLeft = el.runtimeStyle.left;
                    el.runtimeStyle.left = el.currentStyle.left;
                    el.style.left = value || 0;
                    value = el.style.pixelLeft + "px";
                    el.style.left = oldLeft;
                    el.runtimeStyle.left = oldRsLeft;
                    return value;
                })(value);
            }
            return value;
        }
    }
}

export function outerWidth(el: HTMLElement, margin?: boolean): number {
    if (margin === true) {
        let width = el.offsetWidth;
        width += parseFloat(css(el, 'margin-left')) + parseFloat(css(el, 'margin-right'));
        return width;
    } else {
        const width = el.offsetWidth;
        return width;
    }
}

export function addEventListener(ele, event: string, fn) {
    if (ele.addEventListener) {
        ele.addEventListener(event, fn, false);
    } else {
        ele.attachEvent('on' + event, fn.bind(ele));
    }
}

export function removeEventListener(ele, event: string, fn) {
    if (ele.removeEventListener) {
        ele.removeEventListener(event, fn, false);
    } else {
        ele.detachEvent('on' + event, fn.bind(ele));
    }
}

// export function createAction<Payload>(actionType: string) {
//     return (payload?: Payload) => ({ type: actionType, payload: payload });
// }

// export function handleActions<StateAndPayload>(reducerMap: any, initialState: StateAndPayload, options?: any) {
//     return (state, action) => {
//         const fun = reducerMap[action.type];
//         return fun && fun(state, action) || initialState;
//     }
// }

//防抖(debounce) 和 节流(throttle) 库 lodash