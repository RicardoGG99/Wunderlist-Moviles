import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Icons } from '../styles/icons';
import { Texts } from '../styles/texts';
import { ButtonStyles } from '../styles/buttons';

import getTasksById from '../connectionToBack/getTasksByIdFetch';
import deleteTask from '../connectionToBack/deleteTaskFetch';
import { getRes } from '../connectionToBack/setGetRes';

const { TrashIcon, PinIcon } = Icons;
const { textInput } = Texts;
const { TaskInput } = ButtonStyles;

const RenderTask = ({ item, index, show, setShow, nav }) => {
  const setColorPinIcon = (index) => {
    let newArr = [...show];

    if (newArr[index].color == 'red') {
      newArr[index].color = '#9CA3AF';
    } else {
      newArr[index].color = 'red';
    }

    setShow(newArr);
  };

  const [data, setData] = useState('');

  // const seeTask = async () => {
  //   const res = await getTaskById(item.id);
  //   setData(res);
  //   nav.navigate('updateTask');
  //   console.log(data);
  // };

  const deleTask = async () => {
    const info = await deleteTask(item.id);

    const res = getRes();

    if (res == 'Success') {
      alert('Task Deleted');
      console.log('Task Deleted!');
    } else {
      alert('Could Not Delete Task');
      console.log('Error!');
    }
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
          <Ionicons onPress={deleTask} name="trash-sharp" size={35} color="#9CA3AF" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RenderTask;
