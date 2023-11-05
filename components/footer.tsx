import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer: React.FC = () => (
  <footer className='min-h-full flex gap-8 items-center justify-center  text-white p-20 mt-[100px] h-9'>
    <Image 
      src='/assets/logo.svg'
      width={18}
      height={18}
      alt='logo'
    />
    <Link href='/terms'>Terms</Link>
    <Link href='/privacy'>Privacy Policy</Link>
    <Link href='/github'>GitHub</Link>
    <Link href='/twitter'>Twitter</Link>
  </footer> 
)

export default Footer

