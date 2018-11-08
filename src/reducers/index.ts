import { combineReducers, Action } from 'redux';
import { RootState } from '../models/RootState';
import * as Actions from '../constants/actions';

function handleActions<StateAndPayload>(reducerMap: any, initialState: StateAndPayload) {
  return (state = initialState, action: Action): StateAndPayload => {
    const reducer = reducerMap[action.type];
    return reducer ? reducer(state, action) : state;
  }
}

const switchActions = (action: string, initialState: boolean) => handleActions<boolean>({
  [action]: (state, action) => {
    return action.payload == undefined ? !state : action.payload;
  }
}, initialState);

const F = false;

export default combineReducers<RootState>({
  asideLeftMinimize: switchActions(Actions.ASIDE_LEFT_TOGGLE, F),
  asideLeftOn: switchActions(Actions.ASIDE_LEFT_MOBILE_TOGGLE, F),
  asideHeaderMenuOn: switchActions(Actions.ASIDE_HEADER_MENU_TOGGLE, F),
  topbarOn: switchActions(Actions.TOPBAR_TOGGLE, F),
  quickSearchOn: switchActions(Actions.QUICK_SEARCH_TOGGLE, F),
  notificationsOn: switchActions(Actions.NOTIFICATIONS_TOGGLE, F),
  quickActionsOn: switchActions(Actions.QUICK_ACTIONS_TOGGLE, F),
  userProfileOn: switchActions(Actions.USER_PROFILE_TOGGLE, F),
  quickSidebarOn: switchActions(Actions.QUICK_SIDEBAR_TOGGLE, F),
  message: handleActions({
    [Actions.TOASTR_MESSAGE]: (state, action) => {
      return [].concat(...state, action.payload);
    }
  }, [])
});
