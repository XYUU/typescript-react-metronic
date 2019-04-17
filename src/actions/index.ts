import * as Actions from '../constants/actions';
import { ActionCreator, Action } from 'redux';

function createAction<Payload>(actionType: string): ActionCreator<Action> {
    return (payload?: Payload) => ({ type: actionType, payload: payload });
}

export const asideLeftToggle = createAction(Actions.ASIDE_LEFT_TOGGLE);
export const asideLeftMobileToggle = createAction(Actions.ASIDE_LEFT_MOBILE_TOGGLE);
export const asideHeaderMenuToggle = createAction(Actions.ASIDE_HEADER_MENU_TOGGLE);
export const topbarToggle = createAction(Actions.TOPBAR_TOGGLE);
export const quickSearchToggle = createAction<boolean>(Actions.QUICK_SEARCH_TOGGLE);
export const notificationsToggle = createAction<boolean>(Actions.NOTIFICATIONS_TOGGLE);
export const quickActionsToggle = createAction<boolean>(Actions.QUICK_ACTIONS_TOGGLE);
export const userProfileToggle = createAction<boolean>(Actions.USER_PROFILE_TOGGLE);
export const quickSidebarToggle = createAction(Actions.QUICK_SIDEBAR_TOGGLE);
export const signIn = createAction(Actions.SIGN_IN);
export const signUp = createAction(Actions.SIGN_UP);
export const forgetPassword = createAction(Actions.FORGET_PASSWORD);
export const toastrMessage = createAction(Actions.TOASTR_MESSAGE);
export const loginToggle = createAction(Actions.LOGIN_TOGGLE);