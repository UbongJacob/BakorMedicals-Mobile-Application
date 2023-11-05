import {
  View,
  Modal,
  StyleProp,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { PropsWithChildren } from "react";

import colors from "../configs/colors";
import Size from "../utilities/useResponsiveSize";
import AppText from "./AppText";

export interface AppModalProps extends PropsWithChildren {
  isVisible: boolean;
  style?: StyleProp<ViewStyle>;
  acceptText: string;
  onAcceptPress: () => void;
  onClosePress: () => void;
}

const AppModal = ({
  isVisible,
  children,
  style,
  acceptText,
  onAcceptPress,
  onClosePress,
}: AppModalProps): JSX.Element => {
  return (
    <Modal
      transparent
      onRequestClose={onClosePress}
      animationType="slide"
      visible={isVisible}
    >
      <Pressable
        onPress={onClosePress}
        style={[{ backgroundColor: colors.BLACK300, flex: 1 }, style]}
      >
        <View style={styles.modalContainer}>
          <Pressable
            style={{
              height: "75%",
              paddingTop: Size.calcHeight(20),
            }}
            onPress={(e) => e.stopPropagation()}
          >
            <Pressable style={styles.modalContent}>
              <View style={{ flex: 1 }}>{children}</View>
              <View style={styles.actionContainer}>
                <TouchableOpacity
                  onPress={onClosePress}
                  style={styles.modalCloseButton}
                >
                  <AppText style={styles.modalCloseText}>Close</AppText>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={onAcceptPress}
                  style={styles.modalAcceptButton}
                >
                  <AppText style={styles.modalAcceptText}>{acceptText}</AppText>
                </TouchableOpacity>
              </View>
            </Pressable>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: colors.WHITE100,
    height: "100%",
    borderTopRightRadius: Size.calcAverage(30),
    borderTopLeftRadius: Size.calcAverage(30),
    paddingHorizontal: Size.calcAverage(15),
    paddingTop: Size.calcHeight(20),
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalCloseButton: {
    borderWidth: Size.calcAverage(1),
    borderColor: colors.RED200,
    borderRadius: Size.calcAverage(5),
    paddingVertical: Size.calcHeight(10),
    alignItems: "center",
    width: "30%",
  },
  modalCloseText: {
    fontWeight: "600",
    fontSize: Size.calcAverage(16),
    color: colors.RED200,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.WHITE100,
    paddingVertical: Size.calcHeight(10),
  },
  modalAcceptButton: {
    borderWidth: Size.calcAverage(1),
    borderColor: colors.BLUE100,
    borderRadius: Size.calcAverage(5),
    paddingVertical: Size.calcHeight(10),
    alignItems: "center",
    width: "55%",
    backgroundColor: colors.BLUE100,
  },
  modalAcceptText: {
    fontWeight: "600",
    fontSize: Size.calcAverage(16),
    color: colors.WHITE100,
  },
});

export default AppModal;
