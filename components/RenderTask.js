import React from 'react';
import { View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Icons } from '../styles/icons';
import { Texts } from '../styles/texts';
import { ButtonStyles } from '../styles/buttons';

const { TrashIcon, PinIcon } = Icons;
const { textInput } = Texts;
const { TaskInput } = ButtonStyles;

const RenderTask = ({ item, index, show, setShow }) => {
  const setColorPinIcon = (index) => {
    let newArr = [...show];

    if (newArr[index].color == 'red') {
      newArr[index].color = '#9CA3AF';
    } else {
      newArr[index].color = 'red';
    }

    // newArr.push({ title: newArr[index].title, id: newArr.length, color: 'red' });
    // newArr.splice()
    // alert(newArr[newArr.length]);
    // newArr.
    setShow(newArr);
  };

  return (
    <ScrollView>
      <View>
        <TouchableOpacity style={PinIcon}>
          <Ionicons onPress={() => setColorPinIcon(index)} color={item.color} name="pin-sharp" size={35} />
        </TouchableOpacity>

        <TouchableOpacity style={TaskInput}>
          <TextInput value={item.title} editable={false} style={textInput} keyboardType="default"></TextInput>
        </TouchableOpacity>

        <TouchableOpacity style={TrashIcon}>
          <Ionicons name="trash-sharp" size={35} color="#9CA3AF" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RenderTask;
