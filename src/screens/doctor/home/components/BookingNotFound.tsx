import { View, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

import Size from "../../../../utilities/useResponsiveSize";
import colors from "../../../../configs/colors";
import AppText from "../../../../components/AppText";

interface Props {
  title: string;
  description: string;
}

const BookingNotFound = ({ description, title }: Props): JSX.Element => {
  return (
    <View style={style.container}>
      <Entypo
        name="open-book"
        size={Size.calcAverage(150)}
        color={colors.BLUE300}
      />

      <AppText style={style.title}>{title}</AppText>
      <AppText style={{ textAlign: "center" }}>{description}</AppText>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "700",
    marginTop: Size.calcHeight(15),
    marginBottom: Size.calcHeight(30),
    textAlign: "center",
  },
});

export default BookingNotFound;
