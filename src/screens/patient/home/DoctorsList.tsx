import { View, StyleSheet } from "react-native";
import Size from "../../../utilities/useResponsiveSize";
import AppText from "../../../components/AppText";
import DoctorsCard from "../../../components/DoctorsCard";
import { useNavigation } from "@react-navigation/native";
import { HomeStackParamsNavigator } from "../../../navigation/StackNavigators";
import routes from "../../../navigation/routes";
import colors from "../../../configs/colors";
import AppButton2 from "../../../components/AppButton2";
import { useStore } from "zustand";
import { usePatientPersistStore } from "../../../stores/patient.store";

const DoctorsList = (): JSX.Element => {
  const navigation = useNavigation<HomeStackParamsNavigator>();

  const { allDoctorsResponse } = useStore(usePatientPersistStore);
  const firstFiveItems = allDoctorsResponse?.data.slice(0, 5);
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

      {firstFiveItems?.map((value, index) => (
        <View style={{ paddingVertical: Size.calcHeight(10) }} key={index}>
          <DoctorsCard
            firstName={value.firstName}
            lastName={value.lastName}
            id={value.id}
            occupation="General Practioner"
            isAvailable={value.isAvailable}
            imageURL={value.imageURL ?? undefined}
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
