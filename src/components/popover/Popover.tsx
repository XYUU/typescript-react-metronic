import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';

export interface PopoverProps {

}
export interface PopoverStates {

}
export class Popover extends React.Component<PopoverProps, PopoverStates> {

    constructor(props?: PopoverProps, context?: any) {
        super(props, context);
        const doc = window.document;
        const node = doc.getElementById("root");
        doc.addEventListener("click", () => {
            ReactDOM.unmountComponentAtNode(node);
        });
    }

    componentWillUnmount() {
        console.log("Popover Unmount");
    }

    render() {
        const { props } = this, { children } = props;
        return ReactDOM.createPortal(
            <div className="m-popover popover fade bs-popover-top show" style={{ position: 'absolute', transform: 'translate3d(240px, 434px, 0px)', top: 0, left: 0, willChange: 'transform' }}>
                <div className="arrow" style={{ left: 128 }} />
                <h3 className="popover-header"></h3>
                <div className="popover-body">{children}</div>
            </div>
            ,
            document.body
        );
    }
}