import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

const drawerNavigator = createDrawerNavigator({
  Home: HomeStack,
});

export default drawerNavigator;
