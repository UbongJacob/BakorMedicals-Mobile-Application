import { StyleSheet, Text } from "react-native";
import { useState } from "react";

import AppScreen from "../../../components/AppScreen";
import AppBackButton from "../../../components/AppBackButton";
import DoctorsSearch from "../home/DoctorsSearch";
import AppModal from "../../../components/AppModal";
import FilterModal from "./FilterModal";

const DoctorsListScreen = (): JSX.Element => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleAccept = () => {
    toggleModal();
  };

  return (
    <AppScreen style={styles.container}>
      <AppBackButton />

      <DoctorsSearch isFilter onFilterPress={() => setModalVisible(true)} />
      <Text>DoctorsListScreen</Text>

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
  container: {},
});

export default DoctorsListScreen;
