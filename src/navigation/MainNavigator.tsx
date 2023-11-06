import Toast from "react-native-toast-message";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AuthNavigator from "./AuthNavigator";
import { usePatientPersistStore } from "../stores/patient.store";
import { useStore } from "zustand";
import { PatientHomeNavigator } from "./PatientHomeNavigator";

const queryClient = new QueryClient();

const MainNavigator = (): JSX.Element => {
  const { isLoggedIn } = useStore(usePatientPersistStore);

  return (
    <QueryClientProvider client={queryClient}>
      {isLoggedIn() ? <PatientHomeNavigator /> : <AuthNavigator />}
      <Toast />
    </QueryClientProvider>
  );
};

export default MainNavigator;
