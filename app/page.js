import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";
import hero from '../public/images/hero.png';
import About from "@/components/about";
import Tools from "@/components/tools";
import { Experience } from "@/components/experience";

export default function Home() {
  return (
    <>
    <BackgroundBeamsWithCollision className={'h-auto pt-24 px-4'}>
      <div className="h-full max-w-[1024px] w-full mx-auto px-4 flex items-center justify-between flex-wrap">
        <div>
          <h6 className="text-3xl mb-5">Hi There 👋, I&apos;m</h6>
          <h1 className="text-6xl font-bold mb-5">Emmanuel<br />Joshua</h1>
          <h3 className="text-4xl  mb-8">A Software Engineer.</h3>
        </div>
        <div className="relative w-[300px] self-end flex flex-col justify-end">
          <Image src={hero} alt="Portfolio hero image" objectFit="contain" className="" />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
    <About />
    <Tools />
    <Experience />
    </>
  );
}
