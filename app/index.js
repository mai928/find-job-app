import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { COLORS, icons, FONT, SIZES, images } from "../constants";
import {
	Nearbyjobs,
	Popularjobs,
	ScreenHeaderBtn,
	Welcome,
} from "../components";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
const Home = () => {
	const router = useRouter();
	const [searchTearm, setSearchTerm] = useState("");

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: {
						backgroundColor: COLORS.lightWhite,
					},
					headerShadowVisible: false,
					headerLeft: () => (
						<ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
					),
					headerRight: () => (
						<ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
					),
					headerTitle: "",
				}}
			/>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ flex: 1, padding: SIZES.medium }}>
					<Welcome
						searchTearm={searchTearm}
						setSearchTerm={setSearchTerm}
						handleClick={() => {
							if (searchTearm) {
								router.push(`/search/${searchTearm}`);
							}
						}}
					/>
					<Popularjobs />
					<Nearbyjobs />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
