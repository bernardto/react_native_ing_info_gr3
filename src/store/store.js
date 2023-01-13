import { createStore, combineReducers} from 'redux';
import MoviesReducer from '../reducers/movies';

//Dans le fichier store.js, nous configurons le magasin Redux en utilisant la fonction createStore et en combinant tous les réducteurs.
const rootReducer = combineReducers({
    movies: MoviesReducer,
});

export const store = createStore(rootReducer);