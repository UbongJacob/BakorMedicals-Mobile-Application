import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import routes from "./routes";
import Size from "../utilities/useResponsiveSize";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import DoctorProfileScreen from "../screens/doctor/profile/DoctorProfileScreen";
import { DoctorBookingNavigator } from "./DoctorBookingNavigator";
import { SafeAreaView } from "react-native";

type DoctorHomeNavigatorParams = {
  [routes.DOCTOR_HOME_SCREEN]: undefined;
  [routes.DOCTOR_PROFILE_SCREEN]: undefined;
};

export type DoctorHomeParamsNavigator =
  BottomTabNavigationProp<DoctorHomeNavigatorParams>;

const Tab = createBottomTabNavigator<DoctorHomeNavigatorParams>();

export function DoctorHomeNavigator() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          name={routes.DOCTOR_HOME_SCREEN}
          options={{
            tabBarLabel: "Home",
            tabBarIcon(props) {
              return <Feather name="home" {...props} />;
            },
          }}
          component={DoctorBookingNavigator}
        />

        <Tab.Screen
          name={routes.DOCTOR_PROFILE_SCREEN}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon(props) {
              return <FontAwesome5 name="user-circle" {...props} />;
            },
          }}
          component={DoctorProfileScreen}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default DoctorHomeNavigator;
