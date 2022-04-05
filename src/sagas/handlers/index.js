import {call , put} from 'redux-saga/effects';
import { requestGetStaffRegistrations } from '../requests';
import registerUser from '../../reducers/index'

export function* handlestaffRegistrations(action){
    try{
        const response = yield call(requestGetStaffRegistrations);
        console.log(response)
        // const {data} = response;
        yield put(registerUser(response.data))
    }catch(err){
        console.log(err)
    }
}
