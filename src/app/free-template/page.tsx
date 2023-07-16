import type { Metadata } from 'next'
import FreeTemplate from './FreeTemplate'

export const metadata: Metadata = {
  title: 'Free Template',
  description:
    'Create a free email template instantly with customizable elements such as title, description, font color, background color, button options, color, and text. Save and publish your content.',
}

export default function Page() {
  return (
    <>
      <FreeTemplate />
    </>
  )
}
