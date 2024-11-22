import { supabase } from '~/utils/supabase'

export default function signOut() {
  return supabase.auth.signOut()
}
