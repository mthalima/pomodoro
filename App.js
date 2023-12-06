import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RestTime from "./components/RestTime";
import PomodoreScreen from "./screens/pomodoreScreen";

export default function App() {
  return (
    <>
      <PomodoreScreen>
        <RestTime />
      </PomodoreScreen>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
