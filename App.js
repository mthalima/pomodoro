import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from "react-native";
import PomodoreScreen from "./screens/pomodoreScreen";
import GardenScreen from './screens/gardenScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
      <Tab.Navigator>
        <Tab.Screen name="Home" component={PomodoreScreen} />
        <Tab.Screen name="Garden" component={GardenScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({});
