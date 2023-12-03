import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Timer from "../components/Timer";
import { Colors } from "../styles/Colors";

function PomodoreScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(243, 78, 50, 1)", "rgba(220, 44, 19, 1)"]}
        style={styles.background}
      />
      <Text style={styles.title}>Pomodoro</Text>
      <Timer />
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

  title: {
    textAlign: "center",
    marginTop: 60,
    fontWeight: "bold",
    fontSize: 48,
    color: Colors.seed,
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "70%",
  },
});
