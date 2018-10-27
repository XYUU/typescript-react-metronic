import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';

export const asideLeftToggle = createAction(Actions.ASIDE_LEFT_TOGGLE);
export const asideLeftMobileToggle = createAction(Actions.ASIDE_LEFT_MOBILE_TOGGLE);
export const asideHeaderMenuToggle = createAction(Actions.ASIDE_HEADER_MENU_TOGGLE);
export const topbarToggle = createAction(Actions.TOPBAR_TOGGLE);
export const quickSearchToggle = createAction<boolean>(Actions.QUICK_SEARCH_TOGGLE);
export const notificationsToggle = createAction<boolean>(Actions.NOTIFICATIONS_TOGGLE);
export const quickActionsToggle = createAction<boolean>(Actions.QUICK_ACTIONS_TOGGLE);
export const userProfileToggle = createAction<boolean>(Actions.USER_PROFILE_TOGGLE);
export const quickSidebarToggle = createAction(Actions.QUICK_SIDEBAR_TOGGLE);
