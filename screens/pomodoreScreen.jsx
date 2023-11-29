import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function PomodoreScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(255, 165, 140, 1)", "rgba(255, 81, 32, 1)"]}
        style={styles.background}
      />
    </View>
  );
}

export default PomodoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 81, 32, 1)",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "70%",
  },
});
