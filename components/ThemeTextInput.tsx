import {
  StyleProp,
  ViewStyle,
  TextInput,
  TextInputProps,
  useColorScheme,
} from 'react-native';
import { Colors } from '../constants/Colors';

interface ThemeTextInputProps extends TextInputProps {
  style?: StyleProp<ViewStyle>;
  safe: boolean; // your custom prop, if you still need it
}

const ThemeTextInput: React.FC<ThemeTextInputProps> = ({ style, ...props }) => {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          padding: 20,
          borderRadius: 6,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemeTextInput;
