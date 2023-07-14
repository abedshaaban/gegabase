'use client'
import { supabase } from '@/database/supabase'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

type Props = {
  viewPage?:
    | 'sign_in'
    | 'sign_up'
    | 'forgotten_password'
    | 'magic_link'
    | 'update_password'
    | 'verify_otp'
}

export default function Index({ viewPage = 'sign_in' }: Props) {
  return (
    <Auth
      supabaseClient={supabase}
      appearance={{ theme: ThemeSupa }}
      providers={[]}
      redirectTo={`https://gegabase.com/u`}
      view={viewPage}
    />
  )
}
