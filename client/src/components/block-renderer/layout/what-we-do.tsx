import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const WhatWeDoSection = (data: any) => {
  const cards = [
    {
      id: 1,
      title: "MULTI-ASSET RESEARCH & STRATEGY ENGINEERING",
      image:
        "/wwd1.png",
    },
    {
      id: 2,
      title: "ALPHA STRATEGY DEVELOPMENT",
      image:
        "/wwd2.png",
    },
    {
      id: 3,
      title: "MULTI-ASSET RESEARCH & STRATEGY ENGINEERING",
      image:
        "/wwd3.png",
    },
    {
      id: 4,
      title: "ALPHA STRATEGY DEVELOPMENT",
      image:
        "/wwd4.png",
    },
  ];

  return (
    <section id="what-we-do" className="w-full px-5 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
      {/* HEADER — responsive  */}
      <div className="mx-auto w-full max-w-[1120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-6 items-start">
          {/* Left: label + title (raised slightly on lg) */}
          <div className="lg:col-span-7 lg:-mt-6">
            <span className="block font-['Outfit'] text-[#0071ff] text-sm sm:text-[15px] leading-[19.5px] font-medium">
              WORKS
            </span>
            <h2 className="mt-1 sm:mt-2 font-['Outfit'] font-medium text-black dark:text-white
                           text-[36px] sm:text-[48px] md:text-[60px] lg:text-[68px]
                           leading-[1.08] tracking-[-0.2px]">
              What We Do
            </h2>
          </div>

          {/* Right: copy + CTA (right aligned on lg) */}
          <div className="lg:col-span-5 lg:mt-4 lg:justify-self-end max-w-[520px]">
            <p className="font-['Mulish'] text-[15px] sm:text-[16px] md:text-[17px] leading-[24px] sm:leading-[25.5px] dark:text-white text-black/90">
              Explore a showcase of our works, where innovation meets execution.
              Each creation reflects our commitment to delivering exceptional
              solutions that bring your vision to life.
            </p>

            <Button className="mt-6 sm:mt-8 md:mt-10 
                            h-[48px] sm:h-[54px] md:h-[66px] 
                            w-[160px] sm:w-[180px] md:w-[206px] 
                            rounded-[100px] dark:bg-[#1D85C1] bg-black text-white 
                            font-['Mulish'] font-bold 
                            text-xs sm:text-sm md:text-[17px] 
                            flex items-center justify-center gap-1 sm:gap-2">
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 min-w-[40px] min-h-[40px]"
              >
                <path 
                  d="M34.0502 34.0562C41.7576 26.3487 41.7576 13.8515 34.0502 6.14405C26.3427 -1.56342 13.8455 -1.56342 6.13806 6.14404C-1.5694 13.8515 -1.5694 26.3487 6.13806 34.0562C13.8455 41.7636 26.3427 41.7636 34.0502 34.0562ZM9.66057 25.4834L18.3566 16.7874L13.4385 11.8693L28.0026 12.1917L28.3249 26.7558L23.1412 21.572L14.4452 30.268L9.66057 25.4834Z" 
                  fill="currentColor"
                  className="text-[#1D85C1] dark:text-white"
                />
              </svg>
            <span>LEARN MORE</span>
          </Button>
          </div>
        </div>
      </div>

      {/* BANNERS — responsive sizing per breakpoint */}
      <div className="mt-10 sm:mt-12 flex flex-col items-center gap-14 sm:gap-16 lg:gap-20 relative">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            className={`
              relative w-full
              /* widths by breakpoint */
              max-w-full sm:max-w-[720px] md:max-w-[860px] lg:max-w-[980px]
              overflow-hidden border-0 ring-1 ring-black/5
              rounded-[14px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-[18px]
              shadow-[0_40px_80px_-28px_rgba(0,0,0,0.30)]
              hover:shadow-[0_60px_120px_-36px_rgba(0,0,0,0.35)]
              transition-all duration-300
              sticky top-0 z-${100 + index}
            `}
          >
            <CardContent className="p-0">
              <div
                className="
                  relative w-full
                  /* heights by breakpoint to keep the feel */
                  h-[500px] sm:h-[380px] md:h-[420px] lg:h-[500px]
                  bg-cover bg-center
                "
                style={{ backgroundImage: `url(${card.image})` }}
                aria-label={card.title}
              >
                {/* Taller bottom gradient for readability */}
                <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                {/* Centered title */}
                <div className="absolute left-1/2 bottom-4 sm:bottom-6 md:bottom-7 lg:bottom-8 -translate-x-1/2">
                  <h3 className="max-w-[90vw] sm:max-w-[620px] md:max-w-[680px]
                                 font-['Mulish'] font-extrabold text-white uppercase tracking-[0.04em]
                                 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]
                                 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] text-center">
                    {card.title}
                  </h3>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};