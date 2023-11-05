import { StyleSheet } from "react-native";
import BookingNotFound from "./components/BookingNotFound";
import AppScreen from "../../../components/AppScreen";

const CancelledScreen = (): JSX.Element => {
  return (
    <AppScreen style={styles.container}>
      <BookingNotFound
        title="No Canceled Bookings."
        description="There have been no canceled consultations yet."
      />
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CancelledScreen;
