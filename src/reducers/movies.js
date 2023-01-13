const initialState = {
    sections: [],
};

export default function MoviesReducer(state = initialState, action) {

    switch (action.type) {
        case 'LIBRARY_ADD': {
            const index = state.sections.indexOf(state.sections?.find(m => m.id === action.item.id));
            if (index !== -1) return state; // already added
            return {
                ...state,
                sections: [
                    ...state.sections,
                    action.item
                ]
            };
        }
        case 'LIBRARY_REMOVE': {
            const index = state.sections.indexOf(state.sections?.find(m => m.id === action.item.id));
            if (index === -1) return state; // not found
            const fin = state.sections?.filter(e => e.id !== action.item.id)
            return {
                ...state,
                sections: [
                    ...fin
                ],
            };
        }
        default:
            return state;
    }
}
