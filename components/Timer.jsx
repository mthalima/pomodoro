import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Colors } from "../styles/Colors";

const Timer = () => {
  const [seconds, setSeconds] = useState(1500);
  const [isActive, setIsActive] = useState(false);

  //UseEffect com a logica do tempo do timer
  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const toggleTimer = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const formatTime = (time) => {
    const pad = (val) => (val < 10 ? `0${val}` : val);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{formatTime(seconds)}</Text>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.timerButton}
          title={isActive ? "Pause" : "Start"}
          onPress={toggleTimer}
        />
        <Button style={styles.timerButton} title="Reset" onPress={resetTimer} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  timer: {
    fontSize: 64,
    marginBottom: 20,
    color: "#FDF7E4",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    width: "60%",
  },

  timerButton: {
    backgroundColor: Colors.tomato,
    color: Colors.tomato,
    width: 20,
  },
});

export default Timer;
