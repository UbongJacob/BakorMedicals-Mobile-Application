import Toast from "react-native-toast-message";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AuthNavigator from "./AuthNavigator";
import { usePatientPersistStore } from "../stores/patient.store";
import { useStore } from "zustand";
import { PatientHomeNavigator } from "./PatientHomeNavigator";
import DoctorHomeNavigator from "./DoctorHomeNavigator";

const queryClient = new QueryClient();

const MainNavigator = (): JSX.Element => {
  const { isLoggedIn, isDoctorLoggedIn } = useStore(usePatientPersistStore);

  return (
    <QueryClientProvider client={queryClient}>
      {isLoggedIn() ? (
        <PatientHomeNavigator />
      ) : isDoctorLoggedIn() ? (
        <DoctorHomeNavigator />
      ) : (
        <AuthNavigator />
      )}
      <Toast />
    </QueryClientProvider>
  );
};

export default MainNavigator;
