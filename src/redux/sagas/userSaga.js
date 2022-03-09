import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';

  function getApi() {
    const res =  axios.get("https://jsonplaceholder.typicode.com/users").then(resp => {
        return resp.data;
    });
    return res
}

 function* getUsers(action){
    try {
        const users =  yield call(getApi)
        yield put({type:'GET_USERS_SUCCESS', users: users })
    } catch (e) {
        yield  put({type:'GET_USERS_FAILED', message: e.message})
    }
}

function* userSaga(){
    yield takeEvery('GET_USER_REQUESTED', getUsers)
}
export default userSaga;