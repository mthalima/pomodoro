import { Pressable, StyleSheet, View, Text } from "react-native";
import { Colors } from "../styles/Colors";

function ResetButton() {
  return (
    <View>
      <Pressable style={styles.button}>
        <Text>Reset</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.seed,
    width: 120,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 40,
    elevation: 3,
  },
});
export default ResetButton;
