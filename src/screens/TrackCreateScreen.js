// import "../_mockLocation"
import React, { useContext, useCallback } from "react"
import { StyleSheet } from "react-native"
import { Text } from "react-native-elements"
import { SafeAreaView, withNavigationFocus } from "react-navigation"
import { FontAwesome } from "@expo/vector-icons"

import Map from "../components/Map"
import TrackForm from "../components/TrackForm"

import { Context as LocationContext } from "../context/LocationContext"

import useLocation from "../hooks/useLocation"
import Spacer from "../components/Spacer"

const TrackCreateScreen = ({ isFocused }) => {
	const {
		state: { recording },
		addLocation,
	} = useContext(LocationContext)

	const callback = useCallback(
		(location) => {
			addLocation(location, recording)
		},
		[recording]
	)

	const [permissionStatus] = useLocation(isFocused || recording, callback)

	return (
		<SafeAreaView forceInset={{ top: "always" }}>
			<Spacer>
				<Text h2>Start tracking here!</Text>
			</Spacer>
			<Map />
			{permissionStatus === "denied" ? (
				<Text>Please enable location services</Text>
			) : null}
			<TrackForm />
		</SafeAreaView>
	)
}

TrackCreateScreen.navigationOptions = {
	title: "Add Track",
	tabBarIcon: <FontAwesome name="plus" size={20} />,
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen)
