import { StyleSheet } from "react-native";
import AppScreen from "../../../components/AppScreen";
import AppText from "../../../components/AppText";

const DoctorLoginScreen = (): JSX.Element => {
  return (
    <AppScreen style={style.container}>
      <AppText>DoctorLoginScreen</AppText>
    </AppScreen>
  );
};

const style = StyleSheet.create({
  container: {},
});

export default DoctorLoginScreen;
