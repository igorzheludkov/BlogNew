import React from 'react';
import {
  DimensionValue,
  StyleSheet,
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
  View,
} from 'react-native';
import ColorTheme from '../constants copy/ColorTheme';

interface ButtonProps extends TouchableOpacityProps {
  bgColor?: string;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  width?: DimensionValue;
  height?: DimensionValue;
  fontSize?: number;
  fontWeight?: '400' | '500' | '600';
  fontColor?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export default function Button(props: ButtonProps) {
  const {
    bgColor = ColorTheme.buttonPrimaryBackground,
    borderRadius = 5,
    borderWidth = 1,
    borderColor = ColorTheme.buttonPrimaryBackground,
    width = 'auto',
    height = 40,
    fontSize = 16,
    fontWeight = '600',
    fontColor = ColorTheme.buttonPrimaryText,
    icon,
    children,
    onPress,
    disabled,
    ...restProps
  } = props;

  const buttonStyles: ViewStyle = {
    backgroundColor: disabled ? ColorTheme.buttonDisabledBackground : bgColor,
    borderColor: disabled ? ColorTheme.buttonDisabledBackground : borderColor,
    opacity: disabled ? 0.5 : 1,
    borderRadius,
    borderWidth,
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    ...restProps,
  };

  const textStyles: TextStyle = {
    fontSize,
    color: disabled ? ColorTheme.buttonDisabledText : fontColor,
    fontWeight,
  };

  return (
    <TouchableOpacity
      style={[styles.wrapper, buttonStyles, styles.button]}
      onPress={onPress}
      disabled={disabled}>
      {icon && <View style={{marginRight: 5}}>{icon}</View>}
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {},
  button: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
