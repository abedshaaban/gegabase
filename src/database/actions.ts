import { supabase } from './supabase'

interface UI_Login {
  email: string
  password: string
}

interface UI_Signup {
  email: string
  password: string
}

export async function signUpWithEmailAndPassword({ email, password }: UI_Signup) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  })
  return { data, error }
}

export async function signInWithEmailAndPwd({ email, password }: UI_Login) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })
  return { data, error }
}

export async function logout() {
  await supabase.auth.signOut()
}
