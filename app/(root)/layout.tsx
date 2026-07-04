import NavbarDesktop from "@/components/NavbarDesktop";
import NavbarMobile from "@/components/NavbarMobile";
import type { ReactNode } from "react";

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <main>
            <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0B0B0B]/85 backdrop-blur-xl">
                <NavbarDesktop />
                <NavbarMobile />
            </header>
            <div className="lg:mt-20 mt-16">
                {children}
            </div>
        </main>
    )
}