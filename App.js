import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LoginScreen from './screens/login'
import ChatScreen from './screens/chat'

const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Chat: ChatScreen
  },
  {
    headerMode: "none"
  }
)

export default createAppContainer(AppNavigator);