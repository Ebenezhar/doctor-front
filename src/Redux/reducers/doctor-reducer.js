
const INIT_STATE = {
    status: '',
    data: [],
}

export const doctorReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'READ_PATIENTS':
            return {
                ...state,
                data: action.payload,
            }
        default: return state;
    }
}