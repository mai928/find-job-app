import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	FlatList,
} from "react-native";
import { COLORS, FONT, SIZES, icons } from "../../../constants";
import { Image } from "react-native";
import { useRouter } from "expo-router";

const Welcome = ({searchTearm ,setSearchTerm ,handleClick}) => {
	const router =useRouter()
	const jobTypes = ["Full-time", "part-time", "Contractor"];
	const [activeJobType, setactiveJobType] = useState("Full-time");
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.userName}>Hello Adrian</Text>
				<Text style={styles.welcomeMessage}>Find your Perfect Job</Text>
			</View>

			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput
						value={searchTearm}
						onChangeText={(text) => {setSearchTerm(text)}}
						style={styles.searchInput}
						placeholder="What are you looking for ? "
					/>
				</View>
				<TouchableOpacity onPress={handleClick} style={styles.searchBtn}>
					<Image
						source={icons.search}
						resizeMode="contain"
						style={styles.searchBtnImage}
					/>
				</TouchableOpacity>
			</View>

			<View style={styles.tabsContainer}>
				<FlatList
					horizontal
					contentContainerStyle={{ columnGap: SIZES.small }}
					data={jobTypes}
					keyExtractor={(item) => item}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() => {
								setactiveJobType(item)
								router.push(`/search/${item}`)
							}}
							style={styles.tab(activeJobType, item)}
						>
							<Text style={styles.tabText(activeJobType, item)}>{item}</Text>
						</TouchableOpacity>
					)}
				/>
			</View>
		</View>
	);
};

export default Welcome;

const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	userName: {
		fontFamily: FONT.regular,
		fontSize: SIZES.large,
		color: COLORS.secondary,
	},
	welcomeMessage: {
		fontFamily: FONT.bold,
		fontSize: SIZES.xLarge,
		color: COLORS.primary,
		marginTop: 2,
	},
	searchContainer: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		marginTop: SIZES.large,
		height: 50,
	},
	searchWrapper: {
		flex: 1,
		backgroundColor: COLORS.white,
		marginRight: SIZES.small,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: SIZES.medium,
		height: "100%",
	},
	searchInput: {
		fontFamily: FONT.regular,
		width: "100%",
		height: "100%",
		paddingHorizontal: SIZES.medium,
	},
	searchBtn: {
		width: 50,
		height: "100%",
		backgroundColor: COLORS.tertiary,
		borderRadius: SIZES.medium,
		justifyContent: "center",
		alignItems: "center",
	},
	searchBtnImage: {
		width: "50%",
		height: "50%",
		tintColor: COLORS.white,
	},
	tabsContainer: {
		width: "100%",
		marginTop: SIZES.medium,
	},
	tab: (activeJobType, item) => ({
		paddingVertical: SIZES.small / 2,
		paddingHorizontal: SIZES.small,
		borderRadius: SIZES.medium,
		borderWidth: 1,
		borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
	}),
	tabText: (activeJobType, item) => ({
		fontFamily: FONT.medium,
		color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
	}),
});
