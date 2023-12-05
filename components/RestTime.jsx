import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

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
    <View>
      <Text style={{ fontSize: 48 }}>{formatTime(seconds)}</Text>
    </View>
  );
};

export default RestTime;
