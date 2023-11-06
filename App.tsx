import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from "./src/navigation/MainNavigator";

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
