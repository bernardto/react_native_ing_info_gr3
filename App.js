import {Provider} from 'react-redux';
import {store} from './src/store/store';
import React from "react";
import NavigationDrawer from "./src/native/Navigation/NavigationDrawer";

const App = () => {
    return (
        <Provider store={store}>
            <NavigationDrawer/>
        </Provider>
    );
};

export default App;
