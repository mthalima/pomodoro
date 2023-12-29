import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { IconButton } from "react-native-paper";
import { Colors } from "../styles/Colors";
import Bell from "./Bell";
import { Audio } from "expo-av";
import ResetButton from "./ResetButton";

const Timer = () => {
  const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [restIsActive, setRestIsActive] = useState(false);

  //----------------------------

  const soundUri = "../assets/sounds/bell.mp3";

  const [sound, setSound] = React.useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sounds/restdone.mp3")
    );
    setSound(sound);

    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

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

  const restTime = () => {
    setIsActive(false);
    setRestIsActive(true);
    setSeconds(5);
  };

  const formatTime = (time) => {
    const pad = (val) => (val < 10 ? `0${val}` : val);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${pad(minutes)}:${pad(seconds)}`;
  };

  if (isActive && seconds == 0) {
    playSound();
    restTime();
  }
  if (restIsActive && seconds == 0) {
    playSound;
    resetTimer();
  } else {
    return (
      //envolvi com esse pressable para o times startar quando clickar nele inteiro
      <Pressable style={styles.pressableContainer} onPress={toggleTimer}>
        <View style={styles.container}>
          <Text style={styles.timer}>{formatTime(seconds)}</Text>
          <View style={styles.buttonContainer}>
            {/* <IconButton
              style={styles.timerButton}
              icon={isActive ? "pause" : "play"}
              size={30}
              iconColor={Colors.tomato}
              onPress={toggleTimer}
            /> */}
          </View>
        </View>
        <View style={styles.resetContainer}>
          <IconButton
            style={styles.timerButton}
            icon="replay"
            size={30}
            iconColor={Colors.tomato}
            onPress={resetTimer}
          />
        </View>
        <ResetButton></ResetButton>
      </Pressable>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgba(255,255,255, 0.4)",
    padding: 36,
    borderRadius: 200,
    marginTop: 50,
    height: 280,
    width: 280,
    elevation: 10,
    backgroundColor: "rgba(255,99,71, 1)",
    opacity: 1,
    borderWidth: 3,
  },
  pressableContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  timer: {
    fontSize: 64,
    fontWeight: "bold",
    marginBottom: 10,
    color: Colors.seed,
    opacity: 1,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    width: "60%",
  },

  timerButton: {
    backgroundColor: Colors.seed,
    width: 120,
    height: 70,
    opacity: 1,
    marginHorizontal: 20,
    borderRadius: 40,
    elevation: 10,
  },

  resetContainer: {
    width: 300,
    height: 100,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Timer;
