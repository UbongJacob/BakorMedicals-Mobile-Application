import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import colors from "../configs/colors";
import Size from "../utilities/useResponsiveSize";

const AppButton2 = (props: TouchableOpacityProps): JSX.Element => {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: Size.calcWidth(20),
        backgroundColor: colors.BLUE100,
        paddingVertical: Size.calcHeight(5),
        borderRadius: Size.calcAverage(10),
      }}
      {...props}
    />
  );
};

export default AppButton2;
