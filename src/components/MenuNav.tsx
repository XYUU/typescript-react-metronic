import * as React from 'react';
import classNames from 'classnames';
import { outerWidth, offset, getViewPort, css } from '../Util';

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

export interface Props {
    item: MenuItemData
    isRelative?: boolean
    arrow?: arrow
    around?: around
    pull?: boolean
    isRTL?: boolean
    mode?: mode
}

export interface States {
    isHover: boolean
    isOpen: boolean
    arrowStyle?: React.CSSProperties
}

export class MenuItem extends React.PureComponent<Props, States> {
    menu: React.RefObject<HTMLLIElement>;
    submenu: React.RefObject<SubMenu>;

    constructor(props?: Props, context?: any) {
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
                <li onMouseOver={hoverToggle(true)} onMouseOut={hoverToggle(false)} ref={this.menu} className={classNames("m-menu__item",
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

export interface MenuNavProps {

}

export class MenuNav extends React.PureComponent<MenuNavProps> {
    constructor(props?: MenuNavProps, context?: any) {
        super(props, context);
    }

    render() {
        const menus: MenuItemData[] = [
            {
                label: "Actions", icon: "flaticon-add", children: [
                    { label: "Create New Post", icon: "flaticon-file", to: "header/actions.html" },
                    {
                        label: "Generate Reports", icon: "flaticon-diagram", to: "header/actions.html", badge: {
                            label: "2",
                            mode: "m-badge--success"
                        }
                    },
                    {
                        label: "Manage Orders", icon: "flaticon-business", children: [
                            { label: "Latest Orders", to: "header/actions.html" },
                            { label: "Pending Orders", to: "header/actions.html" },
                            { label: "Processed Orders", to: "header/actions.html" },
                            { label: "Delivery Reports", to: "header/actions.html" },
                            { label: "Payments", to: "header/actions.html" },
                            { label: "Customers", to: "header/actions.html" }
                        ]
                    },
                    {
                        label: "Customer Feedbacks", icon: "flaticon-chat-1", children: [
                            { label: "Customer Feedbacks", to: "header/actions.html" },
                            { label: "Supplier Feedbacks", to: "header/actions.html" },
                            { label: "Reviewed Feedbacks", to: "header/actions.html" },
                            { label: "Resolved Feedbacks", to: "header/actions.html" },
                            { label: "Feedback Reports", to: "header/actions.html" }
                        ]
                    },
                    { label: "Register Member", icon: "flaticon-users", to: "header/actions.html" }
                ]
            }
            ,
            {
                label: "Reports", icon: "flaticon-line-graph", mode: "fixed", width: 1000, children: [
                    {
                        label: "Finance Reports",
                        children: [
                            { label: "Annual Reports", icon: "flaticon-map", to: "header/actions.html" },
                            { label: "HR Reports", icon: "flaticon-user", to: "header/actions.html" },
                            { label: "IPO Reports", icon: "flaticon-clipboard", to: "header/actions.html" },
                            { label: "Finance Margins", icon: "flaticon-graphic-1", to: "header/actions.html" },
                            { label: "Revenue Reports", icon: "flaticon-graphic-2", to: "header/actions.html" }
                        ]
                    },
                    {
                        label: "Project Reports",
                        children: [
                            { label: "Coca Cola CRM", bullet: "m-menu__link-bullet--line", to: "header/actions.html" },
                            { label: "Delta Airlines Booking Site", bullet: "m-menu__link-bullet--line", to: "header/actions.html" },
                            { label: "Malibu Accounting", bullet: "m-menu__link-bullet--line", to: "header/actions.html" },
                            { label: "Vineseed Website Rewamp", bullet: "m-menu__link-bullet--line", to: "header/actions.html" },
                            { label: "Zircon Mobile App", bullet: "m-menu__link-bullet--line", to: "header/actions.html" },
                            { label: "Mercury CMS", bullet: "m-menu__link-bullet--line", to: "header/actions.html" }
                        ]
                    },
                    {
                        label: "HR Reports",
                        children: [
                            { label: "Staff Directory", bullet: "m-menu__link-bullet--dot", to: "header/actions.html" },
                            { label: "Client Directory", bullet: "m-menu__link-bullet--dot", to: "header/actions.html" },
                            { label: "Salary Reports", bullet: "m-menu__link-bullet--dot", to: "header/actions.html" },
                            { label: "Staff Payslips", bullet: "m-menu__link-bullet--dot", to: "header/actions.html" },
                            { label: "Corporate Expenses", bullet: "m-menu__link-bullet--dot", to: "header/actions.html" },
                            { label: "Project Expenses", bullet: "m-menu__link-bullet--dot", to: "header/actions.html" }
                        ]
                    },
                    {
                        label: "Reporting Apps",
                        children: [
                            { label: "Report Adjusments", to: "header/actions.html" },
                            { label: "Sources & Mediums", to: "header/actions.html" },
                            { label: "Reporting Settings", to: "header/actions.html" },
                            { label: "Conversions", to: "header/actions.html" },
                            { label: "Report Flows", to: "header/actions.html" },
                            { label: "Audit & Logs", to: "header/actions.html" }
                        ]
                    }
                ]
            }
            ,
            {
                label: "Apps", icon: "flaticon-paper-plane", children: [
                    { label: "eCommerce", icon: "flaticon-business", to: "header/actions.html" },
                    {
                        label: "Audience", icon: "flaticon-computer",
                        children: [
                            { label: "Active Users", icon: "flaticon-users", to: "header/actions.html" },
                            { label: "User Explorer", icon: "flaticon-interface-1", to: "header/actions.html" },
                            { label: "Users Flows", icon: "flaticon-lifebuoy", to: "header/actions.html" },
                            { label: "Market Segments", icon: "flaticon-graphic-1", to: "header/actions.html" },
                            { label: "User Reports", icon: "flaticon-graphic", to: "header/actions.html" }
                        ]
                    },
                    { label: "Marketing", icon: "flaticon-map", to: "header/actions.html" },
                    {
                        label: "Campaigns", icon: "flaticon-graphic-2", to: "header/actions.html",
                        badge: {
                            label: "3",
                            mode: "m-badge--success"
                        }
                    },
                    {
                        label: "Cloud Manager", icon: "flaticon-infinity",
                        children: [
                            {
                                label: "File Upload", icon: "flaticon-add", to: "header/actions.html",
                                badge: {
                                    label: "3",
                                    mode: "m-badge--danger"
                                }
                            },
                            { label: "File Attributes", icon: "flaticon-signs-1", to: "header/actions.html" },
                            { label: "Folders", icon: "flaticon-folder", to: "header/actions.html" },
                            { label: "System Settings", icon: "flaticon-cogwheel-2", to: "header/actions.html" }
                        ]
                    }
                ], badge: {
                    label: "new",
                    mode: "m-badge--brand m-badge--wide"
                }
            }
        ];

        return (
            <ul className="m-menu__nav  m-menu__nav--submenu-arrow">
                {menus.map((item, index) =>
                    <MenuItem item={item} key={index} isRelative={true} mode={item.mode} arrow="down" around="left" />
                )}
            </ul>
        );
    }
}
