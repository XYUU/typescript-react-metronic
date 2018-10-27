import * as React from 'react';
import classNames from 'classnames';
import './style.scss';
/**
 * 参考antd设计
 * https://ant.design/components/tabs-cn/
 */
export interface TabsProps {
    defaultActiveIndex?: number
    onChange?(index: number)
    children?: Array<React.ReactElement<TabPaneProps>>
}

export interface TabsStates {
    activeIndex: number
}

export interface TabPaneProps {
    tab: React.ReactChild
}

export class TabPane extends React.Component<TabPaneProps> {
    constructor(props?: TabPaneProps, context?: any) {
        super(props, context);
    }
    render() {
        const { children } = this.props;
        return children;
    }
}

export class Tabs extends React.Component<TabsProps, TabsStates> {

    constructor(props?: TabsProps, context?: any) {
        super(props, context);
        this.state = { activeIndex: props.defaultActiveIndex || 0 }
    }

    toggle = (index: number) => () => {
        if (index != this.state.activeIndex) {
            const { onChange } = this.props;
            this.setState({ activeIndex: index });
            onChange && onChange(index);
        }
    }

    render() {
        const { toggle } = this, { activeIndex } = this.state, { children } = this.props;
        return (
            <React.Fragment>
                <ul className="nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand">
                    {React.Children.map(children, (child: React.ReactElement<TabPaneProps>, index: number) => (
                        <li className="nav-item m-tabs__item" key={index}>
                            <a className={classNames("nav-link m-tabs__link", { "active": index == activeIndex })} href="#" onClick={toggle(index)}>
                                {child.props.tab}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="tab-content">
                    {React.Children.map(children, (child: React.ReactElement<TabPaneProps>, index: number) => (
                        <div className={classNames("tab-pane", { "active": index == activeIndex })} key={index}>{child}</div>
                    ))}
                </div>
            </React.Fragment>
        );
    }
}