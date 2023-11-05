import { ScrollView } from "react-native";
import AppScreen from "../../../components/AppScreen";
import colors from "../../../configs/colors";
import DoctorsList from "./DoctorsList";
import DoctorsSearch from "./DoctorsSearch";
import Header from "./Header";
import ScheduledMeetings from "./ScheduledMeetings";

const PatientHomeScreen = (): JSX.Element => {
  return (
    <AppScreen containerStyle={{ backgroundColor: colors.GRAY300 }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <DoctorsSearch />
        <ScheduledMeetings />
        <DoctorsList />
      </ScrollView>
    </AppScreen>
  );
};

export default PatientHomeScreen;
