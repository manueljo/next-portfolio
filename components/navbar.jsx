
const Navbar = () => {
  return (
    <header className=" fixed top-0 h-16 p-4 dark:bg-black dark:text-white text-black flex items-center justify-between left-1/2 -translate-x-1/2 max-w-[1024px] w-full backdrop-blur-sm bg-background/80 z-10 mt-0.5 rounded-lg">
        <div>
            <h2 className="">manueljo</h2>
        </div>
        <nav className="flex justify-end items-center gap-4">
            <a href="#about" className="hover:text-gray-500">About</a>
            <a href="#projects" className="hover:text-gray-500">Projects</a>
            <a href="#contact" className="hover:text-gray-500">Contact</a>
        </nav>
    </header>
  )
}

export default Navbar