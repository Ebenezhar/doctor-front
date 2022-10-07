
const INIT_STATE = {
    status: '',
    data: [],
    date: []
}

export const doctorReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'READ_PATIENTS':
            return {
                ...state,
                data: action.payload,
            }

        case 'READ_DOCTOR':
            return {
                ...state,
                date: action.payload,
            }
        default: return state;
    }
}

