import {call , put} from 'redux-saga/effects';
import { requestGetStaffRegistrations } from '../requests';
import registerUser from '../../reducers/index'

export function* handlestaffRegistrations(action){
    try{
        const response = yield call(requestGetStaffRegistrations);
        const {data} = response;
        yield put(registerUser(data))
    }catch(err){
        console.log(err)
    }
}
