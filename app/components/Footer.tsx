import { Github, Instagram } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="text-white-800 flex-between body-text w-full gap-y-10 border-t 
    border-black-400 bg-black-100 px-20 py-12 max-md:flex-col">
      <p>Copyright © 2024 Ohemu Ochai Felix | All Rights Reserved</p>

      <div className="flex gap-x-9">
        <Link href="/terms-of-use">Terms & Conditions</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href='https://www.instagram.com/oysterlabs_/'><Instagram /></Link>
        <Link href="https://github.com/Pheeleex"><Github /></Link>
      </div>
    </footer>
  )
}

export default Footer