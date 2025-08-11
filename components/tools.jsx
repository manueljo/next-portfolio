import React from "react";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "./ui/kibo-ui/marquee";
import reactjs from "../public/images/react-seeklogo.svg";
import nextjs from "../public/images/next-js-seeklogo.svg";
import django from "../public/images/django-seeklogo.svg";
import redis from "../public/images/redis-seeklogo.svg";
import docker from "../public/images/docker-seeklogo.svg";
import git from "../public/images/git-seeklogo.svg";
import js from "../public/images/javascript-js-seeklogo.svg";
import python from "../public/images/python-seeklogo.svg";
import postgres from "../public/images/postgresql-seeklogo.svg";
import tailwind from "../public/images/tailwind-css-seeklogo.svg";
import Image from "next/image";

export default function Tools() {
  const tools = [
    {
      alt: "React logo",
      imagePath: reactjs,
    },
    {
      alt: "Nextjs logo",
      imagePath: nextjs,
    },
    {
      alt: "django logo",
      imagePath: django,
    },
    {
      alt: "redis logo",
      imagePath: redis,
    },
    {
      alt: "docker logo",
      imagePath: docker,
    },
    {
      alt: "git logo",
      imagePath: git,
    },
    {
      alt: "javascript logo",
      imagePath: js,
    },
    {
      alt: "python logo",
      imagePath: python,
    },
    {
      alt: "postgreql logo",
      imagePath: postgres,
    },
    {
      alt: "tailwind css logo",
      imagePath: tailwind,
    },
  ];
  return (
    <section className="pt-20 max-w-[1024px] mx-auto px-4">
      <h2 className="color-foreground text-3xl mb-5">Tools</h2>
      <div className="flex size-full items-center justify-center bg-background">
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent>
            {tools.map((tool, index) => (
              <MarqueeItem className="h-35 w-35" key={index}>
                <Image src={tool.imagePath} alt={tool.alt} height={128} width={128} />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </section>
  );
}
