import TemplateRenderer from './template'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const res: any = await fetch(
    `${process.env.NEXT_PUBLIC_WEBSITE_NAME}/api/template?id=${params?.id}`,
    {
      cache: 'no-store',
    }
  )
  const { data } = await res.json()

  return {
    title: { absolute: data?.body?.title },
    description: data?.body?.description,
    robots: {
      index: false,
    },
  }
}

export default function Page() {
  return (
    <>
      <TemplateRenderer />
    </>
  )
}
