import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Timer from "../components/Timer";
import { Colors } from "../styles/Colors";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

function PomodoreScreen() {
  const [fontsLoaded, fontError] = useFonts({
    "AmaticSC-Bold": require("../assets/fonts/AmaticSC-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <LinearGradient
        colors={["rgba(243, 78, 50, 1)", "rgba(220, 44, 19, 1)"]}
        style={styles.background}
      />
      <Text
        style={{
          fontFamily: "AmaticSC-Bold",
          fontSize: 60,
          textAlign: "center",
          marginTop: 100,
          color: Colors.seed,
        }}
      >
        Pomodoro
      </Text>
      <Timer />
    </View>
  );
}

export default PomodoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(220, 44, 19, 1)",
  },

  title: {
    fontFamily: "AmaticSC-Regular",
    fontSize: 60,
    textAlign: "center",
    marginTop: 100,
    color: Colors.seed,
    fontWeight: "bold",
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "70%",
  },
});
