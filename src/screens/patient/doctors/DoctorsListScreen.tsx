import { StyleSheet, Text } from "react-native";
import AppScreen from "../../../components/AppScreen";
import AppBackButton from "../../../components/AppBackButton";
import DoctorsSearch from "../home/DoctorsSearch";

const DoctorsListScreen = (): JSX.Element => {
  return (
    <AppScreen style={styles.container}>
      <AppBackButton />

      <DoctorsSearch isFilter />
      <Text>DoctorsListScreen</Text>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default DoctorsListScreen;
