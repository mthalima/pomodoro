import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Timer from "../components/Timer";
import { Colors } from "../styles/Colors";
import { useFonts } from "expo-font";

function GardenScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(243, 78, 50, 1)", "rgba(220, 44, 19, 1)"]}
        style={styles.background}
      />
      <Text style={styles.title}>Garden</Text>
      <Timer />
    </View>
  );
}

export default GardenScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(220, 44, 19, 1)",
  },

  title: {
    marginTop: 100,
    fontSize: 60,
    textAlign: "center",
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
