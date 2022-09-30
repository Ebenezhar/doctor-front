const INIT_STATE = {
    status: '',
    data: [],
}

export const userReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'READ_DOCTORS':
            return {
                ...state,
                data: action.payload,
            }
        default: return state;
    }
}