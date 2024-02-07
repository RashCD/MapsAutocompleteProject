import {Icon} from '@ant-design/react-native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SearchInput = () => {
	return (
		<View style={styles.rootContainer}>
			<View style={styles.searchContainer}>
				<Icon name="search" />
				<Text>SearchInput</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	searchContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '90%',
		maxWidth: 300,
		height: 50,
		borderWidth: 1,
		borderRadius: 25,
	},
});

export default SearchInput;
