import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import routes from "./routes";
import PatientProfileScreen from "../screens/patient/profile/PatientProfileScreen";
import Size from "../utilities/useResponsiveSize";
import { HomeStackNavigator } from "./StackNavigators";
import { Feather, FontAwesome5, Entypo } from "@expo/vector-icons";
import { PatientBookingNavigator } from "./PatientBookingNavigator";

type PatientHomeNavigatorParams = {
  [routes.PATIENT_HOME_STACK_NAVIGATOR]: undefined;
  [routes.PATIENT_BOOKING_NAVIGATOR]: undefined;
  [routes.PATIENT_PROFILE_SCREEN]: undefined;
};

export type PatientHomeParamsNavigator =
  BottomTabNavigationProp<PatientHomeNavigatorParams>;

const Tab = createBottomTabNavigator<PatientHomeNavigatorParams>();

export function PatientHomeNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: Size.calcAverage(16),
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name={routes.PATIENT_HOME_STACK_NAVIGATOR}
        options={{
          tabBarLabel: "Home",
          tabBarIcon(props) {
            return <Feather name="home" {...props} />;
          },
        }}
        component={HomeStackNavigator}
      />
      <Tab.Screen
        name={routes.PATIENT_BOOKING_NAVIGATOR}
        options={{
          tabBarLabel: "Bookings",
          tabBarIcon(props) {
            return <Entypo name="open-book" {...props} />;
          },
        }}
        component={PatientBookingNavigator}
      />
      <Tab.Screen
        name={routes.PATIENT_PROFILE_SCREEN}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon(props) {
            return <FontAwesome5 name="user-circle" {...props} />;
          },
        }}
        component={PatientProfileScreen}
      />
    </Tab.Navigator>
  );
}
