import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import { Colors } from "../styles/Colors";

const Rest = () => {
  const [seconds, setSeconds] = useState(300);
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
    setSeconds(1500);
  };

  const formatTime = (time) => {
    const pad = (val) => (val < 10 ? `0${val}` : val);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${pad(minutes)}:${pad(seconds)}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.rest}>{formatTime(seconds)}</Text>
      <View style={styles.buttonContainer}>
        <IconButton
          style={styles.timerButton}
          icon={isActive ? "pause" : "play"}
          size={30}
          iconColor={Colors.tomato}
          onPress={toggleTimer}
        />
        <IconButton
          style={styles.timerButton}
          icon="replay"
          size={30}
          iconColor={Colors.tomato}
          onPress={resetTimer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.seed,
    padding: 36,
    borderRadius: 200,
    marginTop: 50,
    height: 300,
    width: 300,
    elevation: 10,
    backgroundColor: "rgba(255,99,71, 1)",
    opacity: 1,
  },

  rest: {
    fontSize: 64,
    fontWeight: "bold",
    marginBottom: 10,
    color: Colors.seed,
    marginBottom: 25,
    opacity: 1,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    width: "60%",
  },

  timerButton: {
    backgroundColor: Colors.seed,
    width: 50,
    height: 40,
    opacity: 1,
  },
});

export default Rest;
