import { Stack } from 'expo-router'

import LoginForm from '~/features/auth/LoginForm'

export default function LoginScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Login' }} />

      <LoginForm />
    </>
  )
}
