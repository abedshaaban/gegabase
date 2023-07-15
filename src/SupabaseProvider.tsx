'use client'
import {
  SupabaseClient,
  createPagesBrowserClient,
  User,
  Session,
} from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { Database } from './database/database.types'

type SupabaseContext = {
  supabase: SupabaseClient
  session: Session
  user: User
}

const Context = createContext<SupabaseContext | undefined>(undefined)

export default function SupabaseProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [supabase] = useState(() => createPagesBrowserClient<Database>())
  const [user, setUser] = useState<any>()
  const [session, setSession] = useState<any>()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, sessionChange) => {
      setUser(sessionChange?.user)
      setSession(sessionChange)

      router.refresh()
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase])

  return (
    <Context.Provider value={{ supabase, session, user }}>
      <>{children}</>
    </Context.Provider>
  )
}

export const useSupabase = () => {
  const context = useContext(Context)

  if (context === undefined) {
    throw new Error('useSupabase must be used inside SupabaseProvider')
  }

  return context
}
