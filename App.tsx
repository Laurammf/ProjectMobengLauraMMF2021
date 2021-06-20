
 import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import CompleteListScreen from './screens/CompleteListScreen';
import EditScreen from './screens/EditScreen';
import FoodScreen from './screens/FoodScreen';
import HomeScreen from './screens/HomeScreen'
import QueriedListScreen from './screens/QueriedListScreen'
import ScanScreen from './screens/ScanScreen';


const Navigator = createSwitchNavigator(
  {
    HomeScreen: HomeScreen,
    FoodScreen: FoodScreen,
    CompleteListScreen: CompleteListScreen, 
    QueriedListScreen: QueriedListScreen,
    ScanScreen: ScanScreen,
    EditScreen: EditScreen,

  },
  {
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(Navigator);

