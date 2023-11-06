import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import colors from "../../../configs/colors";
import URLS from "../../../assets/data/URLS";
import Size from "../../../utilities/useResponsiveSize";
import AppText from "../../../components/AppText";
import AvailableCard from "../../../components/AvailableCard";
import { HomeStackParamsNavigator } from "../../../navigation/StackNavigators";
import routes from "../../../navigation/routes";

interface Props {
  firstName: string;
  lastName: string;
  specialty: string;
  isAvailable: boolean;
  imageURL?: string;
  id: string;
}

const DoctorsCard = ({
  firstName,
  lastName,
  specialty,
  isAvailable,
  imageURL,
  id,
}: Props): JSX.Element => {
  const navigation = useNavigation<HomeStackParamsNavigator>();

  const handlePress = () => {
    navigation.navigate(routes.DOCTOR_DETAILS_SCREEN, {
      DOCTOR_DETAILS: { id },
    });
  };

  return (
    <View style={{ flex: 1, padding: Size.calcAverage(4) }}>
      <TouchableOpacity onPress={handlePress} style={styles.container}>
        <ImageBackground
          style={styles.imageContainer}
          source={{ uri: imageURL ?? URLS.manAvatar3 }}
        >
          <View style={styles.content}>
            <AppText style={styles.name}>
              Dr. {firstName} {lastName}
            </AppText>
            <AppText style={styles.specialty}>{specialty}</AppText>
            <View
              style={{
                alignSelf: "center",
                paddingBottom: Size.calcHeight(10),
              }}
            >
              <AvailableCard
                style={{
                  paddingHorizontal: Size.calcWidth(5),
                  paddingVertical: Size.calcHeight(2),
                }}
                textStyle={{ fontSize: Size.calcWidth(8) }}
                isAvailable={isAvailable}
                title="Available"
              />
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE100,
    padding: Size.calcAverage(8),
    borderRadius: Size.calcAverage(15),
    flex: 1,
    aspectRatio: 1,
  },
  imageContainer: {
    padding: Size.calcAverage(1),
    flex: 1,
    borderRadius: Size.calcAverage(15),
    overflow: "hidden",
  },
  content: {
    backgroundColor: colors.BLACK100 + "66",
    flex: 1,
  },
  name: {
    fontSize: Size.calcWidth(12),
    color: colors.WHITE100,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: Size.calcHeight(10),
    paddingHorizontal: Size.calcWidth(5),
    marginTop: "auto",
  },
  specialty: {
    fontSize: Size.calcWidth(10),
    color: colors.WHITE100,
    fontWeight: "500",
    textAlign: "center",
    paddingHorizontal: Size.calcWidth(5),
  },
});

export default DoctorsCard;
