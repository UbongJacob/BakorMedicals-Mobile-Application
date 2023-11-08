import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PendingScreen from "../screens/patient/bookings/PendingScreen";
import CancelledScreen from "../screens/patient/bookings/CancelledScreen";
import CompletedScreen from "../screens/patient/bookings/CompletedScreen";
import routes from "./routes";
import { SafeAreaView } from "react-native";

const Tab = createMaterialTopTabNavigator();

export function PatientBookingNavigator() {
  return (
    <SafeAreaView style={[{ flex: 1 }]}>
      <Tab.Navigator>
        <Tab.Screen
          name={routes.PENDING_BOOKING_SCREEN}
          component={PendingScreen}
          options={{ title: "Pending" }}
        />
        <Tab.Screen
          name={routes.COMPLETED_BOOKING_SCREEN}
          component={CompletedScreen}
          options={{ title: "Completed" }}
        />
        <Tab.Screen
          name={routes.CANCELLED_BOOKING_SCREEN}
          component={CancelledScreen}
          options={{ title: "Cancelled" }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
