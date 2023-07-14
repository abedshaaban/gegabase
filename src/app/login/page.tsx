import AuthenticatedRoute from '@/components/auth/AuthenticatedRoute'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: '',
}

export default function page() {
  return <AuthenticatedRoute viewPage="sign_up">You are logged in!</AuthenticatedRoute>
}
