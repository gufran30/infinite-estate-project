import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/" className="block h-15 w-80 overflow-hidden">
      <Image
        src="/logoift.webp"
        alt="Company Logo"
        width={1280}
        height={800}
        priority
        className="w-full h-full object-cover scale-115"
      />
    </Link>
  )
}
