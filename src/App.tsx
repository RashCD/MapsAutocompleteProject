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
import {Provider as AntProvider} from '@ant-design/react-native';
import customTheme from './customTheme';

function App(): React.JSX.Element {
	return (
		<Provider store={store}>
			<AntProvider theme={customTheme}>
				<Home />
			</AntProvider>
		</Provider>
	);
}

export default App;
