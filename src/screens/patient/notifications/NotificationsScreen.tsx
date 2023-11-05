import { View, StyleSheet, FlatList } from "react-native";
import { Entypo } from "@expo/vector-icons";

import AppScreen from "../../../components/AppScreen";
import AppBackButton from "../../../components/AppBackButton";
import AppText from "../../../components/AppText";
import Size from "../../../utilities/useResponsiveSize";
import notifications from "../../../assets/data/notifications";
import NotificationsCard from "./components/NotificationsCard";
import colors from "../../../configs/colors";

const NotificationsScreen = (): JSX.Element => {
  return (
    <AppScreen>
      <AppBackButton title="Notifications" />

      {true ? (
        <View style={styles.container}>
          <Entypo
            name="notifications-off"
            size={Size.calcAverage(100)}
            color={colors.GRAY100}
          />
          <AppText>No Notifications. </AppText>
        </View>
      ) : (
        <FlatList
          data={notifications}
          renderItem={({ index, item }) => {
            return <NotificationsCard key={index} message={item} />;
          }}
        />
      )}
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: Size.calcAverage(20),
  },
});

export default NotificationsScreen;
