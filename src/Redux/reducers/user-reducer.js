const INIT_STATE = {
    status: '',
    data: [],
    count: '',
}

export const userReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'READ_DOCTORS':
            return {
                ...state,
                data: action.payload,
            }
        case 'BOOK_DOCTOR':
            return {
                ...state,
                status: action.payload,
            }
        case 'DOCTOR-AVAIL':
            return {
                ...state,
                count: action.payload,
            }
        default: return state;
    }
}