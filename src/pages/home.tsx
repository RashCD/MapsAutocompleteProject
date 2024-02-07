/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux/hooks';
import {SearchBar} from '@ant-design/react-native';
import {
	clearSearchInput,
	setSearchInput,
} from '../redux/slices/searchInputSlice';

function Home(): React.JSX.Element {
	const searchInputState = useAppSelector(state => state.search.value);

	const dispatch = useAppDispatch();

	const onInputChange = (value: string) => {
		dispatch(setSearchInput(value));
	};

	const onInputSubmit = () => {
		console.log('submit');
		dispatch(clearSearchInput());
	};

	return (
		<SafeAreaView>
			<SearchBar
				value={searchInputState}
				placeholder="Search Places"
				cancelText="Submit"
				onSubmit={onInputSubmit}
				onCancel={onInputSubmit}
				onChange={onInputChange}
				showCancelButton
			/>
		</SafeAreaView>
	);
}

export default Home;
