import * as React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { Page } from './Page';
import QuickSidebar from './QuickSidebar';
import { ScrollTop } from '../../components/ScrollTop';
import { NavSticky } from './NavSticky';
import { RootState } from '../../models/RootState';
import { RouteComponentProps } from '@reach/router';

export interface AppProps extends RouteComponentProps {
    asideLeftMinimize: boolean
    asideLeftOn: boolean
    asideHeaderMenuOn: boolean
    topbarOn: boolean
}

export class App extends React.Component<AppProps> {
    constructor(props?: AppProps, context?: any) {
        super(props, context);
    }

    render() {
        const { asideLeftMinimize, asideLeftOn, asideHeaderMenuOn, topbarOn } = this.props;
        return (
            <div className={classNames("m-page--fluid", "m--skin-", "m-content--skin-light2", "m-header--fixed", "m-header--fixed-mobile", "m-aside-left--enabled", "m-aside-left--fixed", "m-aside-left--offcanvas", "m-footer--push", "m-aside--offcanvas-default",
                { "m-brand--minimize": asideLeftMinimize, "m-aside-left--minimize": asideLeftMinimize, "m-aside-left--on": asideLeftOn, "m-aside-header-menu-mobile--on": asideHeaderMenuOn, "m-topbar--on": topbarOn })}>
                <Page />
                <QuickSidebar />
                <ScrollTop />
                <NavSticky />
            </div>
        )
    }
}

function mapStateToProps(state: RootState) {
    return {
        asideLeftMinimize: state.asideLeftMinimize,
        asideLeftOn: state.asideLeftOn,
        asideHeaderMenuOn: state.asideHeaderMenuOn,
        topbarOn: state.topbarOn
    };
}

export default connect(mapStateToProps)(App);