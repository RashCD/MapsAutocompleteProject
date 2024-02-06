/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import store from './redux/store';
import {Provider} from 'react-redux';
import Home from './pages/home';

function App(): React.JSX.Element {
	return (
		<Provider store={store}>
			<Home />
		</Provider>
	);
}

export default App;
