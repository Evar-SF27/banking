'use client'

import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const MobileSideBar = ({ user }: MobileNavProps) => {
    const pathname = usePathname()
  return (
    <section className='w-full max-w-[264px]'>
        <Sheet>
            <SheetTrigger>
                <Image src='/icons/hamburger.svg' height={30} width={30} className='cursor-pointer' alt='menu' />
            </SheetTrigger>
            <SheetContent side={'left'} className='border-none bg-white'>
                <Link href='/' className='flex cursor-pointer items-center gap-1 px-4'>
                    <Image src='/icons/logo.svg' width={34} height={34} alt='Bank' />
                    <h1 className='sidebar-logo text-[26px] font-bold text-black-1'>ESX Bank</h1>
                </Link>
                <div className='mobilenav-sheet'>
                    <SheetClose asChild>
                        <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                            {sidebarLinks.map((link) => {
                                const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`)
                                return (
                                    <SheetClose asChild key={link.route}>
                                        <Link href={link.route} key={link.label} className={cn('mobilenav-sheet_close', { 'bg-bank-gradient': isActive })}>
                                            <Image src={link.imgURL} alt={link.label} width={20} height={20} className={cn({ 'brightness-[3] invert-0': isActive })} />
                                            <p className={cn('text-16 font-semibold text-black-2', { 'text-white' : isActive })}>
                                                {link.label}
                                            </p>
                                        </Link>
                                    </SheetClose>
                                )
                            })}
                            USER
                        </nav>
                    </SheetClose>
                    FOOTER
                </div>
            </SheetContent>
        </Sheet>
    </section>
  )
}

export default MobileSideBar
