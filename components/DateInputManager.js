import React from 'react';
import DatePicker from 'react-datepicker';

import { View, Text } from 'react-native';
import { Texts } from '../styles/texts';

const { InputLabel } = Texts;

const DateInputManager = (props) => {
  return (
    <View>
      <Text style={InputLabel}>{props.label}</Text>

      <View>
        <DatePicker value={props.dt} selected={props.value} onChange={props.onChangeText} />
      </View>
    </View>
  );
};

export default DateInputManager;
