import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  TextStyle,
  ViewStyle,
  ActivityIndicator,
  View,
} from "react-native";
import { Shadow } from "react-native-shadow-2";

import AppText from "./AppText";
import colors from "../configs/colors";
import Size from "../utilities/useResponsiveSize";
import fonts from "../configs/fonts";

export interface AppButtonProps extends TouchableOpacityProps {
  textStyles?: TextStyle;
  title?: string;
  isLoading?: boolean;
  innerContainerStyle?: ViewStyle;
  disableShadow?: boolean;
  disableWidth?: boolean;
}

function AppButton({
  style,
  textStyles,
  title,
  onPress,
  isLoading,
  innerContainerStyle,
  disabled,
  children,
  disableShadow,
  disableWidth,
}: AppButtonProps) {
  return (
    <TouchableOpacity
      style={style}
      disabled={isLoading || disabled}
      onPress={onPress}
    >
      <Shadow
        startColor={colors.BLUE200}
        distance={5}
        disabled={disableShadow}
        offset={[0, 5]}
        style={[
          styles.button,
          !disableWidth && { width: "100%" },
          (isLoading || disabled) && styles.disabledButton,
          innerContainerStyle,
        ]}
      >
        {/* <FastImage   //     resizeMode="contain"
          //     style={styles.image}
          //     source={LoadingGif}
          //   />*/}

        {!!children ? (
          children
        ) : (
          <View style={styles.center}>
            <AppText style={[styles.text, textStyles]}>{title}</AppText>
            {isLoading && <ActivityIndicator color={colors.BLUE100} />}
          </View>
        )}
      </Shadow>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: Size.calcHeight(50),
    backgroundColor: colors.BLUE100,
    borderRadius: Size.calcAverage(20),
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    flexDirection: "row",
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: colors.BLUE300,
  },
  text: {
    fontFamily: fonts.MONTSERRAT_500,
    fontSize: Size.calcWidth(15),
    color: colors.WHITE100,
    marginRight: Size.calcWidth(10),
  },
});
export default AppButton;
