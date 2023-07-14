import { Metadata } from 'next'
import EditTemplate from './editTemplate'

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const title = `Template ${params?.id}` as string
  return {
    title: title,
  }
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <EditTemplate params={params} />
    </>
  )
}
