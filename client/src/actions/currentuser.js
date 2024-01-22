export const setcurrentuser = (data) => {
    return{
        type: 'FETCH_CURRENT_USER',
        payload: data
    }
}
export const currentuser = (data) => {
    return{
        type: 'FETCH_CURRENT',
        payload: data
    }
}
