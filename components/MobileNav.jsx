"use client"

import {Sheet, SheetContent, SheetTrigger, SheetTitle} from "@/components/ui/sheet"
import {CiMenuFries} from "react-icons/ci"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Navigasyon linkleri
const links = [
    {
        name: "Ana Sayfa",
        href: "/"
    },
    {
        name: "Hizmetler",
        href: "/services"
    },
    {
        name: "Özgeçmiş",
        href: "/resume"
    },
    {
        name: "Çalışmalarım",
        href: "/work"
    },
    {
        name: "Bana Ulaşın",
        href: "/contact"
    },
]

const MobileNav = () => {
    // Aktif sayfayı belirlemek için pathname'i al
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <CiMenuFries className="text-3xl cursor-pointer" />
            </SheetTrigger>

            <SheetContent className="bg-[#1a1a1a]/90 backdrop-blur-md border-l border-white/10 flex flex-col">
                <div className="flex-1 flex flex-col items-center justify-center gap-8">
                    <SheetTitle className="text-2xl font-bold text-white mb-4">
                        Menü
                    </SheetTitle>
                    {links.map((link, index) => (
                        <Link 
                            href={link.href} 
                            key={index}
                            className={`text-xl hover:text-accent transition-colors ${
                                pathname === link.href ? 'text-accent' : 'text-white'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav