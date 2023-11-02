import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { LoginResponse } from "../types/api/auth.type";

type UserPersistStoreState = {
  isOnboarded: boolean;
  userDetails?: LoginResponse;
};
interface UserPersistStore extends UserPersistStoreState {
  setIsOnboarded: (isOnboarded: boolean) => void;
  setUserDetails: (userDetails?: LoginResponse) => void;
  deleteUserDetails: () => void;
}

interface MKKVZustandState<T> {
  state: T;
  version: number;
}

export type UserPersistStoreStateType = MKKVZustandState<UserPersistStoreState>;

export const userPersistStoreName = "user-persist-storage";

export const useUserPersistStore = create<
  UserPersistStore,
  [["zustand/persist", UserPersistStore]]
>(
  persist(
    (set) => ({
      // DEFAULT DATA
      isOnboarded: false,
      userDetails: undefined,

      //   ACTIONS OR MUTATORS
      deleteUserDetails: () => set({ userDetails: undefined }),
      setIsOnboarded: (isOnboarded) => set({ isOnboarded }),
      setUserDetails: (userDetails) => set({ userDetails }),
    }),
    {
      name: userPersistStoreName,
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
