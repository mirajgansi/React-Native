import React from 'react';
import { Text, TextProps, useColorScheme, StyleProp, TextStyle } from 'react-native';
import { Colors } from '../constants/Colors';

interface ThemedTextProps extends TextProps {
  title?: boolean;
  style?: StyleProp<TextStyle>;
}

const ThemedText: React.FC<ThemedTextProps> = ({ style, title = false, ...props }) => {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme] ?? Colors.light;
  const textColor = title ? theme.title : theme.text;

  return <Text style={[{ color: textColor }, style]} {...props} />;
};

export default ThemedText;
