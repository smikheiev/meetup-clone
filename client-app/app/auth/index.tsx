import { Stack } from 'expo-router'
import { Text } from 'react-native'

export default function LoginScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Login' }} />

      <Text>Auth</Text>
    </>
  )
}
