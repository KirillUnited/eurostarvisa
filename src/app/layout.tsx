import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import '@/assets/styles/globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: "--font-sans"
})
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}
export const metadata: Metadata = {
  title: {
    default: 'Визовый центр в Минске | StarVisa',
    template: `%s | StarVisa`,
  },
  description: 'Визовый центр в Москве! Подготовка и оформление документов на визу от 2000 рублей! Помощь при получение визы в Европу, Америку, Англию, Канаду, Азию',
  keywords: ['визовый центр в москве', 'подготовка визы в Минске', 'подача на визу в евпропу', 'интернет-маркетинге']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} wrapper`}>
        <main className='flex flex-col flex-1'>{children}</main>
      </body>
    </html>
  )
}
