import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

import Size from "../utilities/useResponsiveSize";
import AppText from "./AppText";
import URLS from "../assets/data/URLS";
import colors from "../configs/colors";
import { useNavigation } from "@react-navigation/native";
import { HomeStackParamsNavigator } from "../navigation/StackNavigators";
import routes from "../navigation/routes";

interface Props {
  name: string;
  occupation: string;
  isAvailable: boolean;
}

const DoctorsCard = ({ name, occupation, isAvailable }: Props): JSX.Element => {
  const navigation = useNavigation<HomeStackParamsNavigator>();

  const handlePress = () => {
    navigation.navigate(routes.DOCTOR_DETAILS_SCREEN, {
      DOCTOR_DETAILS: { id: "" },
    });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.doctorCard}>
      <Image style={styles.image} source={{ uri: URLS.manAvatar }} />
      <View
        style={{
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <AppText style={{ fontWeight: "bold" }}>{name}</AppText>
        <AppText style={styles.occupation}>{occupation}</AppText>

        {isAvailable ? (
          <AppText style={styles.time}>Avalilable</AppText>
        ) : (
          <AppText style={styles.time2}>Not avalilable</AppText>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  occupation: {
    fontSize: Size.calcAverage(12),
    marginVertical: Size.calcHeight(10),
  },
  time: {
    fontSize: Size.calcAverage(12),
    fontWeight: "bold",
    textAlign: "right",
    marginRight: Size.calcWidth(5),
  },
  time2: {
    fontSize: Size.calcAverage(12),
    fontWeight: "bold",
    textAlign: "right",
    marginRight: Size.calcWidth(5),
    color: colors.RED100,
  },
  doctorCard: {
    flexDirection: "row",
    backgroundColor: colors.WHITE100,
    borderRadius: Size.calcAverage(16),
    padding: Size.calcAverage(7),
    alignItems: "center",
  },
  image: {
    height: Size.calcHeight(70),
    aspectRatio: 1,
    borderRadius: Size.calcAverage(10),
    marginRight: Size.calcWidth(10),
  },
});

export default DoctorsCard;
