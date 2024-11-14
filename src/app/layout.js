import './globals.css'


export const metadata = {
  title: 'Kaba - Home',
  description: 'Kaba is a Dating APP that ensures Genuine Connections!',
  keywords: 'Kaba, Kaba Date, Dating app, Kaba app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-black text-white'>{children}</body>
    </html>
  )
}
