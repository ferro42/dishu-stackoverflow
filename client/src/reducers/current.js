const  current = (state = null, action)=>{
    switch (action.type){
        case 'FETCH_CURRENT':
            return { ...state, ...action.payload };
        default:
            return state;
    }
}
export default  current;