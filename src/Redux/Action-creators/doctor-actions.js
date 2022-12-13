import instance from "../../API/api";


export const readPatients = (id) => {
    return async (dispatch) => {
        try {
            const result = await instance.get(`portal/read-patients/${id}`);
            console.log(result);
            // setTimeout(() => {
            //     window.location.href = window.location.href;
            // }, 1000);
            dispatch({ type: 'READ_PATIENTS', payload: result.data });
        } catch (error) {
            console.log(error);
        }
    }
}

export const readDoctor = (id) => {
    return async (dispatch) => {
        try {
            const result = await instance.get(`portal/read-doctor/${id}`);
            // setTimeout(() => {
            //     window.location.href = window.location.href;
            // }, 1000);
            dispatch({ type: 'READ_DOCTOR', payload: result.data });
        } catch (error) {
            console.log(error);
        }
    }
}