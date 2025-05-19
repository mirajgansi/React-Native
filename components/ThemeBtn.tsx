import React from 'react';
import {
  ViewProps,
  StyleProp,
  ViewStyle,
  Pressable,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { Colors } from '../constants/Colors';

interface ThemedBtnProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  onPress?: () => void;
}

const ThemedBtn: React.FC<ThemedBtnProps> = ({ style, children, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.btn,
        pressed && styles.pressed,
        style,
      ]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary || '#007bff', // fallback in case Colors.primary is undefined
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.9,
  },
});

export default ThemedBtn;
