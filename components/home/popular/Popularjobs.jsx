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
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";
const Popularjobs = () => {
	const router = useRouter();

	const { data, isLoading, error } = useFetch("search", {
		query: "React developer",
		num_pages: 1,
	});

	const [selectedJob ,setSelectedJob] =useState()

	const handleCardPress =(item)=>{
		router.push(`/job-details/${item.job_id}`)
		setSelectedJob(item.job_id)
	}

	// console.log(data);
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Popular Job</Text>
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
					<FlatList
						horizontal
						contentContainerStyle={{ columnGap: SIZES.medium }}
						data={data}
						keyExtractor={(item) => item.job_id}
						renderItem={({ item }) => (
							<PopularJobCard
								item={item}
								selectedJob={selectedJob}
								handleCardPress={handleCardPress}
							/>
						)}
					/>
				)}
			</View>
		</View>
	);
};

export default Popularjobs;

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
});
