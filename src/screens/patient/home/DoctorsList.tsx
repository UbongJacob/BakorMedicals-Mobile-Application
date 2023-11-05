import { View, StyleSheet } from "react-native";
import Size from "../../../utilities/useResponsiveSize";
import AppText from "../../../components/AppText";
import DoctorsCard from "../../../components/DoctorsCard";
import { useNavigation } from "@react-navigation/native";
import { HomeStackParamsNavigator } from "../../../navigation/StackNavigators";
import routes from "../../../navigation/routes";
import colors from "../../../configs/colors";
import AppButton2 from "../../../components/AppButton2";

const DoctorsList = (): JSX.Element => {
  const navigation = useNavigation<HomeStackParamsNavigator>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText style={styles.title}>Let's find your doctor</AppText>

        <AppButton2
          onPress={() => navigation.navigate(routes.DOCTORS_LIST_SCREEN)}
        >
          <AppText style={{ color: colors.WHITE100, fontWeight: "500" }}>
            View all
          </AppText>
        </AppButton2>
      </View>

      {[...Array(5)].map((_, index) => (
        <View style={{ paddingVertical: Size.calcHeight(10) }} key={index}>
          <DoctorsCard
            name="Dr. Charles"
            occupation="General Practioner"
            isAvailable={index % 2 == 1}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: Size.calcHeight(25),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Size.calcHeight(25),
  },
  title: {
    fontWeight: "600",
    fontSize: Size.calcAverage(16),
  },
});

export default DoctorsList;
