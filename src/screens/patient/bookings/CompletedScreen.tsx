import { StyleSheet } from "react-native";

import AppScreen from "../../../components/AppScreen";
import BookingNotFound from "./components/BookingNotFound";

const CompletedScreen = (): JSX.Element => {
  return (
    <AppScreen style={styles.container}>
      <BookingNotFound
        title="No Completed Bookings."
        description="There have been no completed consultations yet."
      />
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CompletedScreen;
