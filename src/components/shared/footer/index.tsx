import React from 'react'
import Logo from '@/components/shared/logo'
import { contacts, services } from '@/content'
import Link from 'next/link'
import { Socials } from '@/components/shared/socials'
import { getSiteInfo } from '@/lib/api/siteInfo'

const Footer = async () => {  
  const siteInfo = await getSiteInfo();

  return (
    <footer className='py-8'>
      <div className="container">
        <div className="section-inner">
          <ul className="flex flex-col md:flex-row flex-wrap justify-between gap-8">
            <li className='min-w-[25%] flex flex-col gap-8'>
              <Logo />
              <ul>
                {
                  contacts.map(({ label, href, name }) => {
                    const isEmail = name === 'email'
                    return (
                      <li key={label} className='text-sm leading-relaxed'>
                        <Link href={`${href}`} className={isEmail ? 'text-link' : ''}>{label}</Link>
                      </li>
                    )
                  })
                }
              </ul>
              <Socials className='self-start' />
              <p className='text-sm leading-relaxed'>
                Время работы:
                <br />
                {siteInfo?.timeline}
              </p>
            </li>
            <li className='min-w-[25%] space-y-3'>
              <p className='text-base font-medium text-foreground/50 uppercase'>Получить визу</p>
              <ul>{
                services.map(({ title, link }) => {
                  return (
                    <li key={title} className='text-sm leading-relaxed'>
                      <Link href={`${link}`}>{title}</Link>
                    </li>
                  )
                })
              }
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer