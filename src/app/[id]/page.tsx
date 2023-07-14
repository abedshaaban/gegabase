'use client'
import { Template } from '@/types/template'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { validate } from 'email-validator'
import { useSupabase } from '@/SupabaseProvider'

const BtnOne = dynamic(() => import('@/components/templateUI/btn-one'), { ssr: false })
const BtnTwo = dynamic(() => import('@/components/templateUI/btn-two'), { ssr: false })
const BtnThree = dynamic(() => import('@/components/templateUI/btn-three'), {
  ssr: false,
})
const BtnFour = dynamic(() => import('@/components/templateUI/btn-four'), { ssr: false })
const BtnFive = dynamic(() => import('@/components/templateUI/btn-five'), {
  ssr: false,
})
const BtnSix = dynamic(() => import('@/components/templateUI/btn-six'), { ssr: false })

type Email = {
  id: string
  parent: string
}

export default function Page({ params }: { params: { id: string } }) {
  const { supabase } = useSupabase()

  const [template, setTemplate] = useState<Template>()
  const [templateMetaData, setTemplateMetaData] = useState<Email>()
  const [inputValue, setInputValue] = useState('')
  const [successLabel, setSuccessLabel] = useState('')
  const [errorLabel, setErrorLabel] = useState('')
  const [loading, setLoading] = useState(false)

  const handleEmailSubmit = async () => {
    setLoading(true)
    if (validate(inputValue)) {
      setErrorLabel('')
      try {
        let { error } = await supabase.from('emails').insert([
          {
            email: inputValue,
            template_id: templateMetaData?.id,
            parent: templateMetaData?.parent,
          },
        ])

        if (error) {
          console.log(error)
          setErrorLabel(error?.message)
        } else {
          setSuccessLabel('Email sent')
        }

        setInputValue('')
      } catch (error) {
        console.log('Error loading user data!', error)
      }
    } else {
      setErrorLabel('Invalid email format')
      setSuccessLabel('')
    }
    setLoading(false)
  }

  const getTemplate = async () => {
    try {
      let { data, error, status } = await supabase
        .from('templates')
        .select(`id, parent, body`)
        .eq('id', params?.id)
        .single()

      if (error && status !== 406) {
        console.log(error)
      }

      if (data) {
        setTemplate(data?.body)
        setTemplateMetaData({ id: data?.id, parent: data?.parent })
      }
    } catch (error) {
      console.log('Error loading user data!', error)
    }
  }

  useEffect(() => {
    getTemplate()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {!template ? (
        <div className="w-full bg-white h-auto min-h-screen pt-16 px-4 pb-8 absolute top-0 flex flex-col justify-center items-center gap-9 z-[999]">
          loading...
        </div>
      ) : (
        <div
          style={{ color: template?.color, backgroundColor: template?.bg_color }}
          className="w-full h-auto min-h-screen pt-16 px-4 pb-8 absolute top-0 flex flex-col justify-center items-center gap-4 z-[999]"
        >
          <div className="w-full max-w-lg text-center">
            <h1 className="w-full text-xl font-bold mb-4">{template?.title}</h1>
            <p>{template?.description}</p>
          </div>

          <div style={{ color: template?.color }} className="w-full h-5 text-center">
            <div>{successLabel}</div>
            <div>{errorLabel}</div>
          </div>

          {template?.btn?.type === 0 ? (
            <BtnOne
              key={template?.btn?.type}
              at={template?.btn?.at}
              color={template?.btn?.color}
              bg_color={template?.btn?.bg_color}
              isDisabled={loading}
              inputValue={inputValue}
              onInputChange={(input: string) => {
                setInputValue(input)
              }}
              onBtnClick={handleEmailSubmit}
            />
          ) : template?.btn?.type === 1 ? (
            <BtnTwo
              key={template?.btn?.type}
              at={template?.btn?.at}
              color={template?.btn?.color}
              bg_color={template?.btn?.bg_color}
              isDisabled={loading}
              inputValue={inputValue}
              onInputChange={(input: string) => {
                setInputValue(input)
              }}
              onBtnClick={handleEmailSubmit}
            />
          ) : template?.btn?.type === 2 ? (
            <BtnThree
              key={template?.btn?.type}
              at={template?.btn?.at}
              color={template?.btn?.color}
              bg_color={template?.btn?.bg_color}
              isDisabled={loading}
              inputValue={inputValue}
              onInputChange={(input: string) => {
                setInputValue(input)
              }}
              onBtnClick={handleEmailSubmit}
            />
          ) : template?.btn?.type === 3 ? (
            <BtnFour
              key={template?.btn?.type}
              at={template?.btn?.at}
              color={template?.btn?.color}
              bg_color={template?.btn?.bg_color}
              isDisabled={loading}
              inputValue={inputValue}
              onInputChange={(input: string) => {
                setInputValue(input)
              }}
              onBtnClick={handleEmailSubmit}
            />
          ) : template?.btn?.type === 4 ? (
            <BtnFive
              key={template?.btn?.type}
              at={template?.btn?.at}
              color={template?.btn?.color}
              bg_color={template?.btn?.bg_color}
              isDisabled={loading}
              inputValue={inputValue}
              onInputChange={(input: string) => {
                setInputValue(input)
              }}
              onBtnClick={handleEmailSubmit}
            />
          ) : template?.btn?.type === 5 ? (
            <BtnSix
              key={template?.btn?.type}
              at={template?.btn?.at}
              color={template?.btn?.color}
              bg_color={template?.btn?.bg_color}
              isDisabled={loading}
              inputValue={inputValue}
              onInputChange={(input: string) => {
                setInputValue(input)
              }}
              onBtnClick={handleEmailSubmit}
            />
          ) : null}
        </div>
      )}
    </>
  )
}
