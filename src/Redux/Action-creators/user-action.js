import instance from "../../API/api";

export const readDoctors = () => {
    return async (dispatch) => {
        try {
            const result = await instance.get('/portal/read-doctors');
            dispatch({ type: 'READ_DOCTORS', payload: result.data });
        } catch (error) {
            console.log(error);
        }
    }
}
export const bookDoctor = (values) => {
    return async (dispatch) => {
        try {
            const result = await instance.post('/portal/book-doctor', values);
            alert(result.data.message);
            setTimeout(() => {
                window.Location.href = "/portal/user";
            }, 1 * 1000);
            dispatch({ type: 'BOOK_DOCTOR', payload: result.data.message })
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
        }
    }
}

export const checkDocAvailability = (doc_id, date) => {
    return async (dispatch) => {
        try {
            const response = await instance.post(`/portal/checkAvailability/${doc_id}`, { date });
            console.log(response.data.result);
            dispatch({ type: 'DOCTOR-AVAIL', payload: response.data.result });
        } catch (error) {
            console.log(error);
        }
    }
}