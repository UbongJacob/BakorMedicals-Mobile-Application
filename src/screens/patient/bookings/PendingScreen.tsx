import { StyleSheet } from "react-native";
import AppScreen from "../../../components/AppScreen";
import BookingNotFound from "./components/BookingNotFound";

const PendingScreen = (): JSX.Element => {
  return (
    <AppScreen isWhiteContent style={styles.container}>
      <BookingNotFound
        title="No Upcoming Bookings."
        description="There have been no booked consultations yet."
      />
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default PendingScreen;
