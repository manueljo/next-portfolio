import React from "react";
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "./ui/kibo-ui/marquee";

export default function Tools() {
  return (
    <section className="pt-20 max-w-[1024px] mx-auto px-4">
      <h2 className="color-foreground text-3xl mb-5">Tools</h2>
      <div className="flex size-full items-center justify-center bg-background">
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent>
            {new Array(10).fill(null).map((_, index) => (
              <MarqueeItem className="h-32 w-32" key={index}>
                <img
                  alt={`Placeholder ${index}`}
                  className="overflow-hidden rounded-full"
                  src={`https://placehold.co/128x128?random=${index}`}
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </section>
  );
}
