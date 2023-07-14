'use client'
import { useSupabase } from '@/SupabaseProvider'
import { logout } from '@/database/actions'
import { ModeToggle } from '@/components/mode-toggle'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Auth from '@/components/auth/AuthForm'
import { MainNav } from '@/components/main-nav'
import Link from 'next/link'

export default function Index() {
  const { user } = useSupabase()

  const handleLogout = () => {
    logout()
  }

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <MainNav />

        <nav className="flex items-center gap-2">
          <ModeToggle />

          {user ? (
            <>
              <Link href="/u">
                <Button variant="ghost" className="w-9 px-0 mx-1">
                  <Icons.userProfile className="h-4 w-4 fill-current" />
                  <span className="sr-only">user profile</span>
                </Button>
              </Link>

              <Button
                variant="destructive"
                className="w-9 px-0 mx-1"
                onClick={handleLogout}
              >
                <Icons.exit className="h-4 w-4 fill-current" />
              </Button>
            </>
          ) : (
            <>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Login</Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px]">
                  <Auth viewPage="sign_in" />
                </DialogContent>
              </Dialog>

              <Link href="/login">
                <Button variant="default">Free signup</Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
