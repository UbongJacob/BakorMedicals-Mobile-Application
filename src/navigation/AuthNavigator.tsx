import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import routes from "./routes";
import { defaultNativeStackOptions } from "./defaultConfig";
import LoginScreen from "../screens/patient/authentication/LoginScreen";
import SignupScreen from "../screens/patient/authentication/SignupScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import DoctorLoginScreen from "../screens/doctor/auth/DoctorLoginScreen";
import { PatientHomeNavigator } from "./PatientHomeNavigator";
import DoctorRegisterScreen from "../screens/doctor/auth/DoctorRegisterScreen";

type AuthNavigatorParams = {
  [routes.LOGIN_SCREEN]: undefined;
  [routes.SIGNUP_SCREEN]: undefined;
  [routes.ONBOARDING_SCREEN]: undefined;
  [routes.DOCTOR_LOGIN_SCREEN]: undefined;
  [routes.DOCTOR_REGISTER_SCREEN]: undefined;
  [routes.PATIENT_HOME_NAVIGATOR]: undefined;
};

export type AuthParamsNavigator =
  NativeStackNavigationProp<AuthNavigatorParams>;

const Stack = createNativeStackNavigator<AuthNavigatorParams>();

const AuthNavigator = (): JSX.Element => {
  return (
    <Stack.Navigator screenOptions={defaultNativeStackOptions}>
      <Stack.Screen
        name={routes.ONBOARDING_SCREEN}
        component={OnboardingScreen}
      />
      <Stack.Screen name={routes.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen
        name={routes.DOCTOR_LOGIN_SCREEN}
        component={DoctorLoginScreen}
      />
      <Stack.Screen
        name={routes.DOCTOR_REGISTER_SCREEN}
        component={DoctorRegisterScreen}
      />
      <Stack.Screen name={routes.SIGNUP_SCREEN} component={SignupScreen} />

      <Stack.Screen
        name={routes.PATIENT_HOME_NAVIGATOR}
        component={PatientHomeNavigator}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
