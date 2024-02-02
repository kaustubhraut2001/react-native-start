import React from "react";
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	useColorScheme

} from "react-native";

function AppPro():JSX.Element{
	const isDarkMode = useColorScheme() === "dark";
  return (
	<View style = {styles.conatiner}>
		<Text
			style = {isDarkMode ? styles.textDark : styles.textLight}
		>AppPro</Text>
		</View>
  )
}

const styles = StyleSheet.create({
conatiner : {
	// it moves from topto bottom and left to right
	flex : 1,
	alignItems : "flex-start", // moves element in left to right
	justifyContent : "center", //  works from top to bottom
},
textDark : {
	color : "white",
	fontSize : 30,
},
textLight : {
	color : "black",
	fontSize : 30,
},
});

export default AppPro;