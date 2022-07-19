import { put,call,takeLatest,all} from 'redux-saga/effects'

import { USER_ACTION_TYPES } from './user-action.types'

import { signInSuccess,signInFailed, signUpFailed, signUpSuccess, signoutSuccess, signoutFailed } from './user-actions'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, getCurrentUser, signInAuthUserWithEmailAndPassword, signInWithGooglePopup, signOutUser} from '../../utilities/firebase'


function* getDetailsFromUserAuth(userAuth,additionalDetails) {
    try{
        const userDetails = yield call(createUserDocumentFromAuth,userAuth,additionalDetails)
        yield put(signInSuccess({id: userDetails.id,...userDetails.data()}))
    }
    catch(error){
        yield put(signInFailed(error))
    }
}



function* isUserAuthenticated() {
    try{
        const userAuth = yield call(getCurrentUser)
        if(!userAuth) return
        yield call(getDetailsFromUserAuth,userAuth)
    }
    catch(error){
        yield put(signInFailed(error))
    }
}

function* signInWithGoogle() {
    const { user } = yield call(signInWithGooglePopup)
    try{
        yield call(getDetailsFromUserAuth,user)
    }
    catch(error){
        yield put(signInFailed(error))
    }
}

function* signInWithEmail({payload:{email,password}}) {
    try{
        const { user } = yield call(signInAuthUserWithEmailAndPassword,email,password)
        yield call(getDetailsFromUserAuth,user)
    }
    catch(error){
        yield put(signInFailed(error))
        if(error.code === 'auth/invalid-email') alert("Invalid Email")
        else if(error.code === 'auth/wrong-password') alert("Wrong Password")
        else console.log(error)
    }
}

function* signUp({payload:{email,password,displayName}}) {
    try{
        const { user } = yield call(createAuthUserWithEmailAndPassword,email,password)
        yield put(signUpSuccess(user,{displayName}))
    }
    catch(error) {
        yield put(signUpFailed(error))
    }
}

function* signInAfterSignUp({payload:{user,additionalDetails}}) {
    yield call(getDetailsFromUserAuth,user,additionalDetails)
}

function* signOut() {
    try{
        yield call(signOutUser)
        yield put(signoutSuccess())
    }
    catch(error){
        yield put(signoutFailed(error))
    }
}



function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION,isUserAuthenticated)
}

function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,signInWithGoogle)
}

function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START,signInWithEmail)
}

function* onSignUpStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START,signUp)
}

function* onSignUpSuccess() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS,signInAfterSignUp)
}

function* onSignOutStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START,signOut)
}

export function* userSaga() {
    yield all([call(onCheckUserSession),call(onGoogleSignInStart),call(onEmailSignInStart),call(onSignUpStart),call(onSignUpSuccess),call(onSignOutStart)])
}