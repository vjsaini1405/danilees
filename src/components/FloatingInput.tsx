import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import { Colors } from '../theme';

interface InputProps {
  label: string;
  value: string;
  setValue: () => void;
}

const FloatingInput: FC<InputProps> = ({label, value, setValue}) => {
  return (
    <View style={styles.mainContainer}>
      <FloatingLabelInput
        label={label}
        value={value}
        onChangeText={setValue}
        // staticLabel={true}
        hintTextColor={Colors.placeholderColor}
        containerStyles={styles.containerStyle}
        customLabelStyles={{
          colorFocused: Colors.placeholderColor,
          colorBlurred: Colors.placeholderColor,
          fontSizeFocused: 12,
          fontSizeBlurred: 12,
        }}
        inputStyles={styles.inputStyle}
      />
    </View>
  );
};

export default FloatingInput;

const styles = StyleSheet.create({
  mainContainer: {width: '100%'},
  containerStyle: {
    borderWidth: 0.5,
    borderColor: Colors.placeholderColor,
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  inputStyle: {
    color: '#000',
    fontWeight: '600',
    fontSize: 12,
  },
});
