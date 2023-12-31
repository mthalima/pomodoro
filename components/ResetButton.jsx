import { Pressable, StyleSheet, View, Text } from "react-native";
import { Colors } from "../styles/Colors";

function ResetButton({ onPress }) {
  return (
    <View>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Reset</Text>
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

  buttonText: {
    color: Colors.tomato,
    fontSize: 18,
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
