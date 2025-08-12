import { Github, Icon, Linkedin, Twitter } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import Link from "next/link"

const Navbar = () => {
  return (
    <header className=" fixed top-3 h-16 p-4 dark:text-white text-black flex items-center justify-between left-1/2 -translate-x-1/2 max-w-[1440px] w-full backdrop-blur-sm bg-background/80 z-10 mt-0.5 rounded-lg">
        <div>
            <h2 className="">manueljo</h2>
        </div>
        <nav className="flex justify-end items-center gap-4">
            <Link href="https://www.linkedin.com/in/emmanuel-joshua-okon/" target="_blank" className="text-sm"><Linkedin/></Link>
            <Link href="https://twitter.com/ejo_manuel" target="_blank" className="text-sm"><Twitter/></Link>
            <Link href="https://github.com/manueljo" target="_blank" className="text-sm"><Github/></Link>
            <ModeToggle />
        </nav>
    </header>
  )
}

export default Navbar