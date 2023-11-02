import { Text, TextProps } from "react-native";
import colors from "../configs/colors";
import Size from "../utilities/useResponsiveSize";
import fonts from "../configs/fonts";

const AppText = ({ children, style, ...otherProps }: TextProps) => {
  return (
    <Text
      style={[
        {
          fontSize: Size.calcWidth(16),
          fontFamily: fonts.OPENSANS_400,
          color: colors.BLUE100,
        },
        style,
      ]}
      {...otherProps}
    >
      {children}
    </Text>
  );
};

export default AppText;
