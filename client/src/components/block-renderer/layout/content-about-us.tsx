import React from "react";
import { Button } from "@/components/ui/button";
// swap with your assets if you like
const TL = "/au5.png";
const TC = "/au1.png";
const TR = "/au2.png";
const BL = "/au4.png";
const BR = "/au3.png";

export function ContentAboutUs(data: any) {
  if (!data) return null;
  const { reverse, image, heading, subHeading, text } = data;

  return (
    <section id="about" className="dark:text-white py-24">
      {/* Stage ensures exact spacing for the floating cards */}
      <div className="relative mx-auto max-w-[1200px] px-6 sm:px-8 py-20 sm:py-24 lg:py-28 min-h-[640px] md:min-h-[680px] lg:min-h-[720px]">
        {/* ===== Floating image ring ===== */}
        <div className="pointer-events-none absolute inset-0 z-10">
          {/* Top-left (small) */}
          <img
            src={TL}
            alt=""
            className="hidden md:block absolute left-2 lg:left-2 top-12 lg:top-16
                       w-[96px] h-[96px] lg:w-[150px] lg:h-[150px]
                       rounded-[18px] object-cover shadow-[0_30px_80px_-36px_rgba(0,0,0,0.35)]"
          />
          {/* Top-center (small) */}
          <img
            src={TC}
            alt=""
            className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-2 sm:top-4
                       w-[84px] h-[84px] md:w-[96px] md:h-[96px] lg:w-[151px] lg:h-[195px]
                       rounded-[18px] object-cover shadow-[0_30px_80px_-36px_rgba(0,0,0,0.35)]"
          />
          {/* Top-right (small) */}
          <img
            src={TR}
            alt=""
            className="hidden md:block absolute right-10 lg:right-14 top-12 lg:top-16
                       w-[96px] h-[96px] lg:w-[150px] lg:h-[110px]
                       rounded-[18px] object-cover shadow-[0_30px_80px_-36px_rgba(0,0,0,0.35)]"
          />
          {/* Bottom-left (wide) */}
          <img
            src={BL}
            alt=""
            className="hidden sm:block absolute left-16 lg:left-24 bottom-16 lg:bottom-20
                       w-[240px] h-[160px] md:w-[260px] md:h-[172px]
                       rounded-[18px] object-cover shadow-[0_40px_100px_-40px_rgba(0,0,0,0.35)]"
          />
          {/* Bottom-right (wide) */}
          <img
            src={BR}
            alt=""

            className="hidden sm:block absolute right-16 lg:right-24 bottom-16 lg:bottom-20
                       w-[240px] h-[160px] md:w-[100px] md:h-[100px]
                       rounded-[18px] object-cover shadow-[0_40px_100px_-40px_rgba(0,0,0,0.35)]"
          />
        </div>

        {/* ===== Center copy + CTA (never overlaps) ===== */}
        <div className="relative z-20 mx-auto max-w-[900px] mt-20 text-center rounded-2xl backdrop-blur-xs">
          {/* buffer so the top-center image never touches text */}
          <div className="h-4 sm:h-6 lg:h-8" />
          <p className="font-['Urbanist'] text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.7]">
            <span className="font-['Urbanist'] font-semibold ">Banger Finlab</span> is a
            global collective of traders, macro analysts, and quantitative strategists who develop, test,
            and execute proprietary financial strategies. We do not serve external clients or manage
            third-party funds. Instead, we are a self-funded, performance-driven team operating across
            multiple financial domains including traditional markets, crypto, and OTC deal flows.
          </p>

          <Button
            className="mt-10 sm:mt-12 rounded-full bg-[#439ED6] text-white
                       h-[48px] px-6 sm:h-[54px] sm:px-8 lg:h-[56px] lg:px-10
                       font-semibold font-['Urbanist'] text-[15px] sm:text-[16px]
                       shadow-[0_16px_36px_-12px_rgba(67,158,214,0.45)]
                       hover:brightness-95 transition"
          >
            More About Us
          </Button>

          {/* buffer so bottom images have air */}
          {/* <div className="h-24 sm:h-28 lg:h-32" /> */}
        </div>
      </div>
    </section>
  );
}
