"use client"
import React, { use } from 'react'
import { ArrowLeft, Calendar, Tag, ArrowRight } from 'lucide-react'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

const CaseStudyPage: React.FC<PageProps> = ({ params }) => {
  const { slug } = use(params)
  
  // Dynamic title based on slug - this can be enhanced to fetch from API
  const getTitleFromSlug = (slug: string): string => {
    const titleMap: Record<string, string> = {
      'financial-crisis': 'The 2008 Financial Crisis: Anatomy of a Collapse',
      'gamestop': 'GameStop Short Squeeze – Power of the Retail Investor',
      'terra-luna': 'The Rise and Crash of Terra Luna and UST',
      'bitcoin-halving': 'Bitcoin Halving Events and Price Movements',
      'adani-hindenburg': 'India\'s Adani-Hindenburg Fallout Analysis',
      'credit-suisse': 'Credit Suisse Contagion & UBS Takeover Study',
      'evergrande': 'China\'s Evergrande Crisis - Real Estate Bubble Burst',
      'bond-market': 'US Bond Market Inversion - Recession Predictor Analysis',
      'ethereum-pos': 'Ethereum\'s Transition to Proof of Stake'
    }
    
    return titleMap[slug] || 'Case Study Analysis: Market Insights'
  }
  
  const title = getTitleFromSlug(slug)
  // Function to render dynamic title with first two words white and rest gradient
  const renderDynamicTitle = (text: string) => {
    if (!text) return null
    
    const words = text.split(' ')
    
    if (words.length <= 2) {
      return <span className="text-white">{text}</span>
    }
    
    const firstTwoWords = words.slice(0, 2).join(' ')
    const restOfWords = words.slice(2).join(' ')
    
    return (
      <>
        <span className="text-white">{firstTwoWords}</span>
        <span className="text-white"> </span>
        <span className="bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent">
          {restOfWords}
        </span>
      </>
    )
  }
  return (
    <>
      <section id="financial-crisis-article" aria-label="2008 Financial Crisis Article">
        
        {/* Hero Section with Section.png background */}
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
              {renderDynamicTitle(title)}
            </h1>
          </div>
        </div>


        {/* Main Article Content */}
        <div className="bg-white py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              
              {/* Article Meta */}
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center">
                  
                  <span className="bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium border border-amber-400">
                    Finance
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-gray-600" />
                  <span className="text-gray-600 text-sm">April 2, 2024</span>
                </div>
              </div>
              
              {/* Hero Image */}
              <div className="mb-12">
                <img
                  src="/Link.png"
                  alt="Financial trading environment during 2008 crisis"
                  className="w-full rounded-xl object-cover shadow-lg"
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  The 2008 financial crisis stands as one of the most devastating economic events in modern history, 
                  triggering a global recession that would become known as the Great Recession. This comprehensive 
                  analysis explores the complex web of factors that led to the collapse of major financial institutions 
                  and the subsequent economic turmoil that affected millions worldwide.
                </p>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Financial institutions repackaged these risky loans into complex derivatives like mortgage-backed securities (MBS) and collateralized debt obligations (CDOs). As housing prices fell, borrowers defaulted en masse, rendering these securities worthless. Major institutions like Lehman Brothers collapsed, triggering global panic. 
                </p>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                AIG required a $182 billion bailout due to its exposure via credit default swaps. Interbank lending froze, equity markets plummeted, and liquidity evaporated. Central banks worldwide slashed rates and introduced stimulus measures. The U.S. government enacted TARP to stabilize banks. 
                </p>

               
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The crisis exposed flaws in risk management, oversight, and financial engineering. It led to the Dodd-Frank Act and Basel III regulations. The ripple effects persisted for years, with high unemployment and slow recovery. Trust in financial institutions eroded. Global trade shrank, and emerging markets were hit by capital outflows. 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Blogs Section */}
        <div className="bg-gray-50 py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Related Blogs</h2>
                <button className="bg-amber-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors duration-200">
                  All Blogs
                </button>
              </div>
              
              {/* Related Blog Card */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                    src="/Blog Thumbnail Image.png"
                      alt="GameStop Short Squeeze"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium border border-amber-400">
                        Retail
                      </span>
                      <span className="text-gray-500 text-sm">April 6, 2024</span>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-4 text-xl">
                      GameStop Short Squeeze – Power of the Retail Investor
                    </h3>
                    <div className="flex items-center space-x-3 group cursor-pointer">
                      <span className="text-gray-800 font-medium group-hover:text-blue-600 transition-colors duration-200">
                        Read Article
                      </span>
                      <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
                        <ArrowRight className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CaseStudyPage 