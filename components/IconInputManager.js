import React from 'react';
import { TouchableOpacity, View, Text, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Texts } from '../styles/texts';
import { Icons } from '../styles/icons';

const { textInput, InputLabel } = Texts;
const { LeftIcon, RightIcon } = Icons;

const IconInputManager = ({ label, icon, isPassword, hidePassword, setHidePassword, able, ...props }) => {
  return (
    <View>
      <View style={LeftIcon}>
        <Ionicons name={icon} size={27} color="#787878" />
      </View>

      <Text style={InputLabel}>{label}</Text>

      <TextInput editable={able} style={textInput} {...props} />
      {isPassword && (
        <TouchableOpacity style={RightIcon} onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color="#9CA3AF" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default IconInputManager;
