import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CoreValues = (data: any) => {
  const coreValues = [
    {
      id: "01",
      title: "Conviction With Discipline",
      description:
        "We make high-conviction decisions rooted in rigorous, multi-layered research and well-defined risk structures.",
    },
    {
      id: "02",
      title: "Research-first Culture",
      description:
        "Our edge is built on actionable insights from macro data, market microstructure, and blockchain analytics.",
    },
    {
      id: "03",
      title: "Independence And Integrity",
      description:
        "We operate exclusively with proprietary capital, ensuring no conflict of interest or outside pressure.",
    },
    {
      id: "04",
      title: "Innovation Within Structure",
      description:
        "From DeFi and AI to central bank modeling, our innovation is always grounded in risk-managed, data-validated systems",
    },
    {
      id: "05",
      title: "Collective Excellence",
      description:
        "Success is shared. Strategies are debated, tested, and refined as a team, without ego.",
    },
    {
      id: "06",
      title: "Long-Term Orientation",
      description:
        "We prioritize sustainable value creation over short-term gains, creating strategies designed to perform through multiple market cycles.",
    },
  ];
  
  const galleryImages = [
    {
      className: "w-full h-full",
      src: "/value-centre.png",
      alt: "Core values main image",
    },
    {
      className: "w-full h-full",
      src: "/value-left.png",
      alt: "Core values left image",
    },
    {
      className: "w-full h-full",
      src: "/value-right.png",
      alt: "Core values right image",
    },
  ];

  return (
    <section className="relative w-full mb-20 py-12 sm:py-16 md:py-20 flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto">
        <span className="text-[#0071ff] text-sm sm:text-[15px] font-medium font-['Outfit',Helvetica] tracking-normal leading-[19.5px]">
          Mission &amp; Vision
        </span>

        <h2 className="mt-3 sm:mt-5 font-['Outfit',Helvetica] font-semibold dark:text-white text-black text-3xl sm:text-4xl md:text-5xl lg:text-[68px] tracking-normal leading-tight sm:leading-[1.2] lg:leading-[81.6px]">
          Our Core Values
        </h2>

        <p className="mt-4 sm:mt-6 font-['Mulish',Helvetica] font-normal dark:text-white text-black text-sm sm:text-base md:text-[17px] tracking-normal leading-relaxed sm:leading-[25.5px] px-4 sm:px-0">
          We specialize in crafting captivating user experiences, turning
          <span className="hidden sm:inline"><br /></span>
          <span className="sm:hidden"> </span>
          innovative concepts into compelling &amp; fully realized solutions
        </p>

        {/* Responsive Button - Centered */}
        <div className="flex justify-center">
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

      {/* Gallery Section - Responsive */}
      <div className="relative mx-auto mt-12 sm:mt-16 md:mt-20 w-full max-w-[1168px] 
                      h-[300px] sm:h-[400px] md:h-[480px] lg:h-[700px]">
        {/* Center card */}
        <Card className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-[75%] sm:w-[65%] md:w-[60%] lg:w-[564px] 
                        h-[220px] sm:h-[320px] md:h-[480px] lg:h-[700px] 
                        z-20 overflow-hidden rounded-xl sm:rounded-2xl 
                        ring-1 ring-black/5 shadow-lg sm:shadow-xl">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${galleryImages[0].src})` }}
            aria-label={galleryImages[0].alt}
          />
        </Card>

        {/* Left card - Hidden on mobile */}
        <Card className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 
                        translate-x-4 sm:translate-x-6 md:translate-x-10 lg:translate-x-16 
                        w-[32%] sm:w-[34%] md:w-[35%] lg:w-[36%] 
                        h-[200px] sm:h-[260px] md:h-[300px] lg:h-[320px] 
                        z-30 overflow-hidden rounded-xl sm:rounded-2xl 
                        ring-1 ring-black/5 shadow-lg sm:shadow-xl">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${galleryImages[1].src})` }}
            aria-label={galleryImages[1].alt}
          />
        </Card>

        {/* Right card - Hidden on mobile */}
        <Card className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 
                        -translate-x-4 sm:-translate-x-6 md:-translate-x-10 lg:-translate-x-16 
                        w-[32%] sm:w-[34%] md:w-[35%] lg:w-[36%] 
                        h-[200px] sm:h-[260px] md:h-[300px] lg:h-[320px] 
                        z-30 overflow-hidden rounded-xl sm:rounded-2xl 
                        ring-1 ring-black/5 shadow-lg sm:shadow-xl">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${galleryImages[2].src})` }}
            aria-label={galleryImages[2].alt}
          />
        </Card>
      </div>

      {/* Core Values Grid - Responsive */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mt-12 sm:mt-16 md:mt-20 w-full">
        {coreValues.map((value, index) => (
          <Card key={index} className="border-none shadow-none bg-transparent
                                      p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl transition-all">
            <CardContent className="flex flex-col sm:flex-row p-0">
              <div className="mb-4 sm:mb-0 sm:mr-6 md:mr-8 flex-shrink-0">
                <div className="w-16 sm:w-20 h-16 sm:h-20 dark:bg-gradient-to-b dark:from-gray-800 dark:to-white
                              bg-gradient-to-b from-black to-gray-300 bg-clip-text 
                              text-transparent font-medium font-['Outfit']
                              text-5xl sm:text-6xl leading-none">
                  {value.id}
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-gray-900 dark:text-white text-xl sm:text-2xl md:text-3xl 
                              font-medium font-['Outfit'] mb-3 sm:mb-4 leading-tight">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-white text-base sm:text-lg leading-relaxed font-['Mulish']">
                  {value.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};