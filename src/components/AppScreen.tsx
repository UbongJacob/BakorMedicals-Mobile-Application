import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  ViewProps,
  ScrollView,
  ViewStyle,
  Platform,
} from "react-native";

import Size from "../utilities/useResponsiveSize";
import colors from "../configs/colors";
import Constants from "expo-constants";

export const GET_DEFAULT_PADDING = (): number => {
  return (
    (Platform.OS === "android" ? Constants.statusBarHeight : 0) +
    Size.calcHeight(10)
  );
};
interface ScreenProps extends ViewProps {
  containerStyle?: ViewStyle;
  scrollable?: boolean;
  isWhiteContent?: boolean;
}
// statusbarColor = colors.WHITE100,
//   statusbarStyle = 'dark-content',
const AppScreen = (props: ScreenProps): JSX.Element => {
  const { children, style, containerStyle, scrollable } = props;

  return (
    <SafeAreaView style={[styles.screen, containerStyle]}>
      <StatusBar
        barStyle={Platform.OS === "android" ? "light-content" : "dark-content"}
      />

      {scrollable ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[styles.view, style]}
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.view, style]}>{children}</View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.WHITE100,
  },
  view: {
    flex: 1,
    paddingHorizontal: Size.calcWidth(24),
    paddingTop: GET_DEFAULT_PADDING(),
  },
});

export default AppScreen;
