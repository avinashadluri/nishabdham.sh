import Image from "next/image"
import Link from "next/link"

import { Settings } from "@/lib/meta"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Image
        src={Settings.siteicon}
        alt={`${Settings.title} main logo`}
        width={34}
        height={34}
        loading="lazy"
        decoding="async"
      />
      <h1 className="text-lg font-semibold -ml-6 text-white">
        {Settings.title}
      </h1>
    </Link>
  )
}
