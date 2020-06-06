import React, { useContext } from "react"
import { View, StyleSheet, Text } from "react-native"
import { NavigationEvents } from "react-navigation"
import { Context as AuthContext } from "../context/AuthContext"
import AuthForm from "../components/AuthForm"
import NavLink from "../components/NavLink"

const SigninScreen = () => {
	const { state, signin, clearErrorMessage } = useContext(AuthContext)

	return (
		<View style={styles.container}>
			<NavigationEvents onWillFocus={clearErrorMessage} />
			<AuthForm
				headerText="Sign in to your Trackr account"
				errorMessage={state.errorMessage}
				onSubmit={signin}
				submitButtonText="Sign In"
			/>
			<NavLink
				text="Don't have an account? Sign up instead!"
				routeName="Signup"
			/>
		</View>
	)
}

SigninScreen.navigationOptions = () => {
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

export default SigninScreen
