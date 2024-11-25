import { Redirect, Stack } from 'expo-router'

import useIsAuthenticated from '~/features/auth/useIsAuthenticated'

export default function AuthLayout() {
  const isAuthenticated = useIsAuthenticated()

  if (isAuthenticated) {
    return <Redirect href="/" />
  }

  return <Stack />
}
