import UserInfo from './userInfo'
import TempTable from './tempTable'
import AuthenticatedRoute from '@/components/auth/AuthenticatedRoute'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'User',
}

export default function Index() {
  return (
    <AuthenticatedRoute>
      <div className="p-4">
        <UserInfo />
        <br />
        <hr />
        <hr />
        <hr />
        <hr />
        <br />
        <TempTable />
      </div>
    </AuthenticatedRoute>
  )
}
