import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import * as Yup from "yup";

import AppScreen from "../../../components/AppScreen";
import colors from "../../../configs/colors";
import fonts from "../../../configs/fonts";
import Size from "../../../utilities/useResponsiveSize";
import { useNavigation } from "@react-navigation/native";
import { AuthParamsNavigator } from "../../../navigation/AuthNavigator";
import { useState } from "react";
import { emptyString } from "../../../assets/data/otherImportantData";
import { LoginRequest, RegisterRequest } from "../../../types/api";
import { AppForm, AppFormField, SubmitButton } from "../../../components/forms";
import AppText from "../../../components/AppText";
import routes from "../../../navigation/routes";
import AppPasswordToggle from "../../../components/AppPasswordToggle";
import BakorLogo from "../../../assets/images/bakor-medicals-logo.png";
import { patientLogIn, patientRegister } from "../../../api/patient/auth.api";
import { useMutation } from "@tanstack/react-query";
import { FormikHelpers } from "formik";
import {
  formatResponseError,
  formatResponseMessage,
} from "../../../utilities/handleResponse";
import appToastMessage from "../../../utilities/appToastMessage";
import { AppTokenName } from "../../../configs/data";
import { useStore } from "zustand";
import { usePatientPersistStore } from "../../../stores/patient.store";
import AppBackButton from "../../../components/AppBackButton";

const SigninSchema = Yup.object().shape({
  firstName: Yup.string().min(3).max(200).label("First Name"),
  lastName: Yup.string().min(3).max(200).label("Last Name"),
  email: Yup.string().email().min(3).max(200).label("Email"),
  password: Yup.string().min(5).max(200).label("Password"),
  phoneNumber: Yup.string().min(3).max(200).label("Phone number"),
});

const initialValues: LoginRequest = {
  password: emptyString,
  email: emptyString,
};

const SignupScreen = (): JSX.Element => {
  const navigation = useNavigation<AuthParamsNavigator>();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { setAuthToken, setUserDetails } = useStore(usePatientPersistStore);

  const registerReq = useMutation({ mutationFn: patientRegister });

  const handleSubmit = async (
    { email, password, firstName, lastName, phoneNumber }: RegisterRequest,
    { resetForm }: FormikHelpers<LoginRequest>
  ) => {
    try {
      // @ts-ignore
      const response = await registerReq.mutateAsync({
        email: email.trim().toLowerCase(),
        password: password.trim(),
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        phoneNumber: phoneNumber.trim(),
      });

      if (response.ok) {
        appToastMessage.success(
          formatResponseMessage(response, "Login Successful")
        );
        setUserDetails(response.data);
        // navigation.reset({
        //   index: 1,
        //   routes: [{ name: routes.PATIENT_HOME_NAVIGATOR }],
        // });
        if (!response.headers?.[AppTokenName])
          return appToastMessage.error("Could not get auth token.");
        else setAuthToken(response.headers[AppTokenName]);

        resetForm();
      } else {
        appToastMessage.error(formatResponseError(response));
      }
    } catch (error) {
      console.log({ error });
      appToastMessage.info(JSON.stringify(error));
    }
  };

  return (
    <AppScreen scrollable>
      <ScrollView style={{ paddingBottom: Size.calcHeight(350) }}>
        <AppBackButton />
        <Image style={styles.image} source={BakorLogo} />
        <View style={styles.container}>
          <AppText style={styles.patientLogin}>Patient Register</AppText>

          <AppForm
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={SigninSchema}
          >
            <AppFormField
              name="firstName"
              label="First Name"
              placeholder="Enter your first name."
              autoComplete="name-given"
              keyboardType="default"
            />
            <AppFormField
              name="lastName"
              label="Last Name"
              placeholder="Enter your last name."
              autoComplete="name-family"
              keyboardType="default"
            />
            <AppFormField
              name="email"
              label="Email"
              placeholder="Enter email address"
              autoComplete="email"
              keyboardType="email-address"
            />
            <AppFormField
              name="phoneNumber"
              label="Phone number"
              placeholder="080********"
              autoComplete="name-family"
              keyboardType="numeric"
              maxLength={11}
            />
            <AppFormField
              name="password"
              placeholder="Enter password"
              autoComplete="password"
              label="Password"
              secureTextEntry={!isPasswordVisible}
              rightIcon={
                <AppPasswordToggle
                  isShown={isPasswordVisible}
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                />
              }
            />

            <View style={styles.actionContainer}>
              <Pressable
                onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}
                hitSlop={Size.calcAverage(10)}
              >
                <AppText style={styles.actionText}>
                  Already have an account?
                </AppText>
                <AppText style={styles.actionTextBold}>Login</AppText>
              </Pressable>

              {/* <Pressable
              onPress={() => navigation.navigate(routes.FORGOT_PASSWORD_SCREEN)}
              hitSlop={Size.calcAverage(10)}>
              <AppText style={styles.actionText}>Forgot Password?</AppText>
            </Pressable> */}
            </View>

            <SubmitButton
              isLoading={registerReq.status === "pending"}
              style={{ marginTop: Size.calcHeight(50) }}
              // isLoading={login.isLoading}
              title="Register"
            />
          </AppForm>
        </View>
      </ScrollView>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actionText: {
    fontFamily: fonts.OPENSANS_600,
    fontSize: Size.calcWidth(13),
  },
  actionTextBold: {
    fontFamily: fonts.MONTSERRAT_700,
    fontSize: Size.calcWidth(15),
  },
  container: {
    paddingHorizontal: Size.calcWidth(18),
    paddingVertical: Size.calcHeight(44),
    marginBottom: Size.calcHeight(47),
    backgroundColor: colors.BLUE500,
    borderRadius: Size.calcAverage(20),
  },
  center: {
    flexDirection: "row",
    alignItems: "center",
  },
  googleText: {
    marginLeft: Size.calcWidth(10),
    fontFamily: fonts.MONTSERRAT_500,
    fontSize: Size.calcWidth(15),
    color: colors.BLACK100,
  },
  line: {
    height: Size.calcHeight(1.5),
    flex: 1,
    backgroundColor: colors.BLACK200,
  },
  lineContainer: {
    marginTop: Size.calcHeight(29),
    marginBottom: Size.calcHeight(34),
  },
  lineText: {
    marginHorizontal: Size.calcWidth(18),
    fontFamily: fonts.OPENSANS_600,
    fontSize: Size.calcWidth(15),
  },
  patientLogin: {
    fontSize: Size.calcWidth(35),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: Size.calcHeight(40),
  },
  image: {
    height: Size.calcHeight(80),
    aspectRatio: 1,
    alignSelf: "center",
    marginTop: Size.calcHeight(5),
    marginBottom: Size.calcHeight(20),
  },
});

export default SignupScreen;
