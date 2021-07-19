import React from 'react';
import Select from 'react-select';

import { View, Text } from 'react-native';
import { Texts } from '../styles/texts';

const { InputLabel } = Texts;

const options = [
  { value: 'Urgent', label: 'Urgent' },
  { value: 'Important', label: 'Important' },
  { value: 'Less Important', label: 'Less Important' },
  { value: 'Not Important', label: 'Not Important' },
];

const selectStyles = {
  control: (styles) => ({
    ...styles,
    fontFamily: 'sans-serif',
    fontSize: 13,
    color: '#1F2937',
    backgroundColor: '#E5E7EB',
  }),
  option: (styles) => {
    return {
      ...styles,
      color: '#1F2937',
      fontSize: 13,
      fontFamily: 'sans-serif',
    };
  },
  placeholder: () => ({ color: '#9CA3AF' }),
  menu: () => ({ zIndex: 9999999 }),
};
const SelectInput = ({ props }) => {
  return (
    <View>
      <Text style={InputLabel}>{props.label}</Text>
      <Select
        value={props.tag}
        options={options}
        styles={selectStyles}
        onChange={props.onChangeText}
        placeholder={props.placeholder}
      />
    </View>
  );
};

export default SelectInput;
