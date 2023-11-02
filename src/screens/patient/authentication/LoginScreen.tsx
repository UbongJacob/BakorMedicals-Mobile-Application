import { Pressable, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import AppScreen from "../../../components/AppScreen";
import colors from "../../../configs/colors";
import fonts from "../../../configs/fonts";
import Size from "../../../utilities/useResponsiveSize";
import { useNavigation } from "@react-navigation/native";
import { AuthParamsNavigator } from "../../../navigation/AuthNavigator";
import { useState } from "react";
import { emptyString } from "../../../assets/data/otherImportantData";
import { LoginRequest } from "../../../types/api/auth.type";
import { AppForm, AppFormField, SubmitButton } from "../../../components/forms";
import AppText from "../../../components/AppText";
import routes from "../../../navigation/routes";
import AppPasswordToggle from "../../../components/AppPasswordToggle";

const SigninSchema = Yup.object().shape({
  // email: Yup.string().email().required().trim().label('Email'),
  // password: Yup.string().required().min(8).max(100).label('Password').trim(),
});

const initialValues: LoginRequest = {
  password: emptyString,
  email: emptyString,
};

const LoginScreen = (): JSX.Element => {
  const navigation = useNavigation<AuthParamsNavigator>();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  // const {setUserDetails} = useUserPersistStore();

  // const loginReq = useMutation(logIn);

  // const handleSubmit = async (
  //   {email, password}: LoginRequest,
  //   {resetForm}: FormikHelpers<LoginRequest>,
  // ) => {
  //   try {
  //     const response = await loginReq.mutateAsync({email, password});
  //     if (verifyResponse(response)) {
  //       appToastMessage.success(
  //         formatResponseMessage(response, 'Login Successful'),
  //       );

  //       setUserDetails(response.data);
  //       resetForm();
  //       navigation.replace(routes.ONBOARDING_NAVIGATOR);
  //     } else {
  //       appToastMessage.error(formatResponseError(response));
  //     }
  //   } catch (error) {
  //     appToastMessage.info(formatError(error));
  //   }
  // };

  const handleSubmit = () => {};
  return (
    <AppScreen scrollable>
      <View style={styles.container}>
        <View style={{ ...styles.center, ...styles.lineContainer }}>
          <View style={styles.line} />
          <AppText style={styles.lineText}>OR</AppText>
          <View style={styles.line} />
        </View>

        <AppForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={SigninSchema}
        >
          <AppFormField
            name="email"
            label="Email"
            placeholder="Enter email address"
            autoComplete="email"
            keyboardType="email-address"
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
              onPress={() => navigation.navigate(routes.SIGNUP_SCREEN)}
              hitSlop={Size.calcAverage(10)}
            >
              <AppText style={styles.actionText}>Dont have an account?</AppText>
              <AppText style={styles.actionTextBold}>Sign Up</AppText>
            </Pressable>

            {/* <Pressable
              onPress={() => navigation.navigate(routes.FORGOT_PASSWORD_SCREEN)}
              hitSlop={Size.calcAverage(10)}>
              <AppText style={styles.actionText}>Forgot Password?</AppText>
            </Pressable> */}
          </View>

          <SubmitButton
            // isLoading={loginReq.isLoading}
            isLoading={true}
            style={{ marginTop: Size.calcHeight(50) }}
            // isLoading={login.isLoading}
            title="Log In"
          />
        </AppForm>
      </View>
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
    marginVertical: Size.calcHeight(47),
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
});

export default LoginScreen;
