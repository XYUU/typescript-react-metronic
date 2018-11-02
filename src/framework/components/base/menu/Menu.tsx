import React from 'react';
import classNames from 'classnames';
import { outerWidth, offset, getViewPort, css } from '../../../../Util';

export interface MenuItemData {
    label: string
    icon?: string
    bullet?: string
    to?: string
    badge?: {
        label: string
        mode: string
    }
    children?: MenuItemData[]
    mode?: mode
    width?: number
    type?: 'section' | 'item'
}

export interface MenuItemProps {
    item: MenuItemData
    isRelative?: boolean
    arrow?: arrow
    around?: around
    pull?: boolean
    isRTL?: boolean
    mode?: mode
}

export interface MenuItemStates {
    isHover: boolean
    isOpen: boolean
    arrowStyle?: React.CSSProperties
}

export class MenuItem extends React.PureComponent<MenuItemProps, MenuItemStates> {
    menu: React.RefObject<HTMLLIElement>;
    submenu: React.RefObject<SubMenu>;

    constructor(props?: MenuItemProps, context?: any) {
        super(props, context);
        this.state = { isHover: false, isOpen: false };
        this.menu = React.createRef<HTMLLIElement>();
        this.submenu = React.createRef<SubMenu>();
    }

    hoverToggle = (isExpand) => {
        return () => this.setState({ isHover: isExpand });
    }

    openToggle = (isOpen) => {
        return () => this.setState({ isOpen: isOpen });
    }

    componentDidMount() {
        const { arrow, isRTL, item, around, pull } = this.props,
            mode = item.mode,
            menu = this.menu.current,
            submenu = this.submenu.current;
        if (arrow === 'down') {
            let pos = 0, arrowStyle;
            if (!mode || mode == 'classic' || mode == 'fixed') {
                pos = outerWidth(menu) / 2;
                if (around == 'left') {
                    if (pull) {
                        if (isRTL) {
                            pos = pos + Math.abs(parseFloat(css(submenu, 'margin-right')));
                        } else {
                            pos = pos + Math.abs(parseFloat(css(submenu, 'margin-left')));
                        }
                    }
                } else {
                    if (pull) {
                        if (isRTL) {
                            pos = pos + Math.abs(parseFloat(css(submenu, 'margin-left')));
                        } else {
                            pos = pos + Math.abs(parseFloat(css(submenu, 'margin-right')));
                        }
                    }
                    pos = parseInt(css(submenu, 'width')) - pos;
                }
                arrowStyle = { [isRTL ? 'right' : 'left']: `${pos}px` };
            } else {
                if (mode == 'center' || mode == 'full') {
                    pos = offset(menu).left - ((getViewPort().width - parseInt(css(submenu, 'width'))) / 2);
                    pos = pos + outerWidth(menu) / 2;
                    arrowStyle = { 'left': `${pos}px` };
                    if (isRTL) {
                        arrowStyle.right = 'auto';
                    }
                }
            }
            arrowStyle && this.setState({ arrowStyle: arrowStyle });
        }
    }

    render() {
        const { item, isRelative, arrow, around, mode } = this.props,
            { isHover, isOpen, arrowStyle } = this.state,
            { hoverToggle, openToggle } = this,
            fixed = mode == 'fixed' && item.mode != 'fixed';
        return (
            item.type === 'section' ?
                <li className="m-menu__section">
                    <h4 className="m-menu__section-text">{item.label}</h4>
                    <i className="m-menu__section-icon flaticon-more-v3"></i>
                </li>
                :
                <li onMouseEnter={hoverToggle(true)} onMouseLeave={hoverToggle(false)} ref={this.menu} className={classNames("m-menu__item",
                    { "m-menu__item--rel": isRelative, "m-menu__item--submenu": !fixed && item.children, "m-menu__item--hover": !fixed && isHover, "m-menu__item--open": isOpen })}                >
                    {fixed ?
                        <h3 className="m-menu__heading" onClick={openToggle(!isOpen)}>
                            <span className="m-menu__link-text">{item.label}</span>
                            <i className="m-menu__ver-arrow la la-angle-right" />
                        </h3>
                        :
                        <a href={item.to ? item.to : "javascript:;"} className="m-menu__link" onClick={openToggle(!isOpen)}>
                            {item.icon ? <i className={classNames('m-menu__link-icon', item.icon)} /> : null}
                            {item.bullet ? <i className={classNames('m-menu__link-bullet', item.bullet)}><span /></i> : null}
                            {item.badge ?
                                <span className="m-menu__link-title">
                                    <span className="m-menu__link-wrap">
                                        <span className="m-menu__link-text">{item.label}</span>
                                        <span className="m-menu__link-badge">
                                            <span className={classNames("m-badge", item.badge.mode)}>{item.badge.label}</span>
                                        </span>
                                    </span>
                                </span>
                                :
                                <span className="m-menu__link-text">{item.label}</span>
                            }
                            {
                                item.children ?
                                    [<i className={classNames("m-menu__hor-arrow", "la", `la-angle-${arrow || 'right'}`)} key="hor" />,
                                    <i className="m-menu__ver-arrow la la-angle-right" key="ver" />]
                                    :
                                    null
                            }
                        </a>
                    }
                    <SubMenu menu={item} mode={mode || item.mode} width={item.width} around={around} arrowStyle={arrowStyle} forwardedRef={this.submenu} />
                </li>
        );
    }
}

export interface SubMenuProps {
    menu: MenuItemData
    around?: around
    mode?: mode
    pull?: boolean
    arrowStyle?: React.CSSProperties
    width?: number
    forwardedRef: any
}

type around = "left" | "right";
type arrow = "down" | "right";
type mode = "classic" | "fixed" | "center" | "full";

export class SubMenu extends React.PureComponent<SubMenuProps> {

    constructor(props?: SubMenuProps, context?: any) {
        super(props, context);
    }

    render() {
        const { menu, around, mode, arrowStyle, pull, width, forwardedRef } = this.props,
            fixed = mode == 'fixed',
            menus = menu.children,
            items = menus && menus.map((item, index) =>
                <MenuItem item={item} key={index} mode={menu.mode} />
            );
        return menus ? fixed != (menu.mode == 'fixed') ?
            <ul className="m-menu__inner" ref={forwardedRef}>
                {items}
            </ul>
            :
            <div className={classNames("m-menu__submenu", `m-menu__submenu--${mode || 'classic'}`, `m-menu__submenu--${around || 'right'}`, { 'm-menu__submenu--pull': pull })}
                style={{ width: width }} ref={forwardedRef}>
                <span className="m-menu__arrow" style={arrowStyle} />
                {fixed ?
                    <div className="m-menu__subnav">
                        <ul className="m-menu__content">
                            {items}
                        </ul>
                    </div>
                    :
                    <ul className="m-menu__subnav">
                        {items}
                    </ul>
                }
            </div>
            : null;
    }
}

export interface MenuProps {
    menus: MenuItemData[]
    className: string
}

export interface MenuStates {

}

export class Menu extends React.Component<MenuProps, MenuStates> {
    constructor(props?: MenuProps, context?: any) {
        super(props, context);
    }

    render() {
        const { menus, className } = this.props;
        return (
            <ul className={className}>
                {menus.map((item, index) =>
                    <MenuItem item={item} key={index} isRelative={true} mode={item.mode} arrow="down" around="left" />
                )}
            </ul>
        );
    }
}