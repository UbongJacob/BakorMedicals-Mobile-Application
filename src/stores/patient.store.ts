import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PatienceLoginResponse } from "../types/api/patient/auth.types";
import {
  DoctorLoginResponse,
  GetAllDoctorsResponse,
} from "../types/api/patient/doctor.type";

type PatientPersistStoreState = {
  patientDetails?: PatienceLoginResponse;
  authToken?: string;
  doctorsToken?: string;
  allDoctorsResponse?: GetAllDoctorsResponse;
  doctorsLoginResponse?: DoctorLoginResponse;
};
interface PatientPersistStore extends PatientPersistStoreState {
  setUserDetails: (userDetails?: PatienceLoginResponse) => void;
  deleteUserDetails: () => void;
  setAuthToken: (value: string) => void;
  clearUserDetails: () => void;
  isLoggedIn: () => boolean;
  isDoctorLoggedIn: () => boolean;
  setAllDoctorsResponse: (value: GetAllDoctorsResponse) => void;
  setDoctorsLoginResponse: (value: DoctorLoginResponse) => void;
  setDoctorsToken: (value: string) => void;
}

interface MKKVZustandState<T> {
  state: T;
  version: number;
}

export type UserPersistStoreStateType =
  MKKVZustandState<PatientPersistStoreState>;

export const patientPersistStoreName = "patient-persist-storage";

export const usePatientPersistStore = create<
  PatientPersistStore,
  [["zustand/persist", PatientPersistStore]]
>(
  persist(
    (set, get) => ({
      // DEFAULT DATA
      isOnboarded: false,
      patientDetails: undefined,
      authToken: undefined,
      allDoctorsResponse: undefined,
      doctorsLoginResponse: undefined,
      doctorsToken: undefined,

      //   ACTIONS OR MUTATORS
      deleteUserDetails: () => set({ patientDetails: undefined }),

      setUserDetails: (patientDetails) => set({ patientDetails }),

      setAuthToken: (authToken) => set({ authToken }),

      setDoctorsLoginResponse: (doctorsLoginResponse) =>
        set({ doctorsLoginResponse }),

      setDoctorsToken: (doctorsToken) => set({ doctorsToken }),

      clearUserDetails: () =>
        set({
          authToken: undefined,
          setUserDetails: undefined,
          doctorsToken: undefined,
          doctorsLoginResponse: undefined,
        }),

      isLoggedIn: () => !!get().authToken,
      isDoctorLoggedIn: () => !!get().doctorsToken,

      setAllDoctorsResponse: (allDoctorsResponse) =>
        set({ allDoctorsResponse }),
    }),

    {
      name: patientPersistStoreName,
      // storage: {
      //   setItem: async (name, value) => {
      //     try {
      //       return await AsyncStorage.setItem(name, JSON.stringify(value));
      //     } catch (e) {
      //       console.log("Saving error", e);
      //     }
      //   },
      //   getItem: async (name) => {
      //     try {
      //       const jsonValue = await AsyncStorage.getItem(name);
      //       return jsonValue != null ? JSON.parse(jsonValue) : null;
      //     } catch (e) {
      //       console.log("error reading value", e);
      //     }
      //   },
      //   removeItem: async (name) => {
      //     try {
      //       await AsyncStorage.removeItem("@MyApp_key");
      //     } catch (e) {
      //       console.log("remove error", e);
      //     }
      //   },
      // },
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
