import  {takeLatest} from 'redux-saga/effects'
import { handlestaffRegistrations } from './handlers'
import { REGISTER_SUCCESS } from '../actions/action-types'

export function* watcherSaga(){
    yield takeLatest(REGISTER_SUCCESS , handlestaffRegistrations)
}