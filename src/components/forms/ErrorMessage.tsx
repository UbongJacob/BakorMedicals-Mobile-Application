import { FormikErrors, FormikTouched } from "formik";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

import AppText from "../AppText";
import Size from "../../utilities/useResponsiveSize";
import colors from "../../configs/colors";
import fonts from "../../configs/fonts";

interface ErrorMessageProp {
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  visible?: boolean | FormikTouched<any> | FormikTouched<any>[];
  style?: TextStyle | ViewStyle;
}

function ErrorMessage({
  error,
  visible,
  style,
}: ErrorMessageProp): JSX.Element | null {
  if (!visible || !error) return null;

  return <AppText style={[styles.error, style]}>{error.toString()}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    textAlign: "left",
    width: "100%",
    color: colors.RED100,
    fontFamily: fonts.OPENSANS_600,
    fontSize: Size.calcAverage(14),
    marginTop: Size.calcHeight(5),
  },
});

export default ErrorMessage;
