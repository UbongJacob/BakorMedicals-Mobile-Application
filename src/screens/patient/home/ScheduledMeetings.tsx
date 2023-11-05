import { View, StyleSheet } from "react-native";
import AppText from "../../../components/AppText";
import Size from "../../../utilities/useResponsiveSize";
import colors from "../../../configs/colors";
import AppButton2 from "../../../components/AppButton2";
import { useNavigation } from "@react-navigation/native";
import routes from "../../../navigation/routes";
import { PatientHomeParamsNavigator } from "../../../navigation/PatientHomeNavigator";

const ScheduledMeetings = (): JSX.Element => {
  const navigation = useNavigation<PatientHomeParamsNavigator>();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppText style={styles.title}>Scheduled meetings</AppText>

        <AppButton2
          onPress={() => navigation.navigate(routes.PATIENT_BOOKING_NAVIGATOR)}
        >
          <AppText style={{ color: colors.WHITE100, fontWeight: "500" }}>
            View all
          </AppText>
        </AppButton2>
      </View>

      <View>
        <View style={styles.noBookingsContainer}>
          <AppText style={styles.noBookings}>No Upcoming Bookings</AppText>
        </View>
      </View>
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
  },
  title: {
    fontWeight: "600",
    fontSize: Size.calcAverage(16),
  },
  noBookings: {
    fontWeight: "600",
  },
  noBookingsContainer: {
    paddingVertical: Size.calcHeight(25),
    paddingHorizontal: Size.calcWidth(35),
    backgroundColor: colors.WHITE100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: Size.calcAverage(10),
    marginVertical: Size.calcHeight(25),
  },
});

export default ScheduledMeetings;
