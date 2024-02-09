import { Pressable, StyleSheet, View, Text } from "react-native";
import { Colors } from "../styles/Colors";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

function ResetButton({ onPress }) {
  const [fontsLoaded, fontError] = useFonts({
    "AmaticSC-Bold": require("../assets/fonts/AmaticSC-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  return (
    <View style={styles.buttonContainer} onLayout={onLayoutRootView}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    elevation: 0,
  },

  button: {
    backgroundColor: Colors.seed,
    width: 120,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 40,
    elevation: 4,
  },

  buttonText: {
    color: Colors.tomato,
    fontSize: 30,
    fontFamily: "AmaticSC-Bold",
  },
  pressed: {
    backgroundColor: Colors.leaf,
    width: 120,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 40,
    elevation: 0,
  },
});
export default ResetButton;
