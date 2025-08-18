import React from "react";
import type { ContentWithImageProps } from "@/types";
import { cn } from "@/lib/utils";
import { ContentAboutUs } from "./content-about-us";
import { VisionSection } from "./our-vission";
import { CoreValues } from "./core-values";
import { WhatWeDoSection } from "./what-we-do";


export function ContentWithImage(data: Readonly<ContentWithImageProps>) {
  if (!data ) return null;
  const { reverse, image, heading, subHeading, text } = data;
  const revereStyle = reverse ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <section
      className=""
    >
      <ContentAboutUs data={data} />
      <VisionSection data={data} />
      <CoreValues data={data} />
      <WhatWeDoSection data={data} />
    </section>
  );
}
