import { Navigations } from "@/settings/navigation"
import { LuArrowUpRight } from "react-icons/lu"

import { SheetClose } from "@/components/ui/sheet"
import Anchor from "@/components/navigation/anchor"
import { Logo } from "@/components/navigation/logo"
import { SheetLeft } from "@/components/navigation/sidebar"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full h-16 border-b bg-gradient-to-br from-gray-950 to-gray-800 md:px-4 px-2 shadow-lg shadow-black/20">
      <div className="mx-auto flex h-full items-center justify-between p-1 sm:p-3 md:gap-2">
        <div className="flex items-center gap-5">
          <SheetLeft />
          <div className="flex items-center gap-6">
            <div className="md:flex">
              <Logo />
            </div>
            <div className="hidden md:flex items-center gap-5 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">{/* <ModeToggle /> */}</div>
      </div>
    </nav>
  )
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {Navigations.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-400"
            absolute
            className="flex items-center gap-1 text-sm text-white"
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
          >
            {item.title}{" "}
            {item.external && (
              <LuArrowUpRight
                className="w-3 h-3 align-super text-yellow-400"
                strokeWidth={3}
              />
            )}
          </Anchor>
        )
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            <div className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-400">
              {Comp}
            </div>
          </SheetClose>
        ) : (
          Comp
        )
      })}
    </>
  )
}
