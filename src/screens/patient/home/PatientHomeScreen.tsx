import { ScrollView } from "react-native";
import AppScreen from "../../../components/AppScreen";
import colors from "../../../configs/colors";
import DoctorsList from "./DoctorsList";
import DoctorsSearch from "./DoctorsSearch";
import Header from "./Header";
import ScheduledMeetings from "./ScheduledMeetings";
import { useQuery } from "@tanstack/react-query";
import {
  getAllDoctors,
  getAllDoctorsQueryName,
} from "../../../api/doctor/doctor.api";
import appToastMessage from "../../../utilities/appToastMessage";
import { useStore } from "zustand";
import { usePatientPersistStore } from "../../../stores/patient.store";

const PatientHomeScreen = (): JSX.Element => {
  const { setAllDoctorsResponse } = useStore(usePatientPersistStore);
  useQuery({
    queryKey: [getAllDoctorsQueryName],
    queryFn: async () => {
      const response = await getAllDoctors();
      if (response.ok && response.data) {
        setAllDoctorsResponse(response.data);
      } else {
        appToastMessage.info(response.problem ?? response.data?.message ?? "");
      }
      return response;
    },
  });

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
