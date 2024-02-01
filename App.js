import { StyleSheet} from "react-native";
import PomodoreScreen from "./screens/pomodoreScreen";
import GardenScreen from './screens/gardenScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Nave() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: { backgroundColor: "#f2ecd9" },
    }}>
      <Tab.Screen name="Pomo" component={PomodoreScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Garden" component={GardenScreen} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
          name="Nave"
          component={Nave}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({});
