// lista de pomodoros, renderiza um a cada pomodoro completo
import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose any icon library you prefer


const PomoList = () => {
  const [iconArray, setIconArray] = useState([]);

  const handleButtonClick = () => {
    // Generate a random icon name for demonstration purposes
    const iconName = 'star'; // Change this to your desired icon name
    const newIconArray = [...iconArray, { iconName }];
    setIconArray(newIconArray);
  };

  return (
    <View>
      <TouchableOpacity onPress={handleButtonClick}>
        <Text>Add Icon</Text>
      </TouchableOpacity>

      {iconArray.map((item, index) => (
        <Icon key={index} name={item.iconName} size={30} color="white" />
      ))}
    </View>
  );
};

export default PomoList;
