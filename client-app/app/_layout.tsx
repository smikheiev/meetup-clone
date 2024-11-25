import '../global.css'

import { Stack } from 'expo-router'

import AuthProvider from '~/features/auth/AuthProvider'

export const unstable_settings = {
  initialRouteName: '(tabs)',
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  )
}
