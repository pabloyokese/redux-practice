export default function(state={},action){
    switch(action.type){
        case 'GET_ARTISTS_ALL':
           return {...state,artistsList:action.payload} 
        default:
            return state;
    }
}