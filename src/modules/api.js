import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// action types
const DOMMY = 'header/DOMMY';

// action creators
export const dommy = createAction(DOMMY);

// initialState
const initialState = Map({});

// reducer
export default handleActions(
  {
    [DOMMY]: state => state.set('dommy', true),
  },
  initialState,
);
