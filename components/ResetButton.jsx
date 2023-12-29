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
    width: 300,
    height: 100,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: Colors.leaf,
  },
});
export default ResetButton;
