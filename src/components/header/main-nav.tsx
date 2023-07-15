'use client'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { Icons } from '@/components/icons'

export default function MainNav() {
  return (
    <div className="mr-4 flex">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" aria-label="logo" />
        <span className="hidden font-bold md:inline-block ">{siteConfig.name}</span>
      </Link>
    </div>
  )
}
