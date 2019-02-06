const INITIAL_STATE = {
    pageTitle:"QTemu",
    footer:"Copyright &copy; yudhistira.id"
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "PAGE_TITLE_CHANGE":
            return {
                ...state,
                pageTitle:action.payload.title
            }
        
        case "PAGE_FOOTER_CHANGE" : 
            return {
                ...state,
                footer:action.payload.footer
            }

        default:
            return INITIAL_STATE
        
    }
}