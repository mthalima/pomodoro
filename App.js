import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PomodoreScreen from "./screens/pomodoreScreen";

export default function App() {
  return (
    <>
      <PomodoreScreen />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
