import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  ViewProps,
  ScrollView,
  ViewStyle,
} from "react-native";

import Size from "../utilities/useResponsiveSize";
import colors from "../configs/colors";

interface ScreenProps extends ViewProps {
  containerStyle?: ViewStyle;
  scrollable?: boolean;
}
// statusbarColor = colors.WHITE100,
//   statusbarStyle = 'dark-content',
const AppScreen = (props: ScreenProps): JSX.Element => {
  const { children, style, containerStyle, scrollable } = props;

  return (
    <SafeAreaView style={[styles.screen, containerStyle]}>
      <StatusBar backgroundColor={colors.BLUE100} barStyle={"light-content"} />

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
  },
});

export default AppScreen;
