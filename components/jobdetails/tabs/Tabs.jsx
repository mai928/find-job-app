import React from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../constants";

const Tabs = ({ tabs, activeTabs, setActiveTabs }) => {



	const TabButton = ({ name, activeTab, onhandleSearchType }) => (
		<TouchableOpacity
			style={styles.btn(name, activeTab)}
			onPress={onhandleSearchType}
		>
			<Text style={styles.btnText(name, activeTab)}>{name}</Text>
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			<FlatList
				contentContainerStyle={{ columnGap: SIZES.small / 2 }}
				horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => item}
				data={tabs}
				renderItem={({ item }) => 
					(<TabButton
						name={item}
						activeTab={activeTabs}
						onhandleSearchType={() => setActiveTabs(item)}
					/>)
				}
			/>
		</View>
	);
};

export default Tabs;

const styles = StyleSheet.create({
	container: {
		marginTop: SIZES.small,
		marginBottom: SIZES.small / 2,
	},
	btn: (name, activeTab) => ({
		paddingVertical: SIZES.medium,
		paddingHorizontal: SIZES.xLarge,
		backgroundColor: name === activeTab ? COLORS.primary : "#F3F4F8",
		borderRadius: SIZES.medium,
		marginLeft: 2,
		...SHADOWS.medium,
		shadowColor: COLORS.white,
	}),
	btnText: (name, activeTab) => ({
		fontFamily: "DMMedium",
		fontSize: SIZES.small,
		color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
	}),
});
