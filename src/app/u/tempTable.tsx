'use client'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { useEffect, useState } from 'react'
import { useSupabase } from '@/SupabaseProvider'
import Link from 'next/link'
import { nanoid } from 'nanoid'
import { useToast } from '@/components/ui/use-toast'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Template } from '@/types/template'

type RetrievedTemplate = {
  id: string
  name: string
}

export default function TempTable() {
  const { supabase, user } = useSupabase()
  const [templates, setTemplates] = useState<RetrievedTemplate[]>()
  const [freeTemplateVersion, setFreeTemplateVersion] = useState<Template>({
    btn: {
      at: 'Submit',
      type: 5,
      color: '#ffffff',
      bg_color: '#000000',
    },
    imgURL: '',
    color: '#000000',
    title: 'Join Our Email List!',
    bg_color: '#a9acfe',
    description:
      'Stay connected, be the first one to know, and get special offers. Join our email list for exclusive updates and exciting opportunities. Sign up today!',
  })
  const [loading, setLoading] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()

  const getTemplates = async () => {
    setLoading(true)

    try {
      let { data, error, status } = await supabase
        .from('templates')
        .select(`id, name`)
        .eq('parent', user?.id)

      if (error && status !== 406) {
        console.log(error)
      }

      if (data) {
        setTemplates(data)
      }
    } catch (error) {
      console.log('Error loading user data!', error)
    }
    setLoading(false)
  }
  const GetFreeTemplate = () => {
    if (window?.localStorage?.getItem('free-template')) {
      const gotFreeTemplate = window?.localStorage?.getItem('free-template')
      setFreeTemplateVersion(JSON.parse(gotFreeTemplate as any))
      window?.localStorage?.removeItem('free-template')
    }
  }

  useEffect(() => {
    getTemplates()
    if (window) {
      GetFreeTemplate()
    }

    // eslint-disable-next-line
  }, [])

  const createNewTemplate = async () => {
    setLoading(true)
    try {
      let { data, error, status } = await supabase
        .from('templates')
        .insert([
          {
            id: nanoid(9),
            name: 'template-1',
            parent: user?.id,
            body: freeTemplateVersion,
          },
        ])
        .select()

      if (error && status !== 406) {
        console.log(error)
      }

      if (data) {
        setTemplates(data)
      }
    } catch (error) {
      console.log('Error loading user data!', error)
    }
    setLoading(false)
  }

  const handleCopyLink = (path: string) => {
    navigator?.clipboard.writeText(`${window?.location?.origin}/${path}`)
    toast({
      title: 'Link copied!',
    })
  }

  const handleDeleteTemplate = async (id: string) => {
    try {
      const { error, status } = await supabase.from('templates').delete().eq('id', id)

      if (error && status !== 406) {
        console.log(error)
      } else {
        toast({
          title: 'Template deleted successfully.',
        })
      }
      setIsDialogOpen(false)
      getTemplates()
    } catch (error) {
      console.log('Error loading user data!', error)
    }
  }

  return (
    <>
      {loading ? (
        <div className="w-full text-center">
          <p>Getting templates.</p>
        </div>
      ) : (
        <>
          <Table>
            {templates?.length === 0 ? null : (
              <TableCaption>A list of your recent templates.</TableCaption>
            )}

            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] pl-6">Id</TableHead>
                <TableHead className="text-center">Name</TableHead>
                <TableHead className="w-[90px] text-center">Records</TableHead>
                <TableHead className="w-[60px] text-center">Edit</TableHead>
                <TableHead className="w-[60px] text-right">Share</TableHead>
                <TableHead className="w-[60px] text-right">Delete</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {templates?.map((template) => {
                return (
                  <TableRow key={template?.id}>
                    <TableCell className="font-medium pl-6">{template?.id}</TableCell>
                    <TableCell className="text-center">{template?.name}</TableCell>
                    <TableCell className="w-[90px] text-right flex justify-center">
                      <Button variant="outline" size="icon">
                        <Link
                          href={`/u/stats/${template?.id}`}
                          className="w-full h-full flex justify-center items-center"
                        >
                          <Icons.listBullet />
                        </Link>
                      </Button>
                    </TableCell>
                    <TableCell className="w-[60px] text-right">
                      <Button variant="outline" size="icon">
                        <Link
                          href={`/u/edit/${template?.id}`}
                          className="w-full h-full flex justify-center items-center"
                        >
                          <Icons.paperPencil />
                        </Link>
                      </Button>
                    </TableCell>
                    <TableCell className="w-[60px] text-right">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleCopyLink(template?.id)}
                      >
                        <Icons.share />
                      </Button>
                    </TableCell>
                    <TableCell className="w-[60px] text-right">
                      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                          <Button variant="destructive" size="icon" className="p-3">
                            <Icons.trash />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader className="pr-6">
                            <DialogTitle>
                              Are you absolutely sure you want to delete this template?
                            </DialogTitle>
                            <DialogDescription>
                              Deleting this template will also delete its assosiated
                              emails that have been submitted through it. This action
                              cannot be undone. Are you sure you want to permanently
                              delete this template from our servers?
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <Button
                              variant="destructive"
                              size="icon"
                              onClick={() => handleDeleteTemplate(template?.id)}
                            >
                              <Icons.trash />
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>

          {templates?.length !== 0 ? null : (
            <div className="w-100% py-6 flex justify-center">
              <Button variant="outline" onClick={createNewTemplate}>
                Create template
              </Button>
            </div>
          )}
        </>
      )}
    </>
  )
}
