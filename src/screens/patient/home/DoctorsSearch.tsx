import { View, StyleSheet, Pressable } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import Size from "../../../utilities/useResponsiveSize";
import AppTextInput from "../../../components/AppTextInput";
import colors from "../../../configs/colors";

interface Props {
  isFilter?: boolean;
  onFilterPress?: () => void;
}

const DoctorsSearch = ({ isFilter, onFilterPress }: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <AppTextInput
        placeholder="Search doctors"
        rightIcon={
          <>
            {!!isFilter ? (
              <Pressable
                style={{ justifyContent: "center" }}
                onPress={onFilterPress}
              >
                <AntDesign name="filter" size={24} color={colors.GRAY100} />
              </Pressable>
            ) : (
              <View style={{ justifyContent: "center" }}>
                <Ionicons
                  name="md-search-outline"
                  size={24}
                  color={colors.GRAY100}
                />
              </View>
            )}
          </>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Size.calcHeight(10),
    marginBottom: Size.calcHeight(10),
    width: "95%",
    alignSelf: "center",
  },
});

export default DoctorsSearch;
