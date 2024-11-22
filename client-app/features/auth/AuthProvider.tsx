import { Session, User } from '@supabase/supabase-js'
import { createContext, PropsWithChildren, useEffect, useMemo, useState } from 'react'

import { supabase } from '~/utils/supabase'

type AuthContextType = {
  isAuthenticated: boolean
  session: Session | null
  user: User | null
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  session: null,
  user: null,
})

export default function AuthProvider({ children }: PropsWithChildren<object>) {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  const authContextValue = useMemo(() => {
    return {
      isAuthenticated: !!session,
      session,
      user: session ? session?.user : null,
    }
  }, [session])

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>
}
