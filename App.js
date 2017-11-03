import { StackNavigator } from 'react-navigation'
import HomeScreen from './src/screens/Home'
import ProfileScreen from './src/screens/Profile'

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
})

export default App
