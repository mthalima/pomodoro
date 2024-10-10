// lista de pomodoros, renderiza um a cada pomodoro completo
import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // You can choose any icon library you prefer

const PomoList = ({ renderIcon }) => {
  return (
    <View>
      <TouchableOpacity onPress={renderIcon}>
        <Text>Add Icon</Text>
      </TouchableOpacity>

      {iconArray.map((item, index) => (
        <Icon key={index} name={item.iconName} size={30} color="#f2ecd9" />
      ))}
    </View>
  );
};

export default PomoList;
