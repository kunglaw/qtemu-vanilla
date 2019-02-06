const INITIAL_STATE = {
    members:[]
}

export default function( state = INITIAL_STATE, action) {
    switch(action.type) {
        case "MEMBERS_UPDATE":
            return {
                ...state,
                members:action.payload.members
            }
        case "GET_MEMBERS" :

            return {
                ...state,
                members:action.payload.members            
            } 

            break;
        default:
            return INITIAL_STATE
    }
}