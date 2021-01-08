import { combineReducers } from 'redux'
import employeeListReducer from './employeeListReducer';
 
const rootReducer = combineReducers({
     employee: employeeListReducer,
})
export default rootReducer;
