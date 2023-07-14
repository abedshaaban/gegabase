import Stats from './stats'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const title = `Stats ${params?.id}` as string
  return {
    title: title,
  }
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <Stats params={params} />
    </>
  )
}
