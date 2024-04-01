import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import '@/styles/globals.css'
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
    default: 'Digital Agency | Разработка современных решений для бизнеса',
    template: `%s | Digital Agency | Разработка современных решений для бизнеса`,
  },
  description: 'Совмещая современный стиль, передовые технологии и инновационные подходы в интернет-маркетинге, мы разрабатываем эффективные средства для продвижения вашего бизнеса в онлайн-пространстве.',
  keywords: ['Digital', 'Agency', 'web-Разработка', 'интернет-маркетинге']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} wrapper bg-background-secondary`}>
        <Header />
        <main className='flex flex-col flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
