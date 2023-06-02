import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";
import { checkImageURL } from "../../../../utils/index";
const NearbyJobCard = ({ job, selectedJob, handleNavigate }) => {
	return (
		<TouchableOpacity onPress={handleNavigate} style={styles.container}>
			<TouchableOpacity style={styles.logoContainer}>
				<Image
					resizeMode="contain"
					source={{
						uri: checkImageURL(job.employer_logo)
							? job.employer_logo
							: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
					}}
					style={styles.logImage}
				/>
			</TouchableOpacity>
	

			<View style={styles.textContainer}>
				<Text style={styles.jobName}>{job.job_title}</Text>
				<Text style={styles.jobType}>{job.job_employment_type}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default NearbyJobCard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		padding: SIZES.medium,
		borderRadius: SIZES.small,
		backgroundColor: "#FFF",
		...SHADOWS.medium,
		shadowColor: COLORS.white,
	},
	logoContainer: {
		width: 50,
		height: 50,
		backgroundColor: COLORS.white,
		borderRadius: SIZES.medium,
		justifyContent: "center",
		alignItems: "center",
	},

	logImage: {
		width: "70%",
		height: "70%",
	},
	textContainer: {
		flex: 1,
		marginHorizontal: SIZES.medium,
	},
	jobName: {
		fontSize: SIZES.medium,
		fontFamily: "DMBold",
		color: COLORS.primary,
	},
	jobType: {
		fontSize: SIZES.small + 2,
		fontFamily: "DMRegular",
		color: COLORS.gray,
		marginTop: 3,
		textTransform: "capitalize",
	},
});
