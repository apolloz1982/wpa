import { GET_EMPLOYEE_LIST } from './types';

export const getEmployeeList = data => {
    return {
        type: GET_EMPLOYEE_LIST,
        payload: data
    }
}
