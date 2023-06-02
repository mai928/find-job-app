import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ActivityIndicator,
	FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { COLORS, FONT, SIZES } from "../../../constants";
import useFetch from "../../../hook/useFetch";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
const Nearbyjobs = () => {
	const router = useRouter();

	const { data, isLoading, error } = useFetch("search", {
		query: "React developer",
		num_pages: 1,
	});

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Near by Jobs</Text>
				<TouchableOpacity>
					<Text>Show all</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.cardsContainer}>
				{isLoading ? (
					<ActivityIndicator size={"large"} color={COLORS.primary} />
				) : error ? (
					<Text>Something went wrong</Text>
				) : (
					data?.map((job) => (
						<NearbyJobCard
							job={job}
							key={`nearby-job${job.job_id}`}
							handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
						/>
					))
				)}
			</View>
		</View>
	);
};

export default Nearbyjobs;

const styles = StyleSheet.create({
	container: {
		marginTop: SIZES.xLarge,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	headerTitle: {
		fontSize: SIZES.large,
		fontFamily: FONT.medium,
		color: COLORS.primary,
	},
	cardsContainer: {
		marginTop: SIZES.medium,
	},
	headerBtn: {
		fontSize: SIZES.medium,
		fontFamily: FONT.medium,
		color: COLORS.gray,
	},
});
