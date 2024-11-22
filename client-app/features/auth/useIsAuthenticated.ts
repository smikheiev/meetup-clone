import { useContext } from 'react'

import { AuthContext } from './AuthProvider'

export default function useIsAuthenticated() {
  return useContext(AuthContext).isAuthenticated
}
