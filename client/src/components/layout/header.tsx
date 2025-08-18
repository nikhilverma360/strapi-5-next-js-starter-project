"use client";
import type { NavLink } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, X, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/custom/mobile-navbar";
import { getStrapiMedia } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface HeaderProps {
  data: {
    logoText: string;
    logo: {
      url: string;
    };
    navItems: NavLink[];
    cta: NavLink;
  };
}

function Header1({logoText, logo, navItems, cta}: {logoText: string, logo: {url: string}, navItems: NavLink[], cta: NavLink}){
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full absolute top-0 left-0 right-0 z-50">
    <div className="pr-4 md:pr-8 lg:pr-16 xl:pr-24 flex justify-between gap-10 py-4">
      <Link href="/" className="flex items-center gap-3">
        <Image src={getStrapiMedia(logo.url) || ""} alt={logoText} width={200} height={200} />
      </Link>
      <div className="flex lg:gap-16 xl:gap-24 gap-16">
        <nav className="hidden items-start mt-8 gap-8 lg:flex">
          {navItems?.map((item, index) => (
            <Link
              href={item.href}
              className="flex cursor-pointer items-center gap-1 text-white text-sm transition-colors hover:text-blue-100 hover:scale-105 transform duration-200"
              key={item.text}
              target={item.isExternal ? "_blank" : "_self"}
            >
              {item.text}
              {(index === 1 || index === 3) && (
                <ChevronDown size={16} className="transition-transform duration-200" />
              )}
            </Link>
          ))}
        </nav>
        {cta && (
          <div className="hidden items-start mt-6 gap-2 lg:flex">
            <Button asChild className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 transform shadow-lg">
              <Link
                href={cta.href}
                className="cursor-pointer"
                target={cta.isExternal ? "_blank" : "_self"}
              >
                {cta.text}
              </Link>
            </Button>
          </div>
        )}
      </div>
      <MobileNavbar>
        <div className="rounded-b-lg bg-transparent border-t border-white/20 backdrop-blur-sm py-4 container shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            {navItems?.map((item, index) => (
              <Link
                key={item.text}
                href={item.href}
                className="flex w-full cursor-pointer items-center justify-between rounded-md p-3 font-medium text-white hover:text-blue-100 hover:bg-white/10 transition-all duration-200"
              >
                {item.text}
                {(index === 1 || index === 3) && (
                  <ChevronDown size={16} className="transition-transform duration-200" />
                )}
              </Link>
            ))}

            {cta && (
              <Button asChild size="lg" className="mt-4 w-full bg-black hover:bg-gray-800 text-white rounded-full">
                <Link
                  href={cta.href}
                  className="cursor-pointer"
                  target={cta.isExternal ? "_blank" : "_self"}
                >
                  {cta.text}
                </Link>
              </Button>
            )}
          </nav>
        </div>
      </MobileNavbar>
    </div>
  </header>
  );
}

export function Header2({logoText, logo, navItems, cta}: {logoText: string, logo: {url: string}, navItems: NavLink[], cta: NavLink}){
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      event.preventDefault()
      const target = document.querySelector(href) as HTMLElement | null
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <nav className="text-white absolute w-full top-0 z-50" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="pr-4 md:pr-8 lg:pr-16 xl:pr-24 flex justify-between gap-10 py-4">
        {/* Logo - Left most */}
        <Link href="/" className="flex items-center">
          <Image 
            src={getStrapiMedia(logo.url) || ""} 
            alt={logoText} 
            width={200} 
            height={200} 
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-48 lg:h-48 object-contain"
          />
        </Link>

        {/* Navigation and CTA - Right most */}
        <div className="flex gap-4">
          <nav className="hidden items-start mt-6 gap-1 lg:flex">
            {navItems?.map((item, index) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
              return (
                <Link
                  href={item.href}
                  className={`flex cursor-pointer items-center gap-1 px-3 py-2 rounded-md transition-all duration-200 text-sm font-medium ${
                    isActive
                      ? 'bg-white text-[#E7C814]' // Active page in golden background
                      : item.text === 'Contact'
                      ? 'bg-white text-gray-800 border border-[#E7C814]' // Contact with golden border
                      : 'bg-white text-gray-800 hover:bg-gray-50' // Default white background
                  }`}
                  key={item.text}
                  target={item.isExternal ? "_blank" : "_self"}
                >
                  {item.text}
                  {(index === 1 || index === 3) && (
                    <ChevronDown size={16} className="transition-transform duration-200" />
                  )}
                </Link>
              )
            })}
          </nav>
          {cta && (
            <div className="hidden items-start mt-6 gap-2 lg:flex">
              <Button asChild className="bg-[#E7C814] hover:bg-[#F5D76E] text-[#2C3E50] px-6 py-2 rounded-md font-medium transition-all duration-200 hover:scale-105 transform shadow-lg">
                <Link
                  href={cta.href}
                  className="cursor-pointer"
                  target={cta.isExternal ? "_blank" : "_self"}
                >
                  {cta.text}
                </Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#16213e] border-t border-[#2C3E50] rounded-b-lg" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
          <div className="px-4 py-4 space-y-3">
            {navItems?.map((item, index) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.text}
                  href={item.href}
                  className={`block py-2 px-3 rounded-md transition-colors duration-200 text-sm ${
                    isActive
                      ? 'bg-[#E7C814] text-[#2C3E50] font-semibold' // Active page in golden background
                      : 'text-white hover:bg-white/10' // Default white text with hover
                  }`}
                  target={item.isExternal ? "_blank" : "_self"}
                >
                  {item.text}
                </Link>
              )
            })}
            {cta && (
              <Button asChild size="lg" className="mt-4 w-full bg-[#E7C814] hover:bg-[#F5D76E] text-[#2C3E50] rounded-md">
                <Link
                  href={cta.href}
                  className="cursor-pointer"
                  target={cta.isExternal ? "_blank" : "_self"}
                >
                  {cta.text}
                </Link>
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export function Header({ data }: Readonly<HeaderProps>) {  
  const pathname = usePathname();
  if (!data) return null;
  const { logoText, logo,  navItems, cta } = data;
  return (
    <>
    {/* if "/" show header1 else show header2 */}
    <Header1 logoText={logoText} logo={logo} navItems={navItems} cta={cta} />
    {/* {pathname === "/" ? <Header1 logoText={logoText} logo={logo} navItems={navItems} cta={cta} /> : <Header2 logoText={logoText} logo={logo} navItems={navItems} cta={cta} />} */}
    </>
  );
}
