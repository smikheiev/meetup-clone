import { Stack } from 'expo-router'
import { Button } from 'react-native'

import signOut from '~/features/auth/signOut'

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab Two' }} />

      <Button title="Sign Out" onPress={signOut} />
    </>
  )
}
