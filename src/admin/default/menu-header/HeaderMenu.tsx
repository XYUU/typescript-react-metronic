import React from 'react';
import classNames = require('classnames');
import { MenuItemData, Menu } from '../../../framework/components/base/menu/Menu';
// import './style.scss';

export interface HeaderMenuProps {
    asideHeaderMenuOn: boolean
}

export interface HeaderMenuStates {

}

export class HeaderMenu extends React.Component<HeaderMenuProps, HeaderMenuStates> {
    constructor(props?: HeaderMenuProps, context?: any) {
        super(props, context);
    }

    render() {
        const { asideHeaderMenuOn } = this.props,
            menus: MenuItemData[] = [
                {
                    label: "Actions", icon: "flaticon-add", arrow: "down", around: "left", children: [
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
                    label: "Reports", icon: "flaticon-line-graph", arrow: "down", around: "left", mode: "fixed", width: 1000, children: [
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
                    label: "Apps", icon: "flaticon-paper-plane", arrow: "down", around: "left", children: [
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
            <div className={classNames("m-header-menu", "m-aside-header-menu-mobile", "m-aside-header-menu-mobile--offcanvas", "m-header-menu--skin-light", "m-header-menu--submenu-skin-light", "m-aside-header-menu-mobile--skin-dark", "m-aside-header-menu-mobile--submenu-skin-dark", { "m-aside-header-menu-mobile--on": asideHeaderMenuOn })}>
                <Menu menus={menus} className="m-menu__nav  m-menu__nav--submenu-arrow" />
            </div>
        );
    }
}