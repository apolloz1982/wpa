import { GET_EMPLOYEE_LIST } from '../actions/types';
import employeeData from '../../employeeData';

const getEmployeelist = employeeData.user;

const initialState = {
    employeeList: getEmployeelist
};

const employeeListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EMPLOYEE_LIST:
            return { ...state, employeeList: action.payload };
        default:
            return state;
    }
}

export default employeeListReducer;


