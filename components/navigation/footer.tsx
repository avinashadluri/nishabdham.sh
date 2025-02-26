import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Mail, Twitter } from "lucide-react"

import { Company } from "@/lib/meta"

export function Footer() {
  return (
    <footer className="w-full h-16 border-t">
      <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-0 w-full h-full px-2 sm:py-0 py-3 sm:px-4 lg:px-8 text-sm text-muted-foreground">
        <p className="text-center">
          &copy; {new Date().getFullYear()}{" "}
          <Link className="font-semibold" href={Company.link}>
            {Company.name}
          </Link>
          .
        </p>
        <small>
          మీ అభిప్రాయాలు తెలియజేయడానికి లేదా ఫీడ్‌బ్యాక్ ఇవ్వడానికి
          <Link
            href="/comments"
            className="mx-1 underline hover:text-foreground transition-colors"
          >
            అభిప్రాయాల పేజీ
          </Link>
          కి వెళ్లండి.
        </small>

        <div className="flex items-center gap-4 py-4">
          <Link
            href="mailto:nishabdham.sh@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span className="hidden sm:inline">Email</span>
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61571755285332"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Facebook className="h-5 w-5" />
            <span className="hidden sm:inline">Facebook</span>
          </Link>
          <Link
            href="https://www.instagram.com/nishabdham.sh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span className="hidden sm:inline">Instagram</span>
          </Link>
          <Link
            href="https://twitter.com/nishabdham_sh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Twitter className="h-5 w-5" />
            <span className="hidden sm:inline">Twitter</span>
          </Link>
          {Company.branding !== false && (
            <Link
              className="font-semibold hidden md:flex items-center gap-2"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/hero.png"
                alt="Nishabdham Logo"
                width={30}
                height={30}
              />
            </Link>
          )}
        </div>
      </div>
    </footer>
  )
}
