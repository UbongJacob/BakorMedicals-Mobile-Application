import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import AppScreen from "../../../components/AppScreen";
import colors from "../../../configs/colors";
import AppText from "../../../components/AppText";
import URLS from "../../../assets/data/URLS";
import { useStore } from "zustand";
import { usePatientPersistStore } from "../../../stores/patient.store";
import Size from "../../../utilities/useResponsiveSize";
import AppButton2 from "../../../components/AppButton2";
import { useState } from "react";
import AppModal from "../../../components/AppModal";
import EditProfileModal from "./EditProfileModal";

const DoctorProfileScreen = (): JSX.Element => {
  const { doctorsLoginResponse, clearUserDetails } = useStore(
    usePatientPersistStore
  );
  const doctorDetails = doctorsLoginResponse?.data;

  const [isModalVisible, setModalVisibility] = useState(false);

  const closeModal = () => setModalVisibility(false);

  const handleEdit = () => {
    closeModal();
  };

  const handleLogout = () => {
    clearUserDetails();
  };

  return (
    <AppScreen scrollable isWhiteContent style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={{ uri: URLS.manAvatar }} />
        <View>
          <AppText style={styles.name}>{doctorDetails?.email} </AppText>
          <AppText style={styles.name}>
            {doctorDetails?.isAvailable ? "Available" : "Not available"}
          </AppText>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.cell}>
          <AppText style={styles.title}>First name</AppText>
          <AppText style={styles.subtitle}>{doctorDetails?.firstName}</AppText>
        </View>

        <View style={styles.cell}>
          <AppText style={styles.title}>Last name</AppText>
          <AppText style={styles.subtitle}>{doctorDetails?.lastName}</AppText>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.cell}>
          <AppText style={styles.title}>Phone number</AppText>
          <AppText style={styles.subtitle}>
            {doctorDetails?.phoneNumber}
          </AppText>
        </View>
        <View style={styles.cell}>
          <AppText style={styles.title}>Gender</AppText>
          <AppText style={styles.subtitle}>{doctorDetails?.gender}</AppText>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.cell}>
          <AppText style={styles.title}>Specialty</AppText>
          <AppText style={styles.subtitle}>
            {doctorDetails?.specialty.title}
          </AppText>
        </View>
        <View style={styles.cell}>
          <AppText style={styles.title}>Date Registered</AppText>
          <AppText style={styles.subtitle}>
            {new Date(doctorDetails?.createdAt ?? "").toDateString()}
          </AppText>
        </View>
      </View>

      <View style={{ ...styles.row, flexDirection: "column" }}>
        <AppText style={styles.title}>Description</AppText>
        <AppText>{doctorDetails?.description}</AppText>
      </View>

      <View style={styles.action}>
        <TouchableOpacity
          onPress={handleLogout}
          style={styles.modalCloseButton}
        >
          <AppText style={styles.modalCloseText}>Logout</AppText>
        </TouchableOpacity>

        <AppButton2 onPress={() => setModalVisibility(true)}>
          <AppText style={styles.actionText}>Edit profile</AppText>
        </AppButton2>
      </View>

      <AppModal
        acceptText="Edit Profile"
        isVisible={isModalVisible}
        onClosePress={closeModal}
        onAcceptPress={handleEdit}
      >
        <EditProfileModal />
      </AppModal>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  action: {
    justifyContent: "space-between",
    marginVertical: Size.calcHeight(30),
    flexDirection: "row",
  },
  actionText: {
    fontSize: Size.calcAverage(16),
    color: colors.WHITE100,
    paddingVertical: Size.calcHeight(10),
  },
  container: {
    backgroundColor: colors.GRAY300,
  },
  image: {
    aspectRatio: 1,
    height: Size.calcAverage(80),
    borderRadius: Size.calcAverage(100),
    marginRight: Size.calcWidth(10),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: colors.BLACK200,
    borderBottomWidth: Size.calcAverage(1),
    paddingBottom: Size.calcHeight(20),
  },
  name: {
    fontWeight: "600",
    fontSize: Size.calcWidth(20),
  },
  row: {
    flexDirection: "row",
    paddingVertical: Size.calcHeight(10),
    borderBottomColor: colors.BLACK200,
    borderBottomWidth: Size.calcAverage(0.5),
  },
  cell: {
    flex: 1,
  },
  title: {
    color: colors.BLACK300,
  },
  subtitle: {
    paddingTop: Size.calcHeight(5),
    fontWeight: "500",
    fontSize: Size.calcAverage(16),
  },
  modalCloseButton: {
    borderWidth: Size.calcAverage(1),
    borderColor: colors.RED200,
    borderRadius: Size.calcAverage(5),
    paddingVertical: Size.calcHeight(10),
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: Size.calcWidth(30),
  },
  modalCloseText: {
    fontWeight: "600",
    fontSize: Size.calcAverage(16),
    color: colors.RED200,
  },
});

export default DoctorProfileScreen;
