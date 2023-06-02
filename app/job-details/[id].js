import {
	ActivityIndicator,
	RefreshControl,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	ScrollView,
} from "react-native";
import React, { useCallback, useState } from "react";
import {
	Company,
	JobAbout,
	JobFooter,
	JobTabs,
	ScreenHeaderBtn,
	Specifics,
} from "../../components";

import useFetch from "../../hook/useFetch";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { COLORS, SIZES, icons } from "../../constants";

const tabs = ["About", "Qualifications", "Responsibilities"];

const jobDetails = () => {
	const params = useSearchParams();
	const router = useRouter();

	const [refreshing, setRefreshing] = useState(false);
	const onRefresh = useCallback(() => {
		setRefreshing(true)
		refetch()
		setRefreshing(false)
	},[]);
	const { data, isLoading, error, refetch } = useFetch("job-details", {
		job_id: params.id,
	});

	const [activeTabs, setActiveTabs] = useState(tabs[0]);

	const displayTabContent = () => {
		switch (activeTabs) {
			case "About":
				return (
					<JobAbout info={data[0].job_description ?? "No data provided"} />
				);

			case "Qualifications":
				return (
					<Specifics
						title="Qualifications"
						points={data[0].job_highlights?.Qualifications ?? ["N/A"]}
					/>
				);
			case "Responsibilities":
				return (
					<Specifics
						title="Responsibilities"
						points={data[0].job_highlights?.Responsibilities ?? ["N/A"]}
					/>
				);
			default:
				break;
		}
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: {
						backgroundColor: COLORS.lightWhite,
					},
					headerShadowVisible: false,
					headerBackVisible: false,
					headerLeft: () => (
						<ScreenHeaderBtn
							iconUrl={icons.left}
							dimension="60%"
							handlePress={() => {
								router.back();
							}}
						/>
					),

					headerRight: () => (
						<ScreenHeaderBtn
							iconUrl={icons.share}
							dimension="60%"
							handlePress={() => {
								router.back();
							}}
						/>
					),
					headerTitle: "",
				}}
			/>
			<>
				<ScrollView
					showsVerticalScrollIndicator={false}
					refreshControl={
						<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
					}
				>
					{isLoading ? (
						<ActivityIndicator size="large" color={COLORS.primary} />
					) : error ? (
						<Text>something went wrong</Text>
					) : data.length === 0 ? (
						<Text>NO Data</Text>
					) : (
						<View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
							<Company
								CompanyLogo={data[0].employer_logo}
								jobTitle={data[0].job_title}
								CompanyName={data[0].employer_name}
								location={data[0].country}
							/>
							<JobTabs
								tabs={tabs}
								activeTabs={activeTabs}
								setActiveTabs={setActiveTabs}
							/>
							{displayTabContent()}
						</View>
					)}
				</ScrollView>
			

				<JobFooter
					url={
						data[0]?.job_google_link ??
						"https://careers.google.com/jobs/results/"
					}
				/>
			</>
		</SafeAreaView>
	);
};

export default jobDetails;

const styles = StyleSheet.create({});
