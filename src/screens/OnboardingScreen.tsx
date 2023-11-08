import { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
  StatusBar,
} from "react-native";

import OnboardingImage1 from "../assets/images/onboarding1.png";
import OnboardingImage2 from "../assets/images/onboarding2.png";
import OnboardingImage3 from "../assets/images/onboarding3.png";
import AppText from "../components/AppText";
import colors from "../configs/colors";
import fonts from "../configs/fonts";
import Size from "../utilities/useResponsiveSize";
import AppButton from "../components/AppButton";

import { AuthParamsNavigator } from "../navigation/AuthNavigator";
import routes from "../navigation/routes";

const OnboardingScreen = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const onboardingRef = useRef<ScrollView>(null);
  const navigation = useNavigation<AuthParamsNavigator>();

  const data = [
    // {
    //   image: OnboardingImage1,
    //   title: "Welcome to Your Outpatient Journey",
    //   subtitle:
    //     "Get started with our outpatient mobile app and discover the convenience of managing your healthcare on the go. We're here to guide you every step of the way.",
    // },
    // {
    //   image: OnboardingImage2,
    //   title: "Grow your popularity",
    //   subtitle:
    //     "Experience the future of outpatient care with our mobile app. Simplify appointment scheduling and stay connected with your healthcare providers.",
    // },
    {
      image: OnboardingImage1,
      title: "Your Health, Your Way",
      subtitle:
        "Take control of your outpatient healthcare with our mobile and receive timely reminders effortlessly.",
    },
  ];
  const scrollValue = useRef(new Animated.Value(0)).current;

  const translateX = scrollValue.interpolate({
    inputRange: [0, Size.getWidth()],
    outputRange: [0, 30],
  });

  type DoneType = "Login" | "Doctor Login";

  const handleDone = (type: DoneType) => {
    if (type === "Login") {
      navigation.push(routes.LOGIN_SCREEN);
    } else {
      navigation.push(routes.DOCTOR_LOGIN_SCREEN);
    }
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    // Calculate the current page based on the current content offset and page width
    const { x } = event.nativeEvent.contentOffset;
    const page = Math.floor((x + Size.getWidth() / 2) / Size.getWidth());
    setCurrentIndex(page);
  };

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      onboardingRef.current?.scrollTo({
        x: (currentIndex + 1) * Size.getWidth(),
        y: 0,
        animated: true,
      });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onboardingRef.current?.scrollTo({
        x: (currentIndex - 1) * Size.getWidth(),
        y: 0,
        animated: true,
      });
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={"light-content"}
      />

      <ScrollView
        ref={onboardingRef}
        horizontal
        pagingEnabled
        decelerationRate="fast"
        onMomentumScrollEnd={handleScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollValue } } }],
          { useNativeDriver: false }
        )}
      >
        {data.map(({ image, subtitle, title }, index) => (
          <ImageBackground key={index} style={styles.card} source={image}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subtitle}>{subtitle}</AppText>
          </ImageBackground>
        ))}
      </ScrollView>

      <View style={styles.actionContainer}>
        {/* <View style={styles.indicatorConatiner} pointerEvents="none">
          <Animated.View
            style={[
              styles.indicator,
              styles.activeIndicator,
              { position: "absolute", transform: [{ translateX }] },
            ]}
          />
          {[...data, 1].map((_, index) => (
            <Indicator key={index} />
          ))}
        </View> */}
        <View style={styles.buttonContainer}>
          {currentIndex > 0 && currentIndex < data.length - 1 && (
            <AppButton
              onPress={handlePrev}
              innerContainerStyle={styles.buttonInner}
              title="Prev"
            />
          )}
          {currentIndex < data.length - 1 && (
            <AppButton
              onPress={handleNext}
              innerContainerStyle={styles.buttonInner}
              style={styles.button}
              title="Next"
            />
          )}
          {currentIndex >= data.length - 1 && (
            <View style={{ width: "100%" }}>
              <AppButton
                style={styles.loginButton}
                innerContainerStyle={styles.loginButtonShadow}
                disableShadow
                onPress={() => handleDone("Login")}
                title="Patient Login"
              />
              <AppButton
                style={{ width: "100%", marginBottom: Size.calcHeight(-60) }}
                onPress={() => handleDone("Doctor Login")}
                title="Doctor Login"
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

function Indicator() {
  return <View style={styles.indicator} />;
}

const styles = StyleSheet.create({
  actionContainer: {
    position: "absolute",
    width: "100%",
    bottom: Size.calcHeight(119),
  },
  activeIndicator: {
    width: Size.calcWidth(50),
    backgroundColor: colors.WHITE100,
    zIndex: 10,
  },
  button: {
    marginLeft: "auto",
  },
  buttonContainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: Size.calcWidth(35),
  },
  buttonInner: {
    paddingHorizontal: Size.calcWidth(40),
  },
  card: {
    width: Size.getWidth(),
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  indicator: {
    height: Size.calcHeight(10),
    width: Size.calcWidth(18),
    borderRadius: 5,
    backgroundColor: colors.GRAY100,
    marginHorizontal: Size.calcWidth(7),
  },
  indicatorConatiner: {
    alignSelf: "center",
    marginBottom: Size.calcHeight(35),
    flexDirection: "row",
  },
  loginButton: {
    width: "100%",
    marginBottom: Size.calcHeight(25),
    backgroundColor: "transparent",
  },
  loginButtonShadow: {
    backgroundColor: "transparent",
    borderColor: colors.WHITE100,
    borderWidth: 1.5,
  },
  subtitle: {
    fontFamily: fonts.OPENSANS_600,
    fontSize: Size.calcWidth(15),
    color: colors.WHITE100,
    paddingHorizontal: Size.calcWidth(35),
    textAlign: "center",
    marginBottom: Size.calcHeight(-200),
  },
  title: {
    fontFamily: fonts.MONTSERRAT_700,
    fontSize: Size.calcWidth(29),
    color: colors.WHITE100,
    marginBottom: Size.calcHeight(23),
  },
});

export default OnboardingScreen;
