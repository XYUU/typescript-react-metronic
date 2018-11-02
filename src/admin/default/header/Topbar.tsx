import React from 'react';
import classNames from 'classnames';
import * as  Actions from '../../../actions';
import { Tabs, TabPane } from '../../../framework/components/general/tabs/Tabs';
import addEventListener from '../../../utils/addEventListener';
import removeEventListener from '../../../utils/removeEventListener';
import { RootState } from '../../../models/RootState';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export interface TopbarProps {
    quickSearchOn: boolean
    notificationsOn: boolean
    quickActionsOn: boolean
    userProfileOn: boolean
    quickSearchToggle: typeof Actions.quickSearchToggle
    notificationsToggle: typeof Actions.notificationsToggle
    quickActionsToggle: typeof Actions.quickActionsToggle
    userProfileToggle: typeof Actions.userProfileToggle
    quickSidebarToggle: typeof Actions.quickSidebarToggle
}

export interface TopbarStates {

}

export class Topbar extends React.Component<TopbarProps, TopbarStates> {
    quickSearch: React.RefObject<HTMLLIElement>;
    notifications: React.RefObject<HTMLLIElement>;
    quickActions: React.RefObject<HTMLLIElement>;
    userProfile: React.RefObject<HTMLLIElement>;
    constructor(props?: TopbarProps, context?: any) {
        super(props, context);
        this.quickSearchToggle = this.quickSearchToggle.bind(this);
        this.notificationsToggle = this.notificationsToggle.bind(this);
        this.quickActionsToggle = this.quickActionsToggle.bind(this);
        this.userProfileToggle = this.userProfileToggle.bind(this);
        this.quickSidebarToggle = this.quickSidebarToggle.bind(this);

        this.quickSearch = React.createRef<HTMLLIElement>();
        this.notifications = React.createRef<HTMLLIElement>();
        this.quickActions = React.createRef<HTMLLIElement>();
        this.userProfile = React.createRef<HTMLLIElement>();
    }

    off = (e: MouseEvent) => {
        const { quickSearchOn, notificationsOn, quickActionsOn, userProfileOn,
            quickSearchToggle, notificationsToggle, quickActionsToggle, userProfileToggle } = this.props,
            { quickSearch, notifications, quickActions, userProfile } = this,
            listener = [
                { ref: quickSearch, toggle: quickSearchToggle, condition: quickSearchOn },
                { ref: notifications, toggle: notificationsToggle, condition: notificationsOn },
                { ref: quickActions, toggle: quickActionsToggle, condition: quickActionsOn },
                { ref: userProfile, toggle: userProfileToggle, condition: userProfileOn }
            ];
        for (let i = 0; i < listener.length; i++) {
            const { ref, toggle, condition } = listener[i], o = ref.current;
            if (condition && e.target !== o && !1 === o.contains(e.target as Node)) {
                toggle(false);
            }
        }
    };

    componentDidMount() {
        addEventListener(document, "click", this.off);
    }

    componentWillUnmount() {
        removeEventListener(document, "click", this.off);
    }

    quickSearchToggle() {
        this.props.quickSearchToggle(!this.props.quickSearchOn);
    }

    notificationsToggle() {
        this.props.notificationsToggle(!this.props.notificationsOn);
    }

    quickActionsToggle() {
        this.props.quickActionsToggle(!this.props.quickActionsOn);
    }

    userProfileToggle() {
        this.props.userProfileToggle(!this.props.userProfileOn);
    }

    quickSidebarToggle() {
        this.props.quickSidebarToggle();
    }

