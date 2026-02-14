import { Layout } from 'nextra-theme-blog'
import 'nextra-theme-blog/style.css'

export const metadata = {
  title: 'My Portfolio',
  description: 'Built with Nextra',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
