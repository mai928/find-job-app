import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";
import { checkImageURL } from "../../../../utils/index";
const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
	return (
		<TouchableOpacity
			onPress={()=>handleCardPress(item)}
			style={styles.container(selectedJob, item)}
		>
			<TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
				<Image
					resizeMode="contain"
					source={{
						uri: checkImageURL(item.employer_logo)
							? item.employer_logo
							: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
					}}
					style={styles.logoImage}
				/>
			</TouchableOpacity>
			<Text style={styles.companyName} numberOfLines={1}>
				{item.employer_name}
			</Text>

			<View style={styles.infoContainer}>
				<Text style={styles.jobName(selectedJob, item)}>{item.job_title}</Text>
				<Text style={styles.location}>{item.job_country}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default PopularJobCard;

const styles = StyleSheet.create({
	container: (selectedJob, item) => ({
		width: 250,
		padding: SIZES.xLarge,
		backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
		borderRadius: SIZES.medium,
		justifyContent: "space-between",
		...SHADOWS.medium,
		shadowColor: COLORS.white,
	}),

	logoContainer: (selectedJob, item) => ({
		width: 50,
		height: 50,
		backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
		borderRadius: SIZES.medium,
		justifyContent: "center",
		alignItems: "center",
	}),
	logoImage: {
		width: "70%",
		height: "70%",
	},
	companyName: {
		fontSize: SIZES.medium,
		fontFamily: FONT.regular,
		color: "#B3AEC6",
		marginTop: SIZES.small / 1.5,
	},
	infoContainer: {
		marginTop: SIZES.large,
	},
	jobName: (selectedJob, item) => ({
		fontSize: SIZES.large,
		fontFamily: FONT.medium,
		color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
	}),
	infoWrapper: {
		flexDirection: "row",
		marginTop: 5,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	publisher: (selectedJob) => ({
		fontSize: SIZES.medium - 2,
		fontFamily: FONT.bold,
		color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
	}),
	location: {
		fontSize: SIZES.medium - 2,
		fontFamily: FONT.regular,
		color: "#B3AEC6",
	},
});
