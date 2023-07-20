'use client'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import type { Template } from '@/types/template'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  BtnOne,
  BtnTwo,
  BtnThree,
  BtnFour,
  BtnFive,
  BtnSix,
} from '@/components/builder/btn-options'
import { ColorPicker } from '@/components/color-picker'
import dynamic from 'next/dynamic'
import { useSupabase } from '@/SupabaseProvider'
import AuthenticatedRoute from '@/components/auth/AuthenticatedRoute'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { nanoid } from 'nanoid'

const BtnOneShow = dynamic(() => import('@/components/templateUI/btn-one'), {
  ssr: false,
})
const BtnTwoShow = dynamic(() => import('@/components/templateUI/btn-two'), {
  ssr: false,
})
const BtnThreeShow = dynamic(() => import('@/components/templateUI/btn-three'), {
  ssr: false,
})
const BtnFourShow = dynamic(() => import('@/components/templateUI/btn-four'), {
  ssr: false,
})
const BtnFiveShow = dynamic(() => import('@/components/templateUI/btn-five'), {
  ssr: false,
})
const BtnSixShow = dynamic(() => import('@/components/templateUI/btn-six'), {
  ssr: false,
})

export default function EditTemplate({ params }: { params: { id: string } }) {
  const IMGCDN = `${
    process.env.NEXT_PUBLIC_SUPABASE_URL as string
  }/storage/v1/object/public/profiles/`

  const { supabase, user } = useSupabase()
  const initialTemp: Template = {
    imgURL: '',
    title: '',
    description: '',
    color: '',
    bg_color: '',
    btn: {
      type: 0,
      at: '',
      bg_color: '',
      color: '',
    },
  }
  const { theme } = useTheme()
  const [uploading, setUploading] = useState(false)
  const [tempName, setTempName] = useState('')
  const [template, setTemplate] = useState<Template>(initialTemp)
  const [loading, setLoading] = useState(false)

  const toggleBTN = (i: number) => {
    setTemplate({ ...template, btn: { ...template?.btn, type: i } })
  }

  const updateTemplate = async (template: Template) => {
    try {
      setLoading(true)

      const { error } = await supabase
        .from('templates')
        .update({ name: tempName, body: template })
        .eq('parent', user?.id)
        .eq('id', params?.id)
        .select('*')

      if (error) {
        console.log(error)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const getUserTemplate = useCallback(async () => {
    try {
      let { data, error, status } = await supabase
        .from('templates')
        .select(`name, body`)
        .eq('parent', user?.id)
        .eq('id', params?.id)
        .single()

      if (error && status !== 406) {
        console.log(error)
      }

      if (data) {
        setTemplate(data?.body)
        setTempName(data?.name)
      }
    } catch (error) {
      console.log('Error loading user data!', error)
    }
  }, [user, supabase, params?.id])

  useEffect(() => {
    if (user) {
      getUserTemplate()
    }
  }, [user, getUserTemplate])

  const MobilePreview = ({
    bg_color,
    btn,
    color,
    description,
    title,
    imgURL,
  }: Template) => {
    return (
      <div
        style={{
          color: color,
          backgroundColor: bg_color,
          scale: 0.5,
        }}
        className={`w-[375px] h-[812px] border-[15px] rounded-[60px] md:fixed ${
          theme === 'light' ? 'border-neutral-950' : 'border-slate-600'
        }  flex flex-col justify-center items-center gap-3 origin-top-left`}
      >
        <img
          src={imgURL ? IMGCDN + imgURL : ''}
          alt=""
          className="rounded-full w-48 h-48 object-cover object-center"
        />
        <div className="p-3 text-center">
          <h1 className="text-xl font-bold mb-4">{title}</h1>
          <p>{description}</p>
        </div>

        {btn?.type === 0 ? (
          <BtnOneShow
            isDisabled={false}
            color={template?.btn?.color}
            bg_color={template?.btn?.bg_color}
            at={template?.btn?.at}
            inputValue={''}
            onInputChange={() => {}}
            onBtnClick={() => {}}
          />
        ) : btn?.type === 1 ? (
          <BtnTwoShow
            isDisabled={false}
            color={template?.btn?.color}
            bg_color={template?.btn?.bg_color}
            at={template?.btn?.at}
            inputValue={''}
            onInputChange={() => {}}
            onBtnClick={() => {}}
          />
        ) : btn?.type === 2 ? (
          <BtnThreeShow
            isDisabled={false}
            color={template?.btn?.color}
            bg_color={template?.btn?.bg_color}
            at={template?.btn?.at}
            inputValue={''}
            onInputChange={() => {}}
            onBtnClick={() => {}}
          />
        ) : btn?.type === 3 ? (
          <BtnFourShow
            isDisabled={false}
            color={template?.btn?.color}
            bg_color={template?.btn?.bg_color}
            at={template?.btn?.at}
            inputValue={''}
            onInputChange={() => {}}
            onBtnClick={() => {}}
          />
        ) : btn?.type === 4 ? (
          <BtnFiveShow
            isDisabled={false}
            color={template?.btn?.color}
            bg_color={template?.btn?.bg_color}
            at={template?.btn?.at}
            inputValue={''}
            onInputChange={() => {}}
            onBtnClick={() => {}}
          />
        ) : btn?.type === 5 ? (
          <BtnSixShow
            isDisabled={false}
            color={template?.btn?.color}
            bg_color={template?.btn?.bg_color}
            at={template?.btn?.at}
            inputValue={''}
            onInputChange={() => {}}
            onBtnClick={() => {}}
          />
        ) : null}
      </div>
    )
  }

  const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
    setUploading(true)
    try {
      if (!e.target.files || e.target.files.length === 0) {
        console.log('no image selected')
      } else {
        let file = e.target.files[0]

        const { data, error } = await supabase.storage
          .from('profiles')
          .upload(`${user.id}/${params?.id}/${nanoid(21)}`, file)

        if (error) {
          console.log(error)
        }
        if (data) {
          setTemplate((prevTemplate) => ({
            ...prevTemplate,
            imgURL: data?.path,
          }))
          await updateTemplate(template)
        }
      }
    } catch (error) {
      console.error(error)
    } finally {
      setUploading(false)
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
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Title</Label>
              <Input
                type="text"
                placeholder="Title"
                value={tempName || ''}
                onChange={(e) => setTempName(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
        </div>

        <section className="h-auto w-full flex flex-col justify-evenly flex-nowrap md:flex-row items-center md:items-start">
          <div className="w-full max-w-xl h-full p-3">
            <Card className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <CardHeader>
                <CardTitle>Content</CardTitle>
                <CardDescription>
                  These are the main data that will be used to build your email template.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-[min-content] items-center gap-4 md:grid-cols-4">
                    <Label className="text-right">Title</Label>
                    <Input
                      type="text"
                      placeholder="Title"
                      value={template?.title || ''}
                      onChange={(e) =>
                        setTemplate({ ...template, title: e.target.value })
                      }
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-[min-content] items-start gap-4 md:grid-cols-4">
                    <Label className="text-right">Description</Label>
                    <Textarea
                      placeholder="Description"
                      value={template?.description || ''}
                      onChange={(e) =>
                        setTemplate({ ...template, description: e.target.value })
                      }
                      className="col-span-3 resize-none"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right">Font color</Label>
                    <ColorPicker
                      key={'dkklkasjaksdo'}
                      id={'dkklkasjaksdo'}
                      value={template?.color}
                      onChange={(color: string) => {
                        setTemplate({ ...template, color: color })
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right">color</Label>
                    <ColorPicker
                      key={'dkjaksopo'}
                      id={'dkjaksopo'}
                      value={template?.bg_color}
                      onChange={(color: string) => {
                        setTemplate({ ...template, bg_color: color })
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-[min-content] items-start gap-4 md:grid-cols-4">
                    <Label className="text-right">Picture</Label>
                    <div className="col-span-3">
                      <Input
                        id="picture"
                        type="file"
                        accept="image/png, image/jpg, image/webp"
                        onChange={(e) => uploadFile(e)}
                        disabled={uploading}
                      />
                      <p className="col-span-3 text-gray-500">
                        Max file size: 2MB. PNG, JPG, WEBP
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <br />
            <Card className="shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <CardHeader>
                <CardTitle>Button</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-start gap-2 flex-wrap md:grid md:grid-cols-3">
                  <div
                    className={`border-2 ${
                      template?.btn?.type === 0 ? 'border-gray-300' : 'border-transparent'
                    } rounded-lg`}
                    onClick={() => toggleBTN(0)}
                  >
                    <BtnOne
                      color={template?.btn?.color}
                      bg_color={template?.btn?.bg_color}
                    />
                  </div>
                  <div
                    className={`border-2 ${
                      template?.btn?.type === 1 ? 'border-gray-300' : 'border-transparent'
                    } rounded-lg`}
                    onClick={() => toggleBTN(1)}
                  >
                    <BtnTwo
                      color={template?.btn?.color}
                      bg_color={template?.btn?.bg_color}
                    />
                  </div>
                  <div
                    className={`border-2 ${
                      template?.btn?.type === 2 ? 'border-gray-300' : 'border-transparent'
                    } rounded-lg`}
                    onClick={() => toggleBTN(2)}
                  >
                    <BtnThree
                      color={template?.btn?.color}
                      bg_color={template?.btn?.bg_color}
                    />
                  </div>
                </div>
                <br />
                <div className="flex justify-start gap-2 flex-wrap md:grid md:grid-cols-3">
                  <div
                    className={`border-2 ${
                      template?.btn?.type === 3 ? 'border-gray-300' : 'border-transparent'
                    } rounded-lg`}
                    onClick={() => toggleBTN(3)}
                  >
                    <BtnFour
                      color={template?.btn?.color}
                      bg_color={template?.btn?.bg_color}
                    />
                  </div>
                  <div
                    className={`border-2 ${
                      template?.btn?.type === 4 ? 'border-gray-300' : 'border-transparent'
                    } rounded-lg`}
                    onClick={() => toggleBTN(4)}
                  >
                    <BtnFive
                      color={template?.btn?.color}
                      bg_color={template?.btn?.bg_color}
                    />
                  </div>
                  <div
                    className={`border-2 ${
                      template?.btn?.type === 5 ? 'border-gray-300' : 'border-transparent'
                    } rounded-lg`}
                    onClick={() => toggleBTN(5)}
                  >
                    <BtnSix
                      color={template?.btn?.color}
                      bg_color={template?.btn?.bg_color}
                    />
                  </div>
                </div>
                <br />
                <hr />
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right">Button text</Label>
                    <Input
                      type="text"
                      placeholder="Button text"
                      value={template?.btn?.at || ''}
                      onChange={(e) =>
                        setTemplate({
                          ...template,
                          btn: { ...template?.btn, at: e.target.value },
                        })
                      }
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right">Button color</Label>
                    <ColorPicker
                      key={'dkjaksdo'}
                      id={'dkjaksdo'}
                      value={template?.btn?.bg_color}
                      onChange={(color: string) => {
                        setTemplate({
                          ...template,
                          btn: { ...template?.btn, bg_color: color },
                        })
                      }}
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right">Button font color</Label>
                    <ColorPicker
                      key={'dkjaksdopopopopo'}
                      id={'dkjaksdopopopopo'}
                      value={template?.btn?.color}
                      onChange={(color: string) => {
                        setTemplate({
                          ...template,
                          btn: { ...template?.btn, color: color },
                        })
                      }}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button disabled={loading} onClick={() => updateTemplate(template)}>
                  Save changes
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="w-[176px] h-[406px] my-3 relative">
            <MobilePreview
              key={1}
              title={template?.title}
              description={template?.description}
              color={template?.color}
              bg_color={template?.bg_color}
              btn={template?.btn}
              imgURL={template?.imgURL}
            />
          </div>
        </section>
      </div>
    </AuthenticatedRoute>
  )
}
