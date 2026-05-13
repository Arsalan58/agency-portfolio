import './globals.css'

export const metadata = {
  title: 'CODEARA — Digital Design Studio',
  description: 'Award-winning web design and development studio.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
