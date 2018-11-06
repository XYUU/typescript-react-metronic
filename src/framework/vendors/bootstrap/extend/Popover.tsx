import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
// import './popover.scss';

export interface PopoverProps {
    trigger?: 'focus' | 'click'
    title?: React.ReactChild
    content?: React.ReactChild
    placement?: 'top' | 'right' | 'bottom' | 'left'
    skin?: 'dark' | 'light'
    container?: 'body'
}
export interface PopoverStates {

}
export class Popover extends React.Component<PopoverProps, PopoverStates> {

    constructor(props?: PopoverProps, context?: any) {
        super(props, context);
    }

    componentWillUnmount() {
        console.log("Popover Unmount");
    }

    render() {
        const { props } = this, { children, title, content, skin } = props;
        return (
            <React.Fragment>
                {children}
                {ReactDOM.createPortal(
                    <div className={classNames("m-popover popover fade bs-popover-top show", skin ? "m-popover--skin-" + skin : null)}
                        style={{ position: 'absolute', transform: 'translate3d(240px, 434px, 0px)', top: 0, left: 0, willChange: 'transform' }}>
                        <div className="arrow" style={{ left: 128 }} />
                        <h3 className="popover-header">{title}</h3>
                        <div className="popover-body">{content}</div>
                    </div>
                    ,
                    document.body
                )}
            </React.Fragment>
        );
    }
}