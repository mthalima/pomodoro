import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../styles/Colors";
import { Audio } from "expo-av";
import ResetButton from "./ResetButton";
import Icon from 'react-native-vector-icons/FontAwesome';

const Timer = () => {
  const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [restIsActive, setRestIsActive] = useState(false);
  const [iconArray, setIconArray] = useState([]);


  //----------------------------

  const soundUri = "../assets/sounds/bell.mp3";

  const [sound, setSound] = React.useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sounds/bell.mp3")
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

  //renderiza o icone
  const renderIcon = () => {
    const iconName = 'star'; // Change this to your desired icon name
    const newIconArray = [...iconArray, { iconName }];
    setIconArray(newIconArray);
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
    renderIcon();
  }
  if (restIsActive && seconds == 0) {
    playSound;
    resetTimer();
  } else {
    return (
      //envolvi com esse pressable para o times startar quando clickar nele inteiro
      <View style={styles.mainContainer}>
        <Pressable onPress={toggleTimer}>
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
          {/* <View style={styles.resetContainer}>
          <IconButton
            style={styles.timerButton}
            icon="replay"
            size={30}
            iconColor={Colors.tomato}
            onPress={resetTimer}
          />
        </View> */}
        </Pressable>
        <View style={styles.resetButtonContainer}>
          <ResetButton onPress={resetTimer}></ResetButton>
        </View>
        <View style={styles.pomoList}>
          {iconArray.map((item, index) => (
        <Icon style={styles.pomoIcon} key={index} name={item.iconName} size={36} color="white" />
      ))}
      </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgba(255,255,255, 0.4)",
    borderRadius: 200,
    marginTop: 50,
    height: 280,
    width: 280,
    elevation: 5,
    backgroundColor: "rgba(255,99,71, 1)",
    opacity: 1,
    borderWidth: 3,
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
  resetButtonContainer: {
    marginTop: 40,
  },

  pomoList:{
    display: "flex",
    flexDirection: "row"
  },
  pomoIcon:{
    marginHorizontal: 5,
    marginTop: 60,
  }
});

export default Timer;
