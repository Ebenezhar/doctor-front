import instance from "../../API/api";


export const readPatients = (id) => {
    return async (dispatch) => {
        try {
            console.log(id);
            const result = await instance.get(`portal/read-patients/${id}`);
            // setTimeout(() => {
            //     window.location.href = window.location.href;
            // }, 1000);
            dispatch({ type: 'READ_PATIENTS', payload: result.data });
        } catch (error) {
            console.log(error);
        }
    }
}