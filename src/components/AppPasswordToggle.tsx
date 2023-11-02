import { Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Size from "../utilities/useResponsiveSize";
import colors from "../configs/colors";

interface Props {
  onPress: () => void;
  isShown: boolean;
}

const AppPasswordToggle = ({ isShown, onPress }: Props): JSX.Element => {
  return (
    <Pressable
      style={{
        alignItems: "center",
        justifyContent: "center",
        padding: Size.calcAverage(5),
        paddingRight: 0,
      }}
      hitSlop={Size.calcAverage(15)}
      onPress={onPress}
    >
      {isShown ? (
        <Ionicons
          color={colors.BLUE100}
          size={Size.calcAverage(24)}
          name="md-eye-outline"
        />
      ) : (
        <Ionicons
          color={colors.BLUE100}
          size={Size.calcAverage(24)}
          name="md-eye-off-outline"
        />
      )}
    </Pressable>
  );
};

export default AppPasswordToggle;
