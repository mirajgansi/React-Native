import React from 'react';
import { View, useColorScheme, ViewProps, StyleProp, ViewStyle } from 'react-native';
import { Colors } from '../constants/Colors';
import { SafeAreaFrameContext, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

interface ThemeViewProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  safe:boolean;
}

const ThemeView: React.FC<ThemeViewProps> = ({ style,safe=false, children, ...props }) => {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme] ?? Colors.light;


  if(!safe) 
  return (
    <View style={[{ backgroundColor: theme.uiBackground }, style]} {...props}>
      {children}
    </View>
  )

  const insets= useSafeAreaInsets()

  return(
     <View style={[{ backgroundColor: theme.uiBackground,
      paddingTop: insets.top,
      paddingBottom : insets.bottom
      }, 
     style]} {...props}>
      {children}
    </View>
  )
  
};

export default ThemeView;


