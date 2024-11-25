import { useState } from 'react'
import { Alert, Pressable, Text, TextInput, View } from 'react-native'

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
    <View className="flex-1 gap-3 bg-white p-3">
      <TextInput
        className="rounded-lg border border-stone-400 p-3"
        autoCapitalize="none"
        placeholder="email@address.com"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        className="rounded-lg border border-stone-400 p-3"
        autoCapitalize="none"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View className="w-1/2 flex-col gap-3 self-center">
        <Pressable
          className="items-center rounded-lg border-2 border-red-300 p-4"
          onPress={signInWithEmail}
          disabled={loading}
        >
          <Text className="text-2xl font-semibold text-red-500">Sign In</Text>
        </Pressable>
        <Pressable
          className="items-center rounded-lg border-2 border-red-300 p-4"
          onPress={signUpWithEmail}
          disabled={loading}
        >
          <Text className="text-2xl font-semibold text-red-500">Sign Up</Text>
        </Pressable>
      </View>
    </View>
  )
}
