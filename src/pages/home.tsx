/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
	Button,
	SafeAreaView,
	ScrollView,
	StatusBar,
	Text,
	useColorScheme,
	View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {increment} from '../redux/slices/counterSlice';

function Home(): React.JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	const counterState = useAppSelector(state => state.counter.value);

	const dispatch = useAppDispatch();

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar
				barStyle={isDarkMode ? 'light-content' : 'dark-content'}
				backgroundColor={backgroundStyle.backgroundColor}
			/>
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={backgroundStyle}>
				<View
					style={{
						backgroundColor: isDarkMode
							? Colors.black
							: Colors.white,
					}}>
					<Text>The counter state is {counterState}</Text>
					<Button
						title="test button"
						onPress={() => dispatch(increment())}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default Home;
