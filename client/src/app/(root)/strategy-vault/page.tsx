import React from 'react'
import Image from 'next/image'

const StrategyVault: React.FC = () => {


    return (
        <>
            <section id="strategy-vault" aria-label="Strategy Vault">

                {/* Top Banner with Section.png background - Responsive */}
                <div
                    className="relative w-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] flex items-center justify-center overflow-hidden"
                    style={{ background: 'linear-gradient(180deg, #397BA7 4%, #7EBFDB 100%)' }}
                >
                    {/* Fallback img element */}
                    <div className="absolute inset-0 z-0 -top-100">
                        <Image
                            src="/hero_bg.png"
                            alt="Background lines"
                            fill
                            className="object-cover opacity-100"
                            priority
                        />
                    </div>

                    {/* Overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-opacity-20 z-10"></div>

                    {/* Content positioned above the background image - Responsive */}
                    <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-center mb-3 sm:mb-4">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-lg border border-white/30">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                                <p className="text-white text-md font-medium font-['Outfit']">Vault</p>
                            </div>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-['Montserrat']">
                            <span className="text-white font-heading">Strategy</span>{' '}
                            <span className="text-white font-heading">Vault</span>
                        </h1>
                    </div>
                </div>

                {/* Overview Section - Responsive */}
                <div className="bg-[#f5fcff]">
                    <div className="container mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-['Montserrat'] mb-3 sm:mb-4 text-black">Overview</h2>
                            <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 px-4 sm:px-0 font-['Montserrat']">
                                The Strategy Vault is a curated library of internal research frameworks, thematic models, and tactical deployment playbooks. These are NOT investment products or advisory notes.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                                <button className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-md bg-[#E2B33C] text-white font-semibold shadow-sm hover:brightness-105">
                                    Get Started
                                </button>
                                <button className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-md font-semibold border-2 border-gray-300 text-gray-800 hover:bg-gray-50">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Image Collage Layout - 2-1-2 Grid - Hidden on mobile */}
                        <div className="hidden md:grid mt-14 md:grid-cols-3 gap-2 items-start">
                            {/* Left Column (Two Stacked Images) */}
                            <div className="space-y-6">
                                <img
                                    src="/Container.png"
                                    alt="Research and analysis"
                                    className="w-full h-48 rounded-xl object-contain"
                                />
                                <img
                                    src="/Container (1).png"
                                    alt="Team collaboration"
                                    className="w-full h-48 rounded-xl object-contain"
                                />
                            </div>

                            {/* Center Image (Large, Positioned Higher) */}
                            <div className="-mt-8">
                                <img
                                    src="/Container (2).png"
                                    alt="Team discussion and planning"
                                    className="w-full h-100 rounded-xl object-contain"
                                />
                            </div>

                            {/* Right Column (Two Stacked Images) */}
                            <div className="space-y-6">
                                <img
                                    src="/Container (3).png"
                                    alt="Data analysis and charts"
                                    className="w-full h-48 rounded-xl object-contain"
                                />
                                <img
                                    src="/Container (4).png"
                                    alt="Strategic planning and execution"
                                    className="w-full h-48 rounded-xl object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Strategy Categories Section - Responsive */}
                <div className="py-8 sm:py-12 md:py-16 font-semibold font-['Montserrat'] bg-[#f5fcff]"  style={{ background: 'linear-gradient(180deg, #f5fcff 4%, #fafafa 100%)' }}>
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                        <div className="text-center mb-8 sm:mb-10 md:mb-12">
                            <div className="pb-4 flex items-center justify-center">
                                <div className=" backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-lg border border-[#397BA7]">
                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                    <p className="text-black text-sm  font-medium font-['Inter']">Categories</p>
                                </div>
                            </div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black font-['Montserrat']">
                                Strategy <span className="text-[#397BA7]">Categories</span>
                            </h3>
                        </div>

                        {/* Strategy Categories Grid - 2-3-2 Column Layout - Responsive */}
                        <div className="max-w-7xl mx-auto">
                            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center">

                                {/* Left Column - 2 Cards - Vertically Centered */}
                                <div className="w-full lg:flex-1 flex flex-col gap-4 sm:gap-6 lg:justify-center">
                                    {/* Card 1 - Crypto & Blockchain */}
                                    <div className="bg-[#f5fcff] rounded-xl sm:rounded-2xl overflow-hidden border border-[#397BA7] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                        <div className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96 relative overflow-hidden">
                                            <img
                                                src="/Background.png"
                                                alt="Crypto & Blockchain"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-4 sm:p-5 lg:p-6">
                                            <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-lg sm:text-xl font-['Montserrat']">Crypto & Blockchain</h4>
                                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">On-chain flows, token models, LST spreads</p>
                                        </div>
                                    </div>

                                    {/* Card 3 - Private Equity & VC */}
                                    <div className="bg-[#f5fcff] rounded-xl sm:rounded-2xl overflow-hidden border border-[#397BA7] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                        <div className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96 relative overflow-hidden">
                                            <img
                                                src="/Background (2).png"
                                                alt="Private Equity & VC"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-4 sm:p-5 lg:p-6">
                                            <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-lg sm:text-xl font-['Montserrat']">Private Equity & VC</h4>
                                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Venture deal filters, tokenomics comparisons</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Middle Column - 3 Cards */}
                                <div className="w-full lg:flex-1 flex flex-col gap-4 sm:gap-6">
                                    {/* Card 2 - Equity Markets */}
                                    <div className="bg-[#f5fcff] rounded-xl sm:rounded-2xl overflow-hidden border border-[#397BA7] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                        <div className="h-44 sm:h-52 md:h-56 lg:h-64 xl:h-72 2xl:h-80 relative overflow-hidden">
                                            <img
                                                src="/Background (1).png"
                                                alt="Equity Markets"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-4 sm:p-5">
                                            <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg font-['Montserrat']">Equity Markets</h4>
                                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Earnings drift, sector rotation, high-beta positioning</p>
                                        </div>
                                    </div>

                                    {/* Card 4 - Impact Investing */}
                                    <div className="bg-[#f5fcff] rounded-xl sm:rounded-2xl overflow-hidden border border-[#397BA7] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                        <div className="h-44 sm:h-52 md:h-56 lg:h-64 xl:h-72 2xl:h-80 relative overflow-hidden">
                                            <img
                                                src="/Background (3).png"
                                                alt="Impact Investing"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-4 sm:p-5">
                                            <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg font-['Montserrat']">Impact Investing</h4>
                                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">ESG capital flows, thematic rotations</p>
                                        </div>
                                    </div>

                                    {/* Card 5 - Startup Scaling */}
                                    <div className="bg-[#f5fcff] rounded-xl sm:rounded-2xl overflow-hidden border border-[#397BA7] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                        <div className="h-44 sm:h-52 md:h-56 lg:h-64 xl:h-72 2xl:h-80 relative overflow-hidden">
                                            <img
                                                src="/Background (5).png"
                                                alt="Startup Scaling"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-4 sm:p-5">
                                            <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg font-['Montserrat']">Startup Scaling</h4>
                                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Capital stack modeling, series-based dilution strategy</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - 2 Cards - Vertically Centered */}
                                <div className="w-full lg:flex-1 flex flex-col gap-4 sm:gap-6 lg:justify-center">
                                    {/* Card 6 - Real Estate & REITs */}
                                    <div className="bg-[#f5fcff] rounded-xl sm:rounded-2xl overflow-hidden border border-[#397BA7] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                        <div className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96 relative overflow-hidden">
                                            <img
                                                src="/Background (4).png"
                                                alt="Real Estate & REITs"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-4 sm:p-5 lg:p-6">
                                            <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-lg sm:text-xl font-['Montserrat']">Real Estate & REITs</h4>
                                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Rate sensitivity, REIT cycles, CRE insights</p>
                                        </div>
                                    </div>

                                    {/* Card 7 - M&A */}
                                    <div className="bg-[#f5fcff] rounded-xl sm:rounded-2xl overflow-hidden border border-[#397BA7] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                        <div className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 2xl:h-96 relative overflow-hidden">
                                            <img
                                                src="/Background (5).png"
                                                alt="M&A"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="p-4 sm:p-5 lg:p-6">
                                            <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-lg sm:text-xl font-['Montserrat']">M&A</h4>
                                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Deal arbitrage, merger scenarios, restructuring timelines</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Categories Section */}

            </section>
        </>
    )
}

export default StrategyVault








