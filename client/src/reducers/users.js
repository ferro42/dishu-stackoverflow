const usersreducer =(states= [], action)=>{
    switch(action.type) {
        case 'FETCH_USERS':
            return action.payload;
        case 'UPDATE_CURRENT_USER':
            localStorage.setItem('Profile1', JSON.stringify({...action.payload}));
            return states.map((state)=>state._id === action.payload._id ? action.payload :state)
        default:
            return states;
    }
}
export default usersreducer;