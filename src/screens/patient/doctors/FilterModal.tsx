import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

import AppText from "../../../components/AppText";
import Size from "../../../utilities/useResponsiveSize";
import colors from "../../../configs/colors";
import { useState } from "react";
import specializations from "../../../assets/data/specializations";

const FilterModal = (): JSX.Element => {
  const [pickedItems, setPickedItems] = useState<string[]>([]);

  const handleSelection = (item: string) => {
    if (pickedItems.includes(item)) {
      const newItems = pickedItems.filter((value) => item !== value);
      setPickedItems(newItems);
    } else {
      setPickedItems([...pickedItems, item]);
    }
  };

  return (
    <View>
      <AppText style={styles.filter}>Filter by specialisation:</AppText>

      <ScrollView
        contentContainerStyle={{ paddingBottom: Size.calcHeight(100) }}
      >
        {specializations.map(({ title, subtitle }, index) => (
          <TouchableOpacity
            onPress={() => handleSelection(title)}
            key={index}
            style={styles.card}
          >
            <View>
              <AppText style={styles.title}>{title}</AppText>
              {!!subtitle && (
                <AppText style={styles.subtitle}>({subtitle})</AppText>
              )}
            </View>

            <View>
              {pickedItems.includes(title) ? (
                <FontAwesome
                  name="check-square-o"
                  size={Size.calcAverage(25)}
                  color={colors.BLUE100}
                />
              ) : (
                <MaterialIcons
                  name="check-box-outline-blank"
                  size={Size.calcAverage(25)}
                  color="black"
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Size.calcHeight(20),
    paddingLeft: Size.calcWidth(10),
    paddingRight: Size.calcWidth(20),
  },
  filter: {
    marginVertical: Size.calcHeight(20),
    fontWeight: "600",
  },
  title: {
    color: colors.GRAY600,
    fontWeight: "500",
    fontSize: Size.calcWidth(15),
  },
  subtitle: {
    color: colors.BLACK100,
    fontWeight: "600",
    fontSize: Size.calcWidth(15),
  },
});

export default FilterModal;
