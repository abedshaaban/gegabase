'use client'
import { useSupabase } from '@/SupabaseProvider'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export default function UserInfo() {
  const { supabase, user } = useSupabase()
  const [loading, setLoading] = useState(false)
  const [fisrtName, setFisrtName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const getProfile = async () => {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('users')
        .select(`first_name, last_name`)
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        console.log(error)
      }

      if (data) {
        setFisrtName(data.first_name)
        setLastName(data.last_name)
      }
    } catch (error) {
      console.log('Error loading user data!', error)
    } finally {
      setLoading(false)
    }
  }

  const handleGetUserProfile = async () => {
    setIsDialogOpen(!isDialogOpen)
    getProfile()
  }

  async function updateProfile({
    fisrtName,
    lastName,
  }: {
    fisrtName: string
    lastName: string
  }) {
    try {
      setLoading(true)

      let { error } = await supabase
        .from('users')
        .update({
          first_name: fisrtName,
          last_name: lastName,
        })
        .eq('id', user?.id)

      if (error) {
        console.log(error)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section>
      <Dialog open={isDialogOpen} onOpenChange={handleGetUserProfile}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you are done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">First Name</Label>
              <Input
                className="col-span-3"
                type="text"
                placeholder="First Name"
                value={fisrtName || ''}
                onChange={(e) => setFisrtName(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Last Name</Label>
              <Input
                className="col-span-3"
                type="text"
                placeholder="Last Name"
                value={lastName || ''}
                onChange={(e) => setLastName(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Email</Label>
              <Input
                className="col-span-3"
                disabled
                type="text"
                value={user?.email || ''}
                onChange={() => {}}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              disabled={loading}
              onClick={() => {
                updateProfile({ fisrtName, lastName }), setIsDialogOpen(false)
              }}
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}
