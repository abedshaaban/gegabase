'use client'
import AuthForm from '@/components/auth/AuthForm'
import { ReactNode } from 'react'
import { useSupabase } from '@/SupabaseProvider'

type Props = {
  children: ReactNode
  viewPage?:
    | 'sign_in'
    | 'sign_up'
    | 'forgotten_password'
    | 'magic_link'
    | 'update_password'
    | 'verify_otp'
}

export default function Index({ children, viewPage = 'sign_in' }: Props) {
  const { session } = useSupabase()

  return session ? (
    children
  ) : (
    <div className=" w-auto m-auto sm:max-w-[425px] p-10">
      <AuthForm viewPage={viewPage} />
    </div>
  )
}
