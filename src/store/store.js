import { createStore, combineReducers} from 'redux';
import MoviesReducer from '../reducers/movies';

const rootReducer = combineReducers({
    sections: MoviesReducer,
});

export const store = createStore(rootReducer);