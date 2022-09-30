import instance from "../../API/api";

export const readDoctors = () => {
    return async (dispatch) => {
        try {
            const result = await instance.get('/read/doctors');
            dispatch({ type: 'READ_DOCTORS', payload: result.data });
        } catch (error) {
            console.log(error);
        }
    }
}