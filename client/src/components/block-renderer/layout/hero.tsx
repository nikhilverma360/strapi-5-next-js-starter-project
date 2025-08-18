import type { HeroProps } from "@/types";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StrapiImage } from "@/components/custom/strapi-image";

export function Hero(data: Readonly<HeroProps>) {
  if (!data) return null;
  const { heading, text, topLink, buttonLink, image } = data;
  return (
    <section className="w-full min-h-1/2 flex items-center relative overflow-hidden pt-48" style={{ background: 'linear-gradient(180deg, #397BA7 4%, #7EBFDB 100%)' }}>
      {/* Background lines overlay */}
      <div className="absolute inset-0 z-0 -top-100">
        <Image
          src="/hero_bg.png"
          alt="Background lines"
          fill
          className="object-cover opacity-"
          priority
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-20 relative z-10">
        <div className="flex flex-col items-center text-center gap-12">
          {topLink && (
            <div className="flex cursor-pointer items-center gap-1 rounded-full border border-white/20 bg-white/10 px-4 py-2 hover:bg-white/20 transition-all duration-200">
              <Link
                href={topLink.href}
                target={topLink.isExternal ? "_blank" : "_self"}
                className="flex items-center justify-center gap-1 text-sm text-white"
              >
                {topLink.text}
                <ArrowRight size={16} />
              </Link>
            </div>
          )}

          <div className="max-w-4xl mx-auto">
            <h1 className="text-white font-heading text-6xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {heading?.split('\\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < heading.split('\\n').length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="text-white/90 font-heading text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              {text}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            {buttonLink &&
              buttonLink.map((link, index) => (
                <Button
                  key={link.text}
                  size="lg"
                  asChild
                  className={`h-12 px-8 cursor-pointer text-base font-medium transition-all duration-200 hover:scale-105 transform ${index === 0
                      ? "bg-[#FFDD86] hover:bg-yellow-500 text-black shadow-lg"
                      : "bg-[#272731] hover:bg-black text-white shadow-lg"
                    }`}
                >
                  <Link href={link.href} target={link.isExternal ? "_blank" : "_self"}>
                    {link.text}
                  </Link>
                </Button>
              ))}

          </div>

          <div className="relative">
            <div className="relative">
              <StrapiImage
                src={image?.url ?? ""}
                alt="Financial Dashboard"
                width={1608}
                height={1200}
                priority
                className="rounded-xl w-full h-auto 
                          min-w-[320px] sm:min-w-[480px] md:min-w-[640px] lg:min-w-[900px] xl:min-w-[1400px]
                          object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-white/10 [filter:blur(120px)] rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
