import React, { useContext } from "react"
import { StyleSheet, FlatList, TouchableOpacity, View } from "react-native"
import { Text, Button, ListItem } from "react-native-elements"
import { NavigationEvents, SafeAreaView } from "react-navigation"

import Spacer from "../components/Spacer"

import { Context as TrackContext } from "../context/TrackContext"

const TrackListScreen = ({ navigation }) => {
	const { state, fetchTracks } = useContext(TrackContext)

	return (
		<>
			<NavigationEvents onWillFocus={fetchTracks} />
			{state.length === 0 ? (
				<View style={styles.container}>
					<Spacer>
						<Text h4>You don't have any recorded tracks yet!</Text>
					</Spacer>
				</View>
			) : (
				<SafeAreaView forceInset={{ top: "always" }}>
					<Spacer>
						<Text h2>Your saved tracks</Text>
					</Spacer>
					<FlatList
						data={state}
						keyExtractor={(item) => item._id}
						renderItem={({ item }) => {
							return (
								<TouchableOpacity
									onPress={() =>
										navigation.navigate("TrackDetail", { _id: item._id })
									}
								>
									<ListItem chevron title={item.name} />
								</TouchableOpacity>
							)
						}}
					/>
				</SafeAreaView>
			)}
		</>
	)
}

TrackListScreen.navigationOptions = () => {
	return {
		headerShown: false,
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
})

export default TrackListScreen
