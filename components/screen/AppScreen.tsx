import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Order from './home/OrderScreen';
import Home from './home/HomeScreen';
import LandingPage from './home/LandingPage';
import Marketing from './home/Marketing';

const Stack = createNativeStackNavigator();

const Login = ({ navigation }) => {
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Login</Text>
        <Button
          title='Go to Home'
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </SafeAreaView>
  )
}

// const Home = () => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Home</Text>
//       </View>
//     </SafeAreaView>
//   )
// }

const Product = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Product</Text>
      </View>
    </SafeAreaView>
  )
}

// const Order = () => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Order</Text>
//       </View>
//     </SafeAreaView>
//   )
// }

const Ekspedisi = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Ekspedisi</Text>
      </View>
    </SafeAreaView>
  )
}

const FAQ = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>FAQ</Text>
      </View>
    </SafeAreaView>
  )
}

const Tampilan = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Tampilan</Text>
      </View>
    </SafeAreaView>
  )
}

export const AppScreen = () => {
  return(
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
            headerShown: false
        }}  
      />
      <Stack.Screen name="Product" component={Product}/>
      <Stack.Screen name="Order" component={Order}/>
      <Stack.Screen name="Ekspedisi" component={Ekspedisi}/>
      <Stack.Screen name="FAQ" component={FAQ}/>
      <Stack.Screen name="Tampilan" component={Tampilan}/>
      <Stack.Screen name="Landingpage" component={LandingPage}/>
      <Stack.Screen name="Marketing" component={Marketing}/>
    </Stack.Navigator>
  )
}