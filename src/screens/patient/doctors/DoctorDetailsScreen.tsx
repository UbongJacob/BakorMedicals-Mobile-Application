import { View, StyleSheet, Image, ScrollView } from "react-native";
import { useEffect, useState } from "react";

import AppText from "../../../components/AppText";
import URLS from "../../../assets/data/URLS";
import Size from "../../../utilities/useResponsiveSize";
import colors from "../../../configs/colors";
import AppButton from "../../../components/AppButton";
import AppModal from "../../../components/AppModal";
import AppBackButton from "../../../components/AppBackButton";
import BookingModal from "./BookingModal";
import AvailableCard from "../../../components/AvailableCard";
import { DoctorDetailsScreenProps } from "../../../navigation/StackNavigators";
import { useRoute } from "@react-navigation/native";
import { IDoctor } from "../../../types/api/patient/doctor.type";
import { useStore } from "zustand";
import { usePatientPersistStore } from "../../../stores/patient.store";

const DoctorDetailsScreen = (): JSX.Element => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [doctorDetails, setDoctorDetails] = useState<IDoctor>();

  const { allDoctorsResponse } = useStore(usePatientPersistStore);

  const params = useRoute<DoctorDetailsScreenProps>().params;

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleAccept = () => {
    toggleModal();
  };

  useEffect(() => {
    const doctors = allDoctorsResponse?.data;

    const doctor = doctors?.find(({ id }) => id === params.DOCTOR_DETAILS.id);
    setDoctorDetails(doctor);
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ position: "relative", height: "40%" }}>
        <Image
          style={styles.image}
          source={{ uri: doctorDetails?.imageURL ?? URLS.manAvatar }}
        />
        <View
          style={{
            position: "absolute",
            top: Size.calcHeight(50),
            left: Size.calcWidth(20),
          }}
        >
          <AppBackButton />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.row}>
          <AppText>About doctor </AppText>

          <AvailableCard
            title="Available Today"
            isAvailable={doctorDetails?.isAvailable ?? false}
          />
        </View>

        <AppText style={styles.name}>
          {doctorDetails?.firstName} {doctorDetails?.lastName}
        </AppText>
        <AppText style={styles.title}>{doctorDetails?.specialty.title}</AppText>
        <ScrollView>
          <AppText style={styles.about}>{doctorDetails?.description}</AppText>
        </ScrollView>
        <AppButton
          style={{ marginBottom: Size.calcHeight(40) }}
          onPress={toggleModal}
          title="Book appointment"
        />

        <AppModal
          acceptText="Book appointment"
          onAcceptPress={handleAccept}
          onClosePress={() => toggleModal()}
          isVisible={isModalVisible}
        >
          <BookingModal id={doctorDetails?.id ?? ""} />
        </AppModal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  about: {
    fontSize: Size.calcAverage(14),
    lineHeight: Size.calcHeight(20),
    marginTop: Size.calcHeight(10),
    flex: 1,
    paddingBottom: Size.calcHeight(20),
    paddingTop: Size.calcHeight(10),
  },
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: Size.calcWidth(20),
    paddingTop: Size.calcHeight(10),
    backgroundColor: colors.WHITE100,
    flex: 1,
    marginTop: Size.calcHeight(-50),
    borderTopRightRadius: Size.calcAverage(30),
    borderTopLeftRadius: Size.calcAverage(30),
  },
  image: {
    height: "100%",
    objectFit: "cover",
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: Size.calcAverage(20),
    fontWeight: "600",
    textAlign: "center",
    marginTop: Size.calcHeight(10),
    marginBottom: Size.calcHeight(5),
  },
  title: {
    fontSize: Size.calcAverage(16),
    textAlign: "center",
  },
});

export default DoctorDetailsScreen;
