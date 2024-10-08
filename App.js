import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeIcon, SettingsIcon } from 'lucide-react-native';
// i decide to separate this stack nav component
import { AppScreen } from './components/screen/AppScreen';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const SettingScreen = () => {
  return(
    <>
      <Text>
        Setting
      </Text>
    </>
  )
}



const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            if (route.name === 'AppScreen') {
              return <HomeIcon color={ focused ? "blue" : "gray" } size={20} />
            } else if (route.name === 'Setting') {
              return <SettingsIcon color={ focused ? "blue" : "gray" } size={20} />
            }
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen  
          name="AppScreen" 
          component={AppScreen}
          options={{
            headerShown: false
          }}
        />
        <Tab.Screen name="Setting" component={SettingScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App