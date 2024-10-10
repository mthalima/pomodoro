import { StyleSheet } from "react-native";
import PomodoreScreen from "./screens/pomodoreScreen";
import GardenScreen from "./screens/gardenScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "./styles/Colors";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Nave() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: Colors.leaf },
        }}
      >
        <Tab.Screen
          name="Pomo"
          component={PomodoreScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({}) => (
              <Ionicons name="alarm" color={Colors.seed} size={33} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <PomodoreScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
