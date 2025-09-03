import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";
import hero from '../public/images/hero.png';
import About from "@/components/about";
import Tools from "@/components/tools";
import { Experience } from "@/components/experience";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export default function Home() {
  // const router = useRouter();

  return (
    <>
    <Navbar/>
    <BackgroundBeamsWithCollision className={'h-auto pt-24 px-4'}>
      <div className="h-full max-w-[1024px] w-full mx-auto px-4 flex items-center justify-between flex-wrap">
        <div>
          <h6 className="text-4xl mt-5 mb-5 font-birthstone">Howdy 👋, I&apos;m</h6>
          <h1 className="lg:text-8xl md:text-6xl text-5xl font-sans font-bold mb-5">Emmanuel<br />Joshua</h1>
          <h3 className="text-2xl  mb-8 font-mono">A Software Engineer.</h3>
          <div className="flex gap-4 flex-wrap mb-8">
            <Link download={'Emmanuel_Joshua_Okon.pdf'} href={'/Emmanuel_Joshua_Okon__RESUME_UPDATED.pdf'} className={"md:max-w-[200px] w-full font-mono bg-accent-foreground text-accent border-2 border-accent-foreground flex items-center justify-center rounded-md"}>Resume</Link>
            {/* <Link href={"mailto:manuel.jojoe@gmail.com"} className={"md:max-w-[200px] w-full font-mono bg-accent text-foreground border-2 border-accent-foreground flex items-center justify-center rounded-md h-9"}>Reach Out</Link> */}
          </div>
        </div>
        <div className="relative w-[300px] self-end flex flex-col justify-end">
          <Image src={hero} alt="Portfolio hero image" />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
    <About />
    <Tools />
    <Experience />
    <Projects />
    <Footer />
    </>
  );
}
