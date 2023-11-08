import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PendingScreen from "../screens/patient/bookings/PendingScreen";
import CancelledScreen from "../screens/patient/bookings/CancelledScreen";
import CompletedScreen from "../screens/patient/bookings/CompletedScreen";
import routes from "./routes";
import { SafeAreaView } from "react-native";
import { GET_DEFAULT_PADDING } from "../components/AppScreen";

const Tab = createMaterialTopTabNavigator();

export function DoctorBookingNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.DOCTOR_PENDING_BOOKING_SCREEN}
        component={PendingScreen}
        options={{ title: "Pending" }}
      />
      <Tab.Screen
        name={routes.DOCTOR_COMPLETED_BOOKING_SCREEN}
        component={CompletedScreen}
        options={{ title: "Completed" }}
      />
      <Tab.Screen
        name={routes.DOCTOR_CANCELLED_BOOKING_SCREEN}
        component={CancelledScreen}
        options={{ title: "Cancelled" }}
      />
    </Tab.Navigator>
  );
}
