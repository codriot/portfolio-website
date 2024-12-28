"use client"

import {Sheet ,SheetContent,SheetTrigger} from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {CiMenuFries} from "react-icons/ci"

const links=[
    {
        name:"home",
        href:"/"
    },
    {
        name:"services",
        href:"/resume"
    },
    {
        name:"resume",
        href:"/resume"
    },
    {
        name:"work",
        href:"/work"
    },
    {
        name:"contact",
        href:"/contact"
    },
]

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <CiMenuFries className="flex justify-center items-center"/>

        </SheetTrigger>

        <SheetContent className="flex flex-col">
            <div className=""></div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav