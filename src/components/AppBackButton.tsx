import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import Size from "../utilities/useResponsiveSize";
import colors from "../configs/colors";
import AppText from "./AppText";

interface Props {
  title?: string;
}
const AppBackButton = ({ title }: Props): JSX.Element => {
  const { canGoBack, goBack } = useNavigation();
  return (
    <View style={styles.main}>
      <Pressable
        onPress={() => canGoBack() && goBack()}
        hitSlop={Size.calcAverage(5)}
        style={styles.container}
      >
        <Ionicons
          name="ios-arrow-back-circle-outline"
          size={24}
          color={colors.BLACK100}
        />
      </Pressable>
      {!!title && <AppText style={{ fontWeight: "500" }}>{title}</AppText>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BLUE300,
    alignSelf: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: Size.calcAverage(5),
    borderRadius: Size.calcAverage(10),
    elevation: 5,
    borderWidth: Size.calcAverage(1.5),
    borderColor: colors.WHITE200,
  },
  main: {
    gap: Size.calcAverage(20),
    flexDirection: "row",
    alignItems: "center",
  },
});

export default AppBackButton;
