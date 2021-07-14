import React from 'react';
import { TouchableOpacity, View, Text, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Texts } from '../styles/texts';
import { Icons } from '../styles/icons';

const { textInput, InputLabel } = Texts;
const { LeftIcon, RightIcon } = Icons;

const IconInputManager = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <TouchableOpacity style={LeftIcon}>
        <Ionicons name={icon} size={27} color="#787878" />
      </TouchableOpacity>

      <Text style={InputLabel}>{label}</Text>

      <TextInput style={textInput} {...props} />
      {isPassword && (
        <TouchableOpacity style={RightIcon} onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color="#9CA3AF" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default IconInputManager;
