const initialState = {
    movies: [],
};
//Dans ce fichier,nous créons des réducteurs qui modifient l'état global de l'application en fonction des actions définies.
export default function MoviesReducer(state = initialState, action) {
    switch (action.type) {
        //AJOUTER LE FILM
        case 'FILM_ADD': {
            const index = state.movies.indexOf(state.movies?.find(m => m.id === action.item.id));
            if (index !== -1) return state; // already added
            return {
                ...state,
                movies: [
                    ...state.movies,
                    action.item
                ]
            };
        }//SUPPRIMER LE FILM DES FAVORI
        case 'FILM_REMOVE': {
            const index = state.movies.indexOf(state.movies?.find(m => m.id === action.item.id));
            if (index === -1) return state;
            const fin = state.movies?.filter(e => e.id !== action.item.id)
            return {
                ...state,
                movies: [
                    ...fin
                ],
            };
        }
        default:
            return state;
    }
}
