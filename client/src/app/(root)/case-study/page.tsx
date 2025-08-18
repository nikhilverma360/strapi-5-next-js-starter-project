"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, FileText } from 'lucide-react'

interface CaseStudyCard {
  id: string
  image: string
  alt: string
  category: string
  date: string
  title: string
  slug?: string
  fontWeight?: 'semibold' | 'bold'
}

const CaseStudyPage: React.FC = () => {
  const router = useRouter()

  const handleReadArticle = () => {
    router.push('/financial-crisis')
  }

  // Filter categories
  const filterCategories = [
    { label: 'All', active: true },
    { label: 'Market', active: false },
    { label: 'Crypto', active: false },
    { label: 'Finance', active: false }
  ]

  // Case study cards data
  const caseStudyCards: CaseStudyCard[] = [
    {
      id: '1',
      image: '/Blog Thumbnail Image.png',
      alt: 'GameStop Short Squeeze',
      category: 'Retail',
      date: 'April 6, 2024',
      title: 'GameStop Short Squeeze – Power of the Retail Investor',
      slug: '/gamestop',
      fontWeight: 'semibold'
    },
    {
      id: '2',
      image: '/Blog Thumbnail Image (1).png',
      alt: 'Terra Luna Crash',
      category: 'Finance',
      date: 'April 6, 2024',
      title: 'The Rise and Crash of Terra Luna and UST',
      fontWeight: 'semibold'
    },
    {
      id: '3',
      image: '/Blog Thumbnail Image (2).png',
      alt: "India's Sovereign Gold Bond Scheme",
      category: 'Finance',
      date: 'April 6, 2024',
      title: "India's Sovereign Gold Bond Scheme",
      fontWeight: 'semibold'
    },
    {
      id: '4',
      image: '/Blog Thumbnail Image (3).png',
      alt: 'Credit Suisse Contagion & UBS Takeover',
      category: 'Finance',
      date: 'April 6, 2024',
      title: 'Credit Suisse Contagion & UBS Takeover (2023)',
      fontWeight: 'semibold'
    },
    {
      id: '5',
      image: '/Blog Thumbnail Image (4).png',
      alt: 'Bitcoin Halving Events',
      category: 'Crypto',
      date: 'April 6, 2024',
      title: 'Bitcoin Halving Events and Price Movements',
      fontWeight: 'semibold'
    },
    {
      id: '6',
      image: '/Blog Thumbnail Image (5).png',
      alt: 'Adani-Hindenburg Fallout',
      category: 'Market',
      date: 'April 6, 2024',
      title: "India's Adani-Hindenburg Fallout (2023)",
      fontWeight: 'bold'
    },
    {
      id: '7',
      image: '/Blog Thumbnail Image (6).png',
      alt: "China's Evergrande Crisis",
      category: 'Finance',
      date: 'April 6, 2024',
      title: "China's Evergrande Crisis - Real Estate Bubble Burst",
      fontWeight: 'bold'
    },
    {
      id: '8',
      image: '/Blog Thumbnail Image (7).png',
      alt: 'US Bond Market Inversion',
      category: 'Market',
      date: 'April 6, 2024',
      title: 'US Bond Market Inversion - Recession Predictor?',
      fontWeight: 'bold'
    },
    {
      id: '9',
      image: '/Blog Thumbnail Image (8).png',
      alt: "Ethereum's Transition to Proof of Stake",
      category: 'Crypto',
      date: 'April 6, 2024',
      title: "Ethereum's Transition to Proof of Stake",
      fontWeight: 'bold'
    }
  ]

  // Render individual case study card
  const renderCaseStudyCard = (card: CaseStudyCard) => {
    const isSpecialCard = card.id === '4' // Credit Suisse card has different styling
    
    return (
      <div 
        key={card.id}
        className={`bg-white overflow-hidden transition-all duration-300 group ${
          isSpecialCard 
            ? 'rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-xl duration-200'
            : 'rounded-2xl shadow-lg hover:shadow-2xl'
        }`}
      >
        <div className="relative h-80 md:h-96 lg:h-[420px] bg-gray-100 overflow-hidden">
          <img
            src={card.image}
            alt={card.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-white text-gray-900 px-3 py-1 rounded-md text-sm font-medium border border-[#F2BE00] font-['Montserrat']">
              {card.category}
            </span>
            <span className="text-gray-500 text-sm font-semibold font-['Montserrat']">{card.date}</span>
          </div>
          <h3 className={`text-gray-900 text-xl mb-4 line-clamp-2 min-h-[3.5rem] font-['Montserrat'] font-${card.fontWeight || 'semibold'}`}>
            {card.title}
          </h3>
          <div 
            className="flex items-center justify-between group/link cursor-pointer"
            onClick={() => card.slug && router.push(card.slug)}
          >
            <span className="text-gray-700 font-medium group-hover/link:text-blue-600 transition-colors duration-200 font-['Montserrat']">
              Read Article
            </span>
            <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center group-hover/link:bg-blue-600 transition-all duration-200">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <section id="case-study-page" aria-label="Case Study Page" className="font-['Montserrat']">

        {/* Top Banner with Section.png background - Responsive heights */}
        <div
          className="relative w-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: "url('/Section.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Fallback img element */}
          <img
            src="/Section.png"
            alt="Case Study Background"
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-0"
            style={{ minHeight: '100%' }}
          />

          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-opacity-20 z-10"></div>

          {/* Content positioned above the background image - Responsive padding and typography */}
          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-3 sm:mb-4 gap-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#E2B33C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <p className="text-[#E2B33C] text-lg font-medium font-['Inter']">Blog</p>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold font-['Montserrat'] leading-tight">
              <span className="text-white">Our Latest</span>{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent">News &</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent">Case Study</span>
            </h1>
          </div>
        </div>

        {/* Main Content Area - Case Study Article - Responsive layout */}
        <div className="bg-white py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
              {/* Left Column - Image - Full width on mobile/tablet */}
              <div>
                <img
                  src="/Link.png"
                  alt="Financial trading environment - 2008 crisis"
                  className="w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-auto rounded-lg sm:rounded-xl object-cover shadow-lg"
                />
              </div>

              {/* Right Column - Article Details - Vertically centered */}
              <div className="space-y-3 lg:space-y-4 flex flex-col justify-center">
                {/* Category Tag and Date */}
                <div className="flex items-center gap-4">
                  <span className="bg-white text-gray-900 px-3 py-1 rounded-md text-sm font-medium border border-[#F2BE00] font-['Montserrat']">
                    Finance
                  </span>
                  <span className="text-gray-900 font-semibold text-sm">April 7, 2024</span>
                </div>

                {/* Article Title - Smaller font size */}
                <h2 className="text-1xl lg:text-xl text-gray-900 font-semibold leading-tight font-['Montserrat']">
                  The 2008 Financial Crisis: Anatomy of a Collapse
                </h2>

                {/* Description - Smaller text */}
                <p className="text-gray-600 text-base leading-relaxed font-['Montserrat']">
                  Explore how subprime mortgage lending, excessive leverage, and opaque financial instruments triggered the worst global recession since the Great Depression.
                </p>

                {/* Read Article Link */}
                <div
                  className="inline-flex items-center gap-3 group cursor-pointer pt-2"
                  onClick={handleReadArticle}
                >
                  <span className="text-gray-700 font-semibold font-['Montserrat'] group-hover:text-blue-600 transition-colors duration-200">
                    Read Article
                  </span>
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Thumbnails Section - Responsive padding */}
        <div className="bg-white py-8 sm:py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            {/* Filter Buttons - Scrollable on mobile, centered on larger screens */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <div className="flex items-center justify-start sm:justify-center overflow-x-auto sm:overflow-visible pb-2 sm:pb-0">
                <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                  {filterCategories.map((category, index) => (
                    <button 
                      key={index}
                      className={`px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-sm sm:text-base font-medium whitespace-nowrap transition-colors duration-200 ${
                        category.active 
                          ? 'bg-[#E2B33C] text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog Thumbnail Cards - Grid layout matching Figma design */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {caseStudyCards.map((card) => renderCaseStudyCard(card))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CaseStudyPage 