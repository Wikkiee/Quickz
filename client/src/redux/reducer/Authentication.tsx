import { createSlice } from "@reduxjs/toolkit";

type stateProp = {
    value: Boolean
}
const { reducer, actions } = createSlice({
    name: 'authentications',
    initialState: {
        value: false
    } as stateProp,
    reducers: {
        authenticationUpdate(state, action: { payload: Boolean }) {
            console.log(action.payload);
            state.value = action.payload
        }
    }
}
)

export const { authenticationUpdate } = actions
export default reducer