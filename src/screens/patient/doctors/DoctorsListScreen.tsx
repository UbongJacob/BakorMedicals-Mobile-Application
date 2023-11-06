import { FlatList, StyleSheet } from "react-native";
import { useState } from "react";

import AppScreen from "../../../components/AppScreen";
import AppBackButton from "../../../components/AppBackButton";
import DoctorsSearch from "../home/DoctorsSearch";
import AppModal from "../../../components/AppModal";
import FilterModal from "./FilterModal";
import colors from "../../../configs/colors";
import DoctorsCard from "./DoctorsCard";
import Size from "../../../utilities/useResponsiveSize";
import { useStore } from "zustand";
import { usePatientPersistStore } from "../../../stores/patient.store";
import { useQuery } from "@tanstack/react-query";
import {
  getAllDoctors,
  getAllDoctorsQueryName,
} from "../../../api/doctor/doctor.api";
import appToastMessage from "../../../utilities/appToastMessage";

const DoctorsListScreen = (): JSX.Element => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleAccept = () => {
    toggleModal();
  };

  const { setAllDoctorsResponse, allDoctorsResponse } = useStore(
    usePatientPersistStore
  );
  useQuery({
    queryKey: [getAllDoctorsQueryName],
    queryFn: async () => {
      const response = await getAllDoctors();
      if (response.ok && response.data) {
        setAllDoctorsResponse(response.data);
      } else {
        appToastMessage.info(response.problem ?? response.data?.message ?? "");
      }
      return response;
    },
  });

  return (
    <AppScreen style={styles.container}>
      <AppBackButton />

      <DoctorsSearch isFilter onFilterPress={() => setModalVisible(true)} />

      <FlatList
        contentContainerStyle={{ paddingVertical: Size.calcHeight(50) }}
        data={allDoctorsResponse?.data}
        numColumns={2}
        renderItem={({ index, item }) => {
          return (
            <DoctorsCard
              firstName={item.firstName}
              lastName={item.lastName}
              id={item.id}
              imageURL={item.imageURL ?? undefined}
              isAvailable={item.isAvailable}
              specialty={item.specialty.title}
              key={index}
            />
          );
        }}
      />

      <AppModal
        acceptText="Filter"
        onAcceptPress={handleAccept}
        onClosePress={() => setModalVisible(false)}
        isVisible={isModalVisible}
      >
        <FilterModal />
      </AppModal>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.GRAY300,
  },
});

export default DoctorsListScreen;
