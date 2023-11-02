import { StyleSheet, Text } from "react-native";
import AppScreen from "../../../components/AppScreen";

const SignupScreen = (): JSX.Element => {
  return (
    <AppScreen style={style.container}>
      <Text>Signup</Text>
    </AppScreen>
  );
};

const style = StyleSheet.create({
  container: {},
});

export default SignupScreen;
