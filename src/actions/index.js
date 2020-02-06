import {
    LOAD_MENU,
    SUBMIT_FORM_STARTED,
    SUBMIT_FORM_SUCCESS,
    SUBMIT_FORM_FAILURE,
    GET_ACCOUNTS_STARTED,
    GET_ACCOUNTS_SUCCESS,
    GET_ACCOUNTS_FAILURE,
    REQUEST_STARTED,
    REQUEST_SUCCESS,
    REQUEST_FAILURE
} from './types';

export function submitForm(action) {
    return async (dispatch) => {
        dispatch({type: SUBMIT_FORM_STARTED});
        const request = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(action)
        };
        //console.log(request);
        try {
            const response = await fetch('/api/portal', request);
            const data = await response.json();
            //console.log("data", data);
            dispatch({ type: SUBMIT_FORM_SUCCESS, payload: data });
        } catch(e) {
            //console.log("error " + e.toString());
            dispatch({ type: SUBMIT_FORM_FAILURE, error: e.toString()})
        }
    }
}
