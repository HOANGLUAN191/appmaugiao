import { combineReducers } from 'redux';
import kindergartensReducers from './kindergartensReducers';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    kindergartens: kindergartensReducers,
    selectedKindergartenId: SelectionReducer
  
});
