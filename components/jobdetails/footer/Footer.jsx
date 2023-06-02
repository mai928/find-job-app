import React from "react";
import { View, Text, StyleSheet, Image, Linking } from "react-native";

import { COLORS, FONT, SIZES, icons } from "../../../constants";
import { TouchableOpacity } from "react-native";

const Footer = ({ url }) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.likeBtn}>
				<Image
					style={styles.likeBtnImage}
					resizeMode="contain"
					source={icons.heartOutline}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => Linking.openURL(url)}
				style={styles.applyBtn}
			>
				<Text style={styles.applyBtnText}>Apply For Job</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Footer;

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		padding: SIZES.small,
		backgroundColor: "#FFF",
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
	},
	likeBtn: {
		width: 55,
		height: 55,
		borderWidth: 1,
		borderColor: "#F37453",
		borderRadius: SIZES.medium,
		justifyContent: "center",
		alignItems: "center",
	},
	likeBtnImage: {
		width: "40%",
		height: "40%",
		tintColor: "#F37453",
	},
	applyBtn: {
		flex: 1,
		backgroundColor: "#FE7654",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		marginLeft: SIZES.medium,
		borderRadius: SIZES.medium,
	},
	applyBtnText: {
		fontSize: SIZES.medium,
		color: COLORS.white,
		fontFamily: FONT.bold,
	},
});
