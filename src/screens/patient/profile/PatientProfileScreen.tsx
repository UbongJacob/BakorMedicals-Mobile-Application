import { StyleSheet, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";

import AppScreen from "../../../components/AppScreen";
import colors from "../../../configs/colors";
import Size from "../../../utilities/useResponsiveSize";
import { AppForm, AppFormField, SubmitButton } from "../../../components/forms";
import fonts from "../../../configs/fonts";
import { emptyString } from "../../../assets/data/otherImportantData";
import { useState } from "react";
import AppText from "../../../components/AppText";
import { useStore } from "zustand";
import { usePatientPersistStore } from "../../../stores/patient.store";

const SigninSchema = Yup.object().shape({
  // email: Yup.string().email().required().trim().label('Email'),
  // password: Yup.string().required().min(8).max(100).label('Password').trim(),
});

const initialValues = {
  password: emptyString,
  email: emptyString,
};

const PatientProfileScreen = (): JSX.Element => {
  const [isEditable, setEditable] = useState(false);
  const { clearUserDetails } = useStore(usePatientPersistStore);

  const handleLogout = () => {
    clearUserDetails();
  };

  const handleSubmit = () => {};
  return (
    <AppScreen containerStyle={{ backgroundColor: colors.GRAY300 }}>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <AppForm
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={SigninSchema}
          >
            <AppFormField
              name="firstName"
              label="First name"
              placeholder="Enter first name"
              autoComplete="name-given"
              editable={isEditable}
            />
            <AppFormField
              name="lastName"
              label="Last name"
              placeholder="Enter last name"
              autoComplete="name-family"
              editable={isEditable}
            />
            <AppFormField
              name="email"
              label="Email"
              placeholder="Enter email address"
              autoComplete="email"
              keyboardType="email-address"
              editable={false}
            />

            {isEditable && (
              <SubmitButton
                // isLoading={loginReq.isLoading}
                isLoading={false}
                style={{ marginTop: Size.calcHeight(50) }}
                // isLoading={login.isLoading}
                title="Log In"
              />
            )}
          </AppForm>
        </View>
      </View>
      <TouchableOpacity onPress={handleLogout} style={styles.modalCloseButton}>
        <AppText style={styles.modalCloseText}>Logout</AppText>
      </TouchableOpacity>
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
  mainContainer: {
    flex: 1,
    justifyContent: "center",
  },

  modalCloseButton: {
    borderWidth: Size.calcAverage(1),
    borderColor: colors.RED200,
    borderRadius: Size.calcAverage(5),
    paddingVertical: Size.calcHeight(10),
    alignItems: "center",
    alignSelf: "center",
    width: "50%",
  },
  modalCloseText: {
    fontWeight: "600",
    fontSize: Size.calcAverage(16),
    color: colors.RED200,
  },
});

export default PatientProfileScreen;
