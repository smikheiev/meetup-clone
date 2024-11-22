import { useState } from 'react'
import { Alert, Button, TextInput, View } from 'react-native'

import { supabase } from '~/utils/supabase'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const signInWithEmail = async () => {
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      Alert.alert(error.message)
    }

    setLoading(false)
  }

  const signUpWithEmail = async () => {
    setLoading(true)

    const { error } = await supabase.auth.signUp({ email, password })
    if (error) {
      Alert.alert(error.message)
    }

    setLoading(false)
  }

  return (
    <View>
      <TextInput
        autoCapitalize="none"
        placeholder="email@address.com"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        autoCapitalize="none"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Sign In" onPress={signInWithEmail} disabled={loading} />
      <Button title="Sign Up" onPress={signUpWithEmail} disabled={loading} />
    </View>
  )
}
