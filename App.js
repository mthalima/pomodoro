import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RestTime from "./components/RestTime";
import PomodoreScreen from "./screens/pomodoreScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pomodore"
          component={PomodoreScreen}
          options={{
            headerStyle: { backgroundColor: "#ff6347" },
            headerTitle: "My Pomodore",
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
