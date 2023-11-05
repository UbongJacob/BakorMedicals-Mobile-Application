import { Image, Pressable, StyleSheet, View } from "react-native";
import AppText from "../../../components/AppText";
import URLS from "../../../assets/data/URLS";
import { Ionicons } from "@expo/vector-icons";
import Size from "../../../utilities/useResponsiveSize";
import colors from "../../../configs/colors";
import { greetUser } from "../../../utilities/timeHelpers";
import { useNavigation } from "@react-navigation/native";
import { HomeStackParamsNavigator } from "../../../navigation/StackNavigators";
import routes from "../../../navigation/routes";
import { PatientHomeParamsNavigator } from "../../../navigation/PatientHomeNavigator";

const Header = (): JSX.Element => {
  const navigation = useNavigation<HomeStackParamsNavigator>();
  const navigation2 = useNavigation<PatientHomeParamsNavigator>();

  return (
    <View style={{ ...styles.container }}>
      <Pressable
        onPress={() => navigation2.navigate(routes.PATIENT_PROFILE_SCREEN)}
        style={styles.header}
      >
        <Image style={styles.image} source={{ uri: URLS.manAvatar }} />
        <View>
          <AppText>{greetUser()}</AppText>
          <AppText style={styles.name}>Ubong</AppText>
        </View>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate(routes.NOTIFICATIONS_SCREEN)}
      >
        <Ionicons
          name="md-notifications-circle-outline"
          size={Size.calcAverage(30)}
          color={colors.BLACK100}
        />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingBottom: Size.calcHeight(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    height: Size.calcAverage(50),
    aspectRatio: 1,
    borderRadius: Size.calcAverage(50 / 2),
    marginRight: Size.calcWidth(10),
  },
  name: {
    fontWeight: "600",
    fontSize: Size.calcAverage(18),
  },
});

export default Header;
