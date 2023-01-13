import {Provider} from 'react-redux';
import {store} from './src/store/store';
import React from "react";
import NavigationTabs from "./src/native/Navigation/NavigationTabs";
//Dans notre composant principal,nous utilisons le composant Provider de react-redux pour rendre
//le magasin disponible pour tous les composants enfants
const App = () => {
    return (
        <Provider store={store}>
            <NavigationTabs/>
        </Provider>
    );
};

export default App;
