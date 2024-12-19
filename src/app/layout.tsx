import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import '@/assets/styles/globals.css'
import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'

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
  description: 'Визовый центр в Минске! Подготовка и оформление документов на визу от 2000 рублей! Помощь при получение визы в Европу, Америку, Англию, Канаду, Азию',
  keywords: ['визовый центр в Минске', 'подготовка визы в Минске', 'подача на визу в евпропу', 'интернет-маркетинге'],
  openGraph: {
    type: 'website',
    locale: ru,
    url: 'https://starvisa.by',
    title: 'Визовый центр в Минске | StarVisa',
    description: 'Визовый центр в Минске! Подготовка и оформление документов на визу от 2000 рублей! Помощь при получение визы в Европу, Америку, Англию, Канаду, Азию',
    siteName: 'starvisa.by',
    images: '/apple-icon.png'
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable}`}>
        <div className='wrapper'>
          <Header />
          <main className='flex-1 overflow-x-hidden'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
