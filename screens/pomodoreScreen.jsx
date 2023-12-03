import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Timer from "../components/Timer";

function PomodoreScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(243, 78, 50, 1)", "rgba(220, 44, 19, 1)"]}
        style={styles.background}
      />
      <Timer></Timer>
    </View>
  );
}

export default PomodoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "rgba(220, 44, 19, 1)",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "70%",
  },
});
