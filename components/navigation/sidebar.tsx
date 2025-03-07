import { LuAlignJustify } from "react-icons/lu"

import { Button } from "@/components/ui/button"
import { DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/navigation/logo"
import { NavMenu } from "@/components/navigation/navbar"
import PageMenu from "@/components/navigation/pagemenu"

export function Sidebar() {
  return (
    <aside className="md:flex hidden flex-[1] min-w-[230px] sticky top-16 flex-col h-[94.5vh] overflow-y-auto border-r shadow-sm">
      <ScrollArea className="py-4">
        <PageMenu />
      </ScrollArea>
    </aside>
  )
}

export function SheetLeft() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden flex">
          <LuAlignJustify className="!size-6 text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="flex flex-col gap-4 px-0 text-white bg-gradient-to-br from-gray-950 to-gray-800 md:bg-gradient-to-br md:from-gray-950 md:to-gray-800"
        side="left"
      >
        <DialogTitle className="sr-only">Menu</DialogTitle>
        <SheetHeader>
          <SheetClose className="px-5" asChild>
            <Logo />
          </SheetClose>
        </SheetHeader>
        <ScrollArea className="flex flex-col gap-4">
          <div className="flex flex-col gap-2.5 mt-3 mx-0 px-5">
            <NavMenu isSheet />
          </div>
          <div className="mx-0 px-5">
            <PageMenu isSheet />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
