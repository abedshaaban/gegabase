'use client'
import { useCallback, useEffect, useState } from 'react'
import { useSupabase } from '@/SupabaseProvider'
import AuthenticatedRoute from '@/components/auth/AuthenticatedRoute'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Icons } from '@/components/icons'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { CSVLink } from 'react-csv'
import Papa from 'papaparse'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

type EmailProps = {
  email: any
  created_at: any
}

export default function Stats({ params }: { params: { id: string } }) {
  const { supabase, user } = useSupabase()
  const [emailSet, setEmailSet] = useState<EmailProps[]>()
  const [emailsToDownload, setEmailsToDownload] = useState<any>('')
  const [emailCount, setEmailCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const getEmails = useCallback(async () => {
    try {
      let { data, error, status } = await supabase
        .from('emails')
        .select(`email, created_at`)
        .eq('template_id', params?.id)
        .eq('parent', user?.id)
        .limit(50)

      if (error && status !== 406) {
        console.log(error)
      }

      if (data) {
        setEmailSet(data)
      }
    } catch (error) {
      console.log('Error loading user data!', error)
    }
    try {
      let { count, error, status } = await supabase
        .from('emails')
        .select('*', { count: 'exact', head: true })
        .eq('template_id', params?.id)
        .eq('parent', user?.id)

      if (error && status !== 406) {
        console.log(error)
      }

      if (count) {
        setEmailCount(count)
      }
    } catch (error) {
      console.log('Error loading user data!', error)
    }
  }, [user, supabase, params?.id])

  useEffect(() => {
    if (user) {
      setLoading(true)
      getEmails()
      setLoading(false)
    }
  }, [user, getEmails])

  const formateDate = (date: Date) => {
    const f = new Date(date)
    return f.toLocaleString()
  }

  const handleDownload = async () => {
    setIsDialogOpen(!isDialogOpen)
    try {
      let { data, error, status } = await supabase
        .from('emails')
        .select(`email, created_at`)
        .eq('template_id', params?.id)
        .eq('parent', user?.id)
        .csv()

      if (error && status !== 406) {
        console.log(error)
      }

      if (data) {
        setEmailsToDownload(Papa.parse(data)?.data)
      }
    } catch (error) {
      console.log('Error loading user data!', error)
    }
  }

  return (
    <AuthenticatedRoute>
      <div className="w-full h-full">
        <div className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
          <div className="container flex h-14 items-center gap-3">
            <Button variant="ghost" size="icon">
              <Link href="/u" className="w-full h-full flex justify-center items-center">
                <Icons.arrowRight className="rotate-180" />
              </Link>
            </Button>
            <Button variant="link" disabled>
              ID: {params?.id}
            </Button>
          </div>
        </div>
        <div className="p-4">
          <div className="w-full flex justify-end">
            <Button variant={'link'} disabled>
              Total email count: {emailCount}
            </Button>

            <Dialog open={isDialogOpen} onOpenChange={handleDownload}>
              <DialogTrigger asChild>
                {emailCount === 0 ? (
                  <Button disabled>Download</Button>
                ) : (
                  <Button variant="outline">Download</Button>
                )}
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Download emails</DialogTitle>
                  <DialogDescription>
                    All emails collected from template {params?.id} will be exported into
                    a csv file.
                  </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                  <Button variant={'default'} onClick={() => setIsDialogOpen(false)}>
                    <CSVLink
                      data={emailsToDownload}
                      filename={`template-${params?.id}.csv`}
                    >
                      Download
                    </CSVLink>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {loading ? (
            <p>Getting emails</p>
          ) : (
            <Table>
              <TableCaption>
                {emailSet ? <>A list of your recent emails.</> : <>no emails yet.</>}
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Number</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Submited at</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {!emailSet
                  ? null
                  : emailSet?.map((email, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{index + 1}</TableCell>
                          <TableCell>{email.email}</TableCell>
                          <TableCell>{formateDate(email.created_at)}</TableCell>
                        </TableRow>
                      )
                    })}
              </TableBody>
            </Table>
          )}
        </div>
      </div>
    </AuthenticatedRoute>
  )
}
