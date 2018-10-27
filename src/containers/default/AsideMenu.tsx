import * as React from 'react';
import { MenuItemData, MenuItem } from '../../components/MenuNav';

export interface AsideMenuProps {

}
export interface AsideMenuStates {

}
export class AsideMenu extends React.Component<AsideMenuProps, AsideMenuStates> {
    constructor(props?: AsideMenuProps, context?: any) {
        super(props, context);
    }
    
    render() {
        const menus: MenuItemData[] = [
            {
              label: "Dashboard", icon: "flaticon-line-graph", to: "index.html", badge: {
                label: "2",
                mode: "m-badge--danger"
              }
            },
            {
              label: "Components", icon: "flaticon-more-v3", type: "section"
            },
            {
              label: "Base", icon: "flaticon-layers", children: [
                { label: "State Colors", bullet: "m-menu__link-bullet--dot", to: "components/base/state.html" },
                { label: "Typography", bullet: "m-menu__link-bullet--dot", to: "components/base/typography.html" },
                { label: "Stack", bullet: "m-menu__link-bullet--dot", to: "components/base/stack.html" },
                { label: "Tables", bullet: "m-menu__link-bullet--dot", to: "components/base/tables.html" },
                { label: "Progress", bullet: "m-menu__link-bullet--dot", to: "components/base/progress.html" },
                { label: "Modal", bullet: "m-menu__link-bullet--dot", to: "components/base/modal.html" },
                { label: "Alerts", bullet: "m-menu__link-bullet--dot", to: "components/base/alerts.html" },
                { label: "Popover", bullet: "m-menu__link-bullet--dot", to: "components/base/popover.html" },
                { label: "Tooltip", bullet: "m-menu__link-bullet--dot", to: "components/base/tooltip.html" },
                { label: "Block UI", bullet: "m-menu__link-bullet--dot", to: "components/base/blockui.html" },
                { label: "Spinners", bullet: "m-menu__link-bullet--dot", to: "components/base/spinners.html" },
                { label: "Scrollable", bullet: "m-menu__link-bullet--dot", to: "components/base/scrollable.html" },
                { label: "Dropdown", bullet: "m-menu__link-bullet--dot", to: "components/base/dropdown.html" },
                {
                  label: "Tabs", bullet: "m-menu__link-bullet--dot", children: [
                    { label: "Bootstrap Tabs", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                    { label: "Line Tabs", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" }
                  ]
                },
                { label: "Accordions", bullet: "m-menu__link-bullet--dot", to: "components/base/accordions.html" },
                { label: "Navs", bullet: "m-menu__link-bullet--dot", to: "components/base/navs.html" },
                { label: "Lists", bullet: "m-menu__link-bullet--dot", to: "components/base/lists.html" },
                { label: "Tree View", bullet: "m-menu__link-bullet--dot", to: "components/base/treeview.html" },
                { label: "Bootstrap Notify", bullet: "m-menu__link-bullet--dot", to: "components/base/bootstrap-notify.html" },
                { label: "Toastr", bullet: "m-menu__link-bullet--dot", to: "components/base/toastr.html" },
                { label: "SweetAlert2", bullet: "m-menu__link-bullet--dot", to: "components/base/sweetalert2.html" }
              ]
            },
            {
              label: "Icons", icon: "flaticon-share", children: [
                { label: "Flaticon", bullet: "m-menu__link-bullet--dot", to: "components/icons/flaticon.html" },
                { label: "Fontawesome 5", bullet: "m-menu__link-bullet--dot", to: "components/icons/fontawesome5.html" },
                { label: "Lineawesome", bullet: "m-menu__link-bullet--dot", to: "components/icons/lineawesome.html" },
                { label: "Socicons", bullet: "m-menu__link-bullet--dot", to: "components/icons/socicons.html" }
              ]
            },
            {
              label: "Buttons", icon: "flaticon-multimedia-1", children: [
                {
                  label: "Button Base", bullet: "m-menu__link-bullet--dot", children: [
                    { label: "Default Style", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                    { label: "Square Style", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Pill Style", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Air Style", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" }
                  ]
                },
                { label: "Button Group", bullet: "m-menu__link-bullet--dot", to: "components/icons/flaticon.html" },
                { label: "Button Dropdown", bullet: "m-menu__link-bullet--dot", to: "components/icons/fontawesome5.html" },
                {
                  label: "Button Icon", bullet: "m-menu__link-bullet--dot", children: [
                    { label: "Lineawesome Icons", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                    { label: "Fontawesome Icons", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Flaticon Icons", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" }
                  ]
                }
              ]
            },
            {
              label: "Portlets", icon: "flaticon-interface-1", children: [
                { label: "Base Portlets", bullet: "m-menu__link-bullet--dot", to: "components/icons/flaticon.html" },
                { label: "Advanced Portlets", bullet: "m-menu__link-bullet--dot", to: "components/icons/fontawesome5.html" },
                { label: "Creative Portlets", bullet: "m-menu__link-bullet--dot", to: "components/icons/lineawesome.html" },
                { label: "Tabbed Portlets", bullet: "m-menu__link-bullet--dot", to: "components/icons/socicons.html" },
                { label: "Draggable Portlets", bullet: "m-menu__link-bullet--dot", to: "components/icons/socicons.html" },
                { label: "Portlet Tools", bullet: "m-menu__link-bullet--dot", to: "components/icons/socicons.html" },
                { label: "Sticky Head", bullet: "m-menu__link-bullet--dot", to: "components/icons/socicons.html" }
              ]
            },
            {
              label: "Timeline", icon: "flaticon-interface-6", children: [
                { label: "Timeline 1", bullet: "m-menu__link-bullet--dot", to: "components/icons/flaticon.html" },
                { label: "Timeline 2", bullet: "m-menu__link-bullet--dot", to: "components/icons/fontawesome5.html" }
              ]
            },
            {
              label: "Widgets", icon: "flaticon-network", children: [
                { label: "General Widgets", bullet: "m-menu__link-bullet--dot", to: "components/icons/flaticon.html" },
                { label: "Chart Widgets", bullet: "m-menu__link-bullet--dot", to: "components/icons/fontawesome5.html" }
              ]
            },
            {
              label: "Calendar", icon: "flaticon-calendar", children: [
                { label: "Basic Calendar", bullet: "m-menu__link-bullet--dot", to: "components/icons/flaticon.html" },
                { label: "List Views", bullet: "m-menu__link-bullet--dot", to: "components/icons/fontawesome5.html" },
                { label: "Google Calendar", bullet: "m-menu__link-bullet--dot", to: "components/icons/fontawesome5.html" },
                { label: "External Events", bullet: "m-menu__link-bullet--dot", to: "components/icons/fontawesome5.html" },
                { label: "Background Events", bullet: "m-menu__link-bullet--dot", to: "components/icons/fontawesome5.html" }
              ]
            },
            {
              label: "Charts", icon: "flaticon-diagram", children: [
                {
                  label: "amCharts", bullet: "m-menu__link-bullet--dot", children: [
                    { label: "amCharts Charts", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                    { label: "amCharts Stock Charts", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "amCharts Maps", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" }
                  ]
                },
                { label: "Flot Charts", bullet: "m-menu__link-bullet--dot", to: "components/icons/fontawesome5.html" },
                { label: "Google Charts", bullet: "m-menu__link-bullet--dot", to: "components/icons/fontawesome5.html" },
                { label: "Morris Charts", bullet: "m-menu__link-bullet--dot", to: "components/icons/fontawesome5.html" }
              ]
            },
            {
              label: "Maps", icon: "flaticon-placeholder-1", children: [
                { label: "Google Maps", bullet: "m-menu__link-bullet--dot", to: "components/icons/flaticon.html" },
                { label: "JQVMap", bullet: "m-menu__link-bullet--dot", to: "components/icons/fontawesome5.html" }
              ]
            },
            {
              label: "Utils", icon: "flaticon-signs-2", children: [
                { label: "Session Timeout", bullet: "m-menu__link-bullet--dot", to: "components/icons/flaticon.html" },
                { label: "Idle Timer", bullet: "m-menu__link-bullet--dot", to: "components/icons/fontawesome5.html" }
              ]
            },
            { label: "CRUD", icon: "flaticon-more-v3", type: "section" },
            {
              label: "Forms & Controls", icon: "flaticon-interface-7", children: [
                {
                  label: "Form Controls", bullet: "m-menu__link-bullet--dot", children: [
                    { label: "Base Inputs", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                    { label: "Checkbox & Radio", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Input Groups", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Switch", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Mega Options", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" }
                  ]
                },
                {
                  label: "Form Widgets", bullet: "m-menu__link-bullet--dot", children: [
                    { label: "Datepicker", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                    { label: "Datetimepicker", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Timepicker", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Daterangepicker", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Touchspin", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Maxlength", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Switch", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Multiple Select Splitter", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Bootstrap Select", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Select2", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Typeahead", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "noUiSlider", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Form Repeater", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Ion Range Slider", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Input Masks", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Summernote WYSIWYG", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Markdown Editor", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Autosize", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Clipboard", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Dropzone", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Google reCaptcha", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" }
                  ]
                },
                {
                  label: "Form Layouts", bullet: "m-menu__link-bullet--dot", children: [
                    { label: "Default Forms", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                    { label: "Multi Column Forms", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Basic Action Bars", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Sticky Action Bar", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" }
                  ]
                },
                {
                  label: "Form Validation", bullet: "m-menu__link-bullet--dot", children: [
                    { label: "Validation States", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                    { label: "Form Controls", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Form Widgets", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" }
                  ]
                }
              ]
            },
            {
              label: "Metronic Wizard", icon: "flaticon-interface-8", children: [
                { label: "Form Wizard 1", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                { label: "Form Wizard 2", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                { label: "Form Wizard 3", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                { label: "Form Wizard 4", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                { label: "Form Wizard 5", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" }
              ]
            },
            {
              label: "Metronic Datatable", icon: "flaticon-tabs", children: [
                {
                  label: "Base", bullet: "m-menu__link-bullet--dot", children: [
                    { label: "Local Data", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                    { label: "JSON Data", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Ajax Data", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "HTML Table", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Record Selection", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Local Sort", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Row Details", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Column Rendering", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Column Width", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Responsive Columns", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Translation", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" }
                  ]
                },
                {
                  label: "Scrolling", bullet: "m-menu__link-bullet--dot", children: [
                    { label: "Vertical Scrolling", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                    { label: "Horizontal Scrolling", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Both Scrolling", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" }
                  ]
                },
                {
                  label: "Locked Columns", bullet: "m-menu__link-bullet--dot", children: [
                    { label: "Left Locked Columns", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                    { label: "Right Locked Columns", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Both Locked Columns", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "HTML Table", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" }
                  ]
                },
                {
                  label: "Child Datatables", bullet: "m-menu__link-bullet--dot", children: [
                    { label: "Local Data", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                    { label: "Remote Data", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" }
                  ]
                },
                {
                  label: "API", bullet: "m-menu__link-bullet--dot", children: [
                    { label: "API Methods", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                    { label: "Events", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" }
                  ]
                }
              ]
            },
            {
              label: "DataTables", icon: "flaticon-list-3", children: [
                {
                  label: "Base", bullet: "m-menu__link-bullet--dot", children: [
                    { label: "Basic Tables", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                    { label: "Scrollable Tables", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Complex Headers", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Pagination Options", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" }
                  ]
                },
                {
                  label: "Advanced", bullet: "m-menu__link-bullet--dot", children: [
                    { label: "Column Rendering", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                    { label: "Multiple Controls", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Column Visibility", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Row Callback", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Row Grouping", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Footer Callback", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" }
                  ]
                },
                {
                  label: "Data sources", bullet: "m-menu__link-bullet--dot", children: [
                    { label: "HTML", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                    { label: "Javascript", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Ajax Client-side", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Ajax Server-side", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" }
                  ]
                },
                {
                  label: "Search Options", bullet: "m-menu__link-bullet--dot", children: [
                    { label: "Column Search", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                    { label: "Advanced Search", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" }
                  ]
                },
                {
                  label: "Extensions", bullet: "m-menu__link-bullet--dot", children: [
                    { label: "Buttons", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                    { label: "ColReorder", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "KeyTable", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                    { label: "Responsive", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "RowGroup", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                    { label: "RowReorder", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Scroller", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                    { label: "Select", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" }
                  ]
                }
              ]
            },
            { label: "Snippets", icon: "flaticon-more-v3", type: "section" },
            {
              label: "Pricing Tables", icon: "flaticon-interface-9", children: [
                { label: "Pricing Tables v1", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                { label: "Pricing Tables v2", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                { label: "Pricing Tables v3", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                { label: "Pricing Tables v4", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" }
              ]
            },
            {
              label: "Invoices", icon: "flaticon-piggy-bank", children: [
                { label: "Invoice v1", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                { label: "Invoice v2", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" }
              ]
            },
            {
              label: "FAQS", icon: "flaticon-exclamation", children: [
                { label: "FAQ v1", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" }
              ]
            },
            {
              label: "Custom Pages", icon: "flaticon-suitcase", children: [
                {
                  label: "User Pages", bullet: "m-menu__link-bullet--dot", children: [
                    { label: "Login - 1", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                    { label: "Login - 2", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Login - 3", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Login - 4", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Login - 5", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Login - 6", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" }
                  ]
                },
                {
                  label: "Error Pages", bullet: "m-menu__link-bullet--dot", children: [
                    { label: "Error 1", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/bootstrap.html" },
                    { label: "Error 2", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Error 3", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Error 4", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Error 5", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" },
                    { label: "Error 6", bullet: "m-menu__link-bullet--dot", to: "components/base/tabs/line.html" }
                  ]
                }
              ]
            }
          ];
        return (
            <div className="m-aside-menu m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark" style={{ position: 'relative' }}>
                <ul className="m-menu__nav m-menu__nav--dropdown-submenu-arrow ">
                    {menus.map((item, index) =>
                        <MenuItem item={item} key={index} isRelative={true} mode={item.mode} />
                    )}
                </ul>
            </div>
        );
    }
}