    render() {
        const { quickSearchOn, notificationsOn, quickActionsOn, userProfileOn } = this.props,
            { quickSearch, notifications, quickActions, userProfile,
                quickSearchToggle, notificationsToggle, quickActionsToggle, userProfileToggle, quickSidebarToggle } = this;
        return (
            <div className="m-topbar m-stack m-stack--ver m-stack--general m-stack--fluid">
                <div className="m-stack__item m-topbar__nav-wrapper">
                    <ul className="m-topbar__nav m-nav m-nav--inline">
                        <li ref={quickSearch} className={classNames("m-nav__item m-dropdown m-dropdown--large m-dropdown--arrow m-dropdown--align-center m-dropdown--mobile-full-width m-dropdown--skin-light	m-list-search m-list-search--skin-light", { "m-dropdown--open": quickSearchOn })}>
                            <a href="#" className="m-nav__link" onClick={quickSearchToggle}>
                                <span className="m-nav__link-icon">
                                    <i className="flaticon-search-1" />
                                </span>
                            </a>
                            <div className="m-dropdown__wrapper">
                                <span className="m-dropdown__arrow m-dropdown__arrow--center" />
                                <div className="m-dropdown__inner ">
                                    <div className="m-dropdown__header">
                                        <form className="m-list-search__form">
                                            <div className="m-list-search__form-wrapper">
                                                <span className="m-list-search__form-input-wrapper">
                                                    <input autoComplete="off" type="text" name="q" className="m-list-search__form-input" defaultValue="" placeholder="Search..." />
                                                </span>
                                                <span className="m-list-search__form-icon-close" onClick={quickSearchToggle}>
                                                    <i className="la la-remove" />
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="m-dropdown__body">
                                        <div className="m-dropdown__scrollable m-scrollable">
                                            <div className="m-dropdown__content">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li ref={notifications} className={classNames("m-nav__item m-topbar__notifications m-topbar__notifications--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-center m-dropdown--mobile-full-width", { "m-dropdown--open": notificationsOn })}>
                            <a href="#" className="m-nav__link" onClick={notificationsToggle}>
                                <span className="m-nav__link-badge m-badge m-badge--dot m-badge--dot-small m-badge--danger" />
                                <span className="m-nav__link-icon">
                                    <i className="flaticon-music-2" />
                                </span>
                            </a>
                            <div className="m-dropdown__wrapper">
                                <span className="m-dropdown__arrow m-dropdown__arrow--center" />
                                <div className="m-dropdown__inner">
                                    <div className="m-dropdown__header m--align-center" style={{ background: 'url(assets/app/media/img/misc/notification_bg.jpg)', backgroundSize: 'cover' }}>
                                        <span className="m-dropdown__header-title">9 New</span>
                                        <span className="m-dropdown__header-subtitle">User Notifications</span>
                                    </div>
                                    <div className="m-dropdown__body">
                                        <div className="m-dropdown__content">
                                            <Tabs>
                                                <TabPane tab="Alerts">
                                                    <div className="m-scrollable">
                                                        <div className="m-list-timeline m-list-timeline--skin-light">
                                                            <div className="m-list-timeline__items">
                                                                <div className="m-list-timeline__item">
                                                                    <span className="m-list-timeline__badge -m-list-timeline__badge--state-success" />
                                                                    <span className="m-list-timeline__text">12 new users registered</span>
                                                                    <span className="m-list-timeline__time">Just now</span>
                                                                </div>
                                                                <div className="m-list-timeline__item">
                                                                    <span className="m-list-timeline__badge" />
                                                                    <span className="m-list-timeline__text">System shutdown
                <span className="m-badge m-badge--success m-badge--wide">pending</span>
                                                                    </span>
                                                                    <span className="m-list-timeline__time">14 mins</span>
                                                                </div>
                                                                <div className="m-list-timeline__item">
                                                                    <span className="m-list-timeline__badge" />
                                                                    <span className="m-list-timeline__text">New invoice received</span>
                                                                    <span className="m-list-timeline__time">20 mins</span>
                                                                </div>
                                                                <div className="m-list-timeline__item">
                                                                    <span className="m-list-timeline__badge" />
                                                                    <span className="m-list-timeline__text">DB overloaded 80%
                <span className="m-badge m-badge--info m-badge--wide">settled</span>
                                                                    </span>
                                                                    <span className="m-list-timeline__time">1 hr</span>
                                                                </div>
                                                                <div className="m-list-timeline__item">
                                                                    <span className="m-list-timeline__badge" />
                                                                    <span className="m-list-timeline__text">System error -
                <a href="#" className="m-link">Check</a>
                                                                    </span>
                                                                    <span className="m-list-timeline__time">2 hrs</span>
                                                                </div>
                                                                <div className="m-list-timeline__item m-list-timeline__item--read">
                                                                    <span className="m-list-timeline__badge" />
                                                                    <span className="m-list-timeline__text">New order received
                <span className="m-badge m-badge--danger m-badge--wide">urgent</span>
                                                                    </span>
                                                                    <span className="m-list-timeline__time">7 hrs</span>
                                                                </div>
                                                                <div className="m-list-timeline__item m-list-timeline__item--read">
                                                                    <span className="m-list-timeline__badge" />
                                                                    <span className="m-list-timeline__text">Production server down</span>
                                                                    <span className="m-list-timeline__time">3 hrs</span>
                                                                </div>
                                                                <div className="m-list-timeline__item">
                                                                    <span className="m-list-timeline__badge" />
                                                                    <span className="m-list-timeline__text">Production server up</span>
                                                                    <span className="m-list-timeline__time">5 hrs</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPane>
                                                <TabPane tab="Events">
                                                    <div className="m-scrollable">
                                                        <div className="m-list-timeline m-list-timeline--skin-light">
                                                            <div className="m-list-timeline__items">
                                                                <div className="m-list-timeline__item">
                                                                    <span className="m-list-timeline__badge m-list-timeline__badge--state1-success" />
                                                                    <a href="" className="m-list-timeline__text">New order received</a>
                                                                    <span className="m-list-timeline__time">Just now</span>
                                                                </div>
                                                                <div className="m-list-timeline__item">
                                                                    <span className="m-list-timeline__badge m-list-timeline__badge--state1-danger" />
                                                                    <a href="" className="m-list-timeline__text">New invoice received</a>
                                                                    <span className="m-list-timeline__time">20 mins</span>
                                                                </div>
                                                                <div className="m-list-timeline__item">
                                                                    <span className="m-list-timeline__badge m-list-timeline__badge--state1-success" />
                                                                    <a href="" className="m-list-timeline__text">Production server up</a>
                                                                    <span className="m-list-timeline__time">5 hrs</span>
                                                                </div>
                                                                <div className="m-list-timeline__item">
                                                                    <span className="m-list-timeline__badge m-list-timeline__badge--state1-info" />
                                                                    <a href="" className="m-list-timeline__text">New order received</a>
                                                                    <span className="m-list-timeline__time">7 hrs</span>
                                                                </div>
                                                                <div className="m-list-timeline__item">
                                                                    <span className="m-list-timeline__badge m-list-timeline__badge--state1-info" />
                                                                    <a href="" className="m-list-timeline__text">System shutdown</a>
                                                                    <span className="m-list-timeline__time">11 mins</span>
                                                                </div>
                                                                <div className="m-list-timeline__item">
                                                                    <span className="m-list-timeline__badge m-list-timeline__badge--state1-info" />
                                                                    <a href="" className="m-list-timeline__text">Production server down</a>
                                                                    <span className="m-list-timeline__time">3 hrs</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPane>
                                                <TabPane tab="Logs">
                                                    <div className="m-stack m-stack--ver m-stack--general" style={{ minHeight: 180 }}>
                                                        <div className="m-stack__item m-stack__item--center m-stack__item--middle">
                                                            <span>All caught up!<br />No new logs.</span>
                                                        </div>
                                                    </div>
                                                </TabPane>
                                            </Tabs>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li ref={quickActions} className={classNames("m-nav__item m-topbar__quick-actions m-topbar__quick-actions--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push m-dropdown--mobile-full-width m-dropdown--skin-light", { "m-dropdown--open": quickActionsOn })}>
                            <a href="#" className="m-nav__link" onClick={quickActionsToggle}>
                                <span className="m-nav__link-badge m-badge m-badge--dot m-badge--info m--hide" />
                                <span className="m-nav__link-icon">
                                    <i className="flaticon-share" />
                                </span>
                            </a>
                            <div className="m-dropdown__wrapper">
                                <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust" />
                                <div className="m-dropdown__inner">
                                    <div className="m-dropdown__header m--align-center" style={{ background: 'url(assets/app/media/img/misc/quick_actions_bg.jpg)', backgroundSize: 'cover' }}>
                                        <span className="m-dropdown__header-title">Quick Actions</span>
                                        <span className="m-dropdown__header-subtitle">Shortcuts</span>
                                    </div>
                                    <div className="m-dropdown__body m-dropdown__body--paddingless">
                                        <div className="m-dropdown__content">
                                            <div className="data">
                                                <div className="m-nav-grid m-nav-grid--skin-light">
                                                    <div className="m-nav-grid__row">
                                                        <a href="#" className="m-nav-grid__item">
                                                            <i className="m-nav-grid__icon flaticon-file" />
                                                            <span className="m-nav-grid__text">Generate Report</span>
                                                        </a>
                                                        <a href="#" className="m-nav-grid__item">
                                                            <i className="m-nav-grid__icon flaticon-time" />
                                                            <span className="m-nav-grid__text">Add New Event</span>
                                                        </a>
                                                    </div>
                                                    <div className="m-nav-grid__row">
                                                        <a href="#" className="m-nav-grid__item">
                                                            <i className="m-nav-grid__icon flaticon-folder" />
                                                            <span className="m-nav-grid__text">Create New Task</span>
                                                        </a>
                                                        <a href="#" className="m-nav-grid__item">
                                                            <i className="m-nav-grid__icon flaticon-clipboard" />
                                                            <span className="m-nav-grid__text">Completed Tasks</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li ref={userProfile} className={classNames("m-nav__item m-topbar__user-profile m-topbar__user-profile--img m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light", { "m-dropdown--open": userProfileOn })}>
                            <a href="#" className="m-nav__link" onClick={userProfileToggle}>
                                <span className="m-topbar__userpic">
                                    <img src="assets/app/media/img/users/user4.jpg" className="m--img-rounded m--marginless" alt="" />
                                </span>
                                <span className="m-topbar__username m--hide">Nick</span>
                            </a>
                            <div className="m-dropdown__wrapper">
                                <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust" />
                                <div className="m-dropdown__inner">
                                    <div className="m-dropdown__header m--align-center" style={{ background: 'url(assets/app/media/img/misc/user_profile_bg.jpg)', backgroundSize: 'cover' }}>
                                        <div className="m-card-user m-card-user--skin-dark">
                                            <div className="m-card-user__pic">
                                                <img src="assets/app/media/img/users/user4.jpg" className="m--img-rounded m--marginless" alt="" />
                                                {/*
                                     <span class="m-type m-type--lg m--bg-danger"><span class="m--font-light">S<span><span>
                                    */}
                                            </div>
                                            <div className="m-card-user__details">
                                                <span className="m-card-user__name m--font-weight-500">Mark Andre</span>
                                                <a href="#" className="m-card-user__email m--font-weight-300 m-link">mark.andre@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-dropdown__body">
                                        <div className="m-dropdown__content">
                                            <ul className="m-nav m-nav--skin-light">
                                                <li className="m-nav__section m--hide">
                                                    <span className="m-nav__section-text">Section</span>
                                                </li>
                                                <li className="m-nav__item">
                                                    <a href="header/profile.html" className="m-nav__link">
                                                        <i className="m-nav__link-icon flaticon-profile-1" />
                                                        <span className="m-nav__link-title">
                                                            <span className="m-nav__link-wrap">
                                                                <span className="m-nav__link-text">My Profile</span>
                                                                <span className="m-nav__link-badge">
                                                                    <span className="m-badge m-badge--success">2</span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="m-nav__item">
                                                    <a href="header/profile.html" className="m-nav__link">
                                                        <i className="m-nav__link-icon flaticon-share" />
                                                        <span className="m-nav__link-text">Activity</span>
                                                    </a>
                                                </li>
                                                <li className="m-nav__item">
                                                    <a href="header/profile.html" className="m-nav__link">
                                                        <i className="m-nav__link-icon flaticon-chat-1" />
                                                        <span className="m-nav__link-text">Messages</span>
                                                    </a>
                                                </li>
                                                <li className="m-nav__separator m-nav__separator--fit">
                                                </li>
                                                <li className="m-nav__item">
                                                    <a href="header/profile.html" className="m-nav__link">
                                                        <i className="m-nav__link-icon flaticon-info" />
                                                        <span className="m-nav__link-text">FAQ</span>
                                                    </a>
                                                </li>
                                                <li className="m-nav__item">
                                                    <a href="header/profile.html" className="m-nav__link">
                                                        <i className="m-nav__link-icon flaticon-lifebuoy" />
                                                        <span className="m-nav__link-text">Support</span>
                                                    </a>
                                                </li>
                                                <li className="m-nav__separator m-nav__separator--fit">
                                                </li>
                                                <li className="m-nav__item">
                                                    <a href="snippets/pages/user/login-1.html" className="btn m-btn--pill btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder">Logout</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="m-nav__item">
                            <a href="#" className="m-nav__link" onClick={quickSidebarToggle}>
                                <span className="m-nav__link-icon">
                                    <i className="flaticon-grid-menu" />
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: RootState) {
    return {
        quickSearchOn: state.quickSearchOn,
        notificationsOn: state.notificationsOn,
        quickActionsOn: state.quickActionsOn,
        userProfileOn: state.userProfileOn
    };
}

function mapDispatchToProps(dispatch) {
    return {
        quickSearchToggle: bindActionCreators(Actions.quickSearchToggle, dispatch),
        notificationsToggle: bindActionCreators(Actions.notificationsToggle, dispatch),
        quickActionsToggle: bindActionCreators(Actions.quickActionsToggle, dispatch),
        userProfileToggle: bindActionCreators(Actions.userProfileToggle, dispatch),
        quickSidebarToggle: bindActionCreators(Actions.quickSidebarToggle, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Topbar)