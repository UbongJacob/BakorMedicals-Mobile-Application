import { StyleSheet, View } from "react-native";

import AppText from "../../../../components/AppText";
import Size from "../../../../utilities/useResponsiveSize";
import colors from "../../../../configs/colors";

interface Props {
  message: string;
}

const NotificationsCard = ({ message }: Props): JSX.Element => {
  return (
    <View style={styles.notifications}>
      <AppText>{message}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  notifications: {
    paddingVertical: Size.calcHeight(20),
    borderBottomWidth: Size.calcAverage(1),
    borderBottomColor: colors.GRAY200,
  },
});

export default NotificationsCard;
