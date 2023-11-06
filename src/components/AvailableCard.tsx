import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import Size from "../utilities/useResponsiveSize";
import colors from "../configs/colors";
import AppText from "./AppText";

interface Props {
  title: string;
  isAvailable: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}
const AvailableCard = ({
  title,
  isAvailable,
  textStyle,
  style,
}: Props): JSX.Element => {
  return (
    <View
      style={[
        styles.availContainer,
        !isAvailable && {
          backgroundColor: undefined,
          borderColor: colors.RED200,
        },
        style,
      ]}
    >
      {isAvailable ? (
        <AppText style={[styles.availText, textStyle]}>{title}</AppText>
      ) : (
        <AppText style={[styles.notAvailText, textStyle]}>
          Not available
        </AppText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  availContainer: {
    paddingHorizontal: Size.calcWidth(10),
    paddingVertical: Size.calcHeight(5),
    borderRadius: Size.calcAverage(5),
    borderWidth: Size.calcAverage(1.5),
    borderColor: colors.BLUE300,
    backgroundColor: colors.BLUE300,
  },
  availText: {
    fontSize: Size.calcAverage(12),
  },
  notAvailText: {
    fontSize: Size.calcAverage(12),
    color: colors.RED200,
  },
});

export default AvailableCard;
