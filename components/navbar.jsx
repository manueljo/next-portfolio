import { Github, Icon, Linkedin } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import Link from "next/link"

const Navbar = () => {
  return (
    <header className=" fixed top-3 h-16 p-4 dark:text-white text-black flex items-center justify-between left-1/2 -translate-x-1/2 max-w-[1440px] w-full backdrop-blur-sm bg-background/80 z-10 mt-0.5 rounded-lg">
        <div>
            <h2 className="">manueljo</h2>
        </div>
        <nav className="flex justify-end items-center gap-4">
            <Link href="github.com" className="text-sm"><Linkedin/></Link>
            <Link href="github.com" className="text-sm"><Github/></Link>
            <ModeToggle />
        </nav>
    </header>
  )
}

export default Navbar