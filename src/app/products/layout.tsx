import type { Metadata } from 'next'

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ul className='flex gap-4'>
        <li>Fashion</li>
        <li>Sports</li>
        <li>T-Shirt</li>
      </ul>
      {children}
    </>
  )
}
