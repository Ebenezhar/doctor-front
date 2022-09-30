import instance from "../../API/api";

export const readPatients = () => {
    return async (dispatch) => {
        try {
            const result = await instance.get('/read/patients');
            dispatch({ type: 'READ_PATIENTS', payload: result.data });
        } catch (error) {
            console.log(error);
        }
    }
}