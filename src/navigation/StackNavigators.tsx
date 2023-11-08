import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { defaultNativeStackOptions } from "./defaultConfig";
import routes from "./routes";
import DoctorDetailsScreen from "../screens/patient/doctors/DoctorDetailsScreen";
import PatientHomeScreen from "../screens/patient/home/PatientHomeScreen";
import NotificationsScreen from "../screens/patient/notifications/NotificationsScreen";
import DoctorsListScreen from "../screens/patient/doctors/DoctorsListScreen";
import { RouteProp } from "@react-navigation/native";
//  DEFAULT EXAMPLE THAT CAN BE USED TO CREATE NEW STACK NAVIGATOR

// NAME NAVIGATOR

// type nameNavigatorParams = {
//   [routes.SCREEN]: undefined;
// };

// export type nameParamsNavigator =
//   NativeStackNavigationProp<nameNavigatorParams>;

// const nameStack = createNativeStackNavigator<nameNavigatorParams>();

// export const nameNavigator = () => {
//   return (
//     <nameStack.Navigator screenOptions={{...defaultNativeStackOptions}}>
//       <nameStack.Screen/>
//     </nameStack.Navigator>
//   );
// };

// PROFILE NAVIGATOR

// HOME STACK NAVIGATOR

interface DoctorDetails {
  id: string;
}

type HomeStackNavigatorParams = {
  [routes.PATIENT_HOME_SCREEN]: undefined;
  [routes.NOTIFICATIONS_SCREEN]: undefined;
  [routes.DOCTORS_LIST_SCREEN]: undefined;
  [routes.DOCTOR_DETAILS_SCREEN]: {
    DOCTOR_DETAILS: DoctorDetails;
  };
};

export type HomeStackParamsNavigator =
  NativeStackNavigationProp<HomeStackNavigatorParams>;

export type DoctorDetailsScreenProps = RouteProp<
  HomeStackNavigatorParams,
  "DoctorDetailsScreen"
>;

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParams>();

export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{ ...defaultNativeStackOptions }}>
      <HomeStack.Screen
        name={routes.PATIENT_HOME_SCREEN}
        component={PatientHomeScreen}
      />
      <HomeStack.Screen
        name={routes.DOCTOR_DETAILS_SCREEN}
        component={DoctorDetailsScreen}
      />
      <HomeStack.Screen
        name={routes.NOTIFICATIONS_SCREEN}
        component={NotificationsScreen}
      />
      <HomeStack.Screen
        name={routes.DOCTORS_LIST_SCREEN}
        component={DoctorsListScreen}
      />
    </HomeStack.Navigator>
  );
};

// PROFILE NAVIGATOR
