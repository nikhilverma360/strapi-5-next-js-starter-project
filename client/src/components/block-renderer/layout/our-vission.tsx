export const VisionSection = (data: any) => {
    const sections = [
      {
        id: "mission",
        title: "Our Mission",
        content:
          "To Be At The Forefront Of Global Financial Strategy By Fusing Macroeconomic Insight, Cross-asset Analysis, And Cutting-edge Trading Execution Into Adaptive Strategies That Consistently Generate Long-term Value.",
        mainImage: "/mission-main.png",
        secondaryImage:
          "/mission-secondary.png",
      },
      {
        id: "vision",
        title: "Our Vision",
        content:
          "To Create A Performance-first, Research-intense Financial Ecosystem Where Innovation Is Structured, Data Drives Every Decision, And Trading Remains Independent Of External Influence.",
        mainImage: "/vision-main.png",
        secondaryImage:
          "/vision-secondary.png",
      },
    ];
  
    return (
      <section className="w-full relative">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`w-full min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 relative ${
              index === 0 ? 'sticky top-0 z-10' : 'relative z-20'
            }`}
            style={{ 
              background: 'linear-gradient(135deg, #439ED6 0%, #6BB6E8 100%)'
            }}
          >
            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h2 className="font-medium font-['Outfit'] text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 sm:mb-12 md:mb-16">
                {section.title}
              </h2>
  
              <div className="relative max-w-full lg:max-w-4xl lg:ml-auto">
                <p className="font-medium font-['Outfit'] text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed mb-10 sm:mb-14 md:mb-20">
                  {section.content}
                </p>
  
                {/* Mobile: Stack images vertically */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8">
                  {/* Main image - responsive sizing */}
                  <div className="w-full sm:flex-1">
                    <img
                      className="w-full 
                                 object-cover rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl"
                      alt="Business people in professional setting"
                      src={section.mainImage}
                    />
                  </div>
  
                  {/* Secondary image - hidden on mobile, shown on tablet+ */}
                  <div className="w-full sm:w-auto">
                    <div
                      className="w-full sm:w-[360px] md:w-[400px] lg:w-[400px] 
                                 h-[240px] sm:h-[180px] md:h-[220px] lg:h-[256px] 
                                 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl
                                 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${section.secondaryImage})`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  };