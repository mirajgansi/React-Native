import React from 'react';
import { View, useColorScheme, ViewProps, StyleProp, ViewStyle } from 'react-native';
import { Colors } from '../constants/Colors';

interface ThemeViewProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const ThemeView: React.FC<ThemeViewProps> = ({ style, children, ...props }) => {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View style={[{ backgroundColor: theme.uiBackground }, style]} {...props}>
      {children}
    </View>
  );
};

export default ThemeView;


