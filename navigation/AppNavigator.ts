import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainDrawerNavigator from './MainDrawerNavigator';
import AppSwitchNavigator from './AppSwitchNavigator';
import AuthFlowScreen from '../screens/AuthFlowScreen';

export default createAppContainer(
    createSwitchNavigator(
        {
            // You could add another route here for authentication.
            // Read more at https://reactnavigation.org/docs/en/auth-flow.html
            AuthFlow: AuthFlowScreen,
            Auth: AppSwitchNavigator,
            Main: MainDrawerNavigator
        },
        {
            initialRouteName: 'AuthFlow'
        }
    )
);
