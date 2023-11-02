import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";

import AppText from "./AppText";
import colors from "../configs/colors";
import Size from "../utilities/useResponsiveSize";
import fonts from "../configs/fonts";

export interface AppTextInputProps extends TextInputProps {
  placeholder?: string;
  label?: string;
  containerStyle?: ViewStyle;
  innerContainerStyle?: ViewStyle;
  onChangeText?: (value: string) => void;
  rightIcon?: JSX.Element;
}

const AppTextInput = ({
  children,
  containerStyle,
  label,
  innerContainerStyle,
  rightIcon,
  ...otherProps
}: AppTextInputProps) => {
  return (
    <View style={containerStyle}>
      <AppText style={styles.label}>{label}</AppText>
      <View style={[styles.container, innerContainerStyle]}>
        <View style={{ flex: 1 }}>
          <TextInput
            cursorColor={colors.BLUE100}
            style={styles.text}
            placeholderTextColor={colors.BLACK200}
            {...otherProps}
          />
          {children}
        </View>
        {rightIcon}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE100,
    borderRadius: Size.calcAverage(7),
    borderColor: colors.BLUE300,
    borderWidth: Size.calcAverage(1),
    paddingHorizontal: Size.calcWidth(10),
    height: Size.calcHeight(50),
    marginTop: Size.calcHeight(8),
    flexDirection: "row",
  },
  label: {
    fontFamily: fonts.OPENSANS_400,
    fontSize: Size.calcWidth(15),
  },
  text: {
    flexGrow: 1,
    fontFamily: fonts.OPENSANS_400,
    fontSize: Size.calcWidth(15),
    color: colors.BLACK100,
  },
});

export default AppTextInput;
