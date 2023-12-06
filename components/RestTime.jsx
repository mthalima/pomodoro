import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../styles/Colors";

const RestTime = () => {
  const [seconds, setSeconds] = useState(300); // 5 minutes in seconds
  const [timerActive, setTimerActive] = useState(true);

  useEffect(() => {
    let intervalId;

    if (timerActive) {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          clearInterval(intervalId);
          setTimerActive(false);
        }
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [seconds, timerActive]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <View style={styles.restTimeContainer}>
      <Text style={styles.restTime}>{formatTime(seconds)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  restTimeContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.seed,
    borderWidth: 2,
    padding: 16,
    borderRadius: 10,
    marginTop: 60,
  },

  restTime: {
    fontSize: 64,
    fontWeight: "bold",
    marginBottom: 10,
    color: Colors.seed,
  },
});

export default RestTime;
