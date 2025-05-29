import React from 'react';
import { View, useColorScheme, ViewProps, StyleProp, ViewStyle, StyleSheet  } from 'react-native';
import { Colors } from '../constants/Colors';

interface ThemeCardProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ style, children, ...props }) => {
  const colorScheme = useColorScheme() ?? 'dark';
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View style={[{ backgroundColor: theme.uiBackground }, styles.card]} {...props}>
      {children}
    </View>
  );
};

export default ThemeCard;


const styles = StyleSheet.create({
    card:{
        borderRadius: 5,
        padding: 20
    }
})


 