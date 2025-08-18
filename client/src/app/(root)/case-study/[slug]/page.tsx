"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

const FinancialCrisis: React.FC = () => {
  const router = useRouter()

  return (
    <>
      <section id="financial-crisis-article" aria-label="2008 Financial Crisis Article" className="font-['Montserrat']">
        
        {/* Hero Section with title - Responsive */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-white">The 2008</span>{' '}
                <span className="text-[#E7C814]">Financial Crisis:</span>
                <br className="hidden sm:block" />
                <span className="text-[#E7C814]">Anatomy Of A Collapse</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Main Article Content - Responsive */}
        <div className="bg-white py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 max-w-7xl lg:max-w-10xl">
            
            {/* Article Meta - Category and Date - Responsive */}
            <div className="max-w-5xl mx-auto mb-6 sm:mb-8">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="bg-white text-gray-900 px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium border border-[#F2BE00]">
                  Finance
                </span>
                <span className="text-gray-600 text-xs sm:text-sm font-['Montserrat'] font-medium">April 6, 2024</span>
              </div>
            </div>

            {/* Featured Image - Responsive */}
            <div className="max-w-full sm:max-w-6xl lg:max-w-7xl xl:max-w-8xl mx-auto mb-8 sm:mb-10 lg:mb-12 px-0 sm:px-4 lg:px-6 xl:px-8">
              <img 
                src="/Link.png" 
                alt="2008 Financial Crisis - Trading Floor" 
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] object-cover rounded-none sm:rounded-lg"
              />
            </div>

            {/* Article Content - Responsive container */}
            <div className="max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <p 
                className="text-gray-700 font-['Montserrat'] font-medium text-justify mb-6 sm:mb-8 text-base sm:text-lg md:text-xl lg:text-2xl"
                style={{
                  lineHeight: '1.6',
                  letterSpacing: '0px'
                }}
              >
                The 2008 financial crisis was ignited by a widespread failure in the US housing market. Lenders issued subprime mortgages to borrowers with poor credit histories, betting that rising home prices would protect them from defaults.
              </p>

              <p 
                className="text-gray-700 font-['Montserrat'] font-medium text-justify mb-6 sm:mb-8 text-base sm:text-lg md:text-xl lg:text-2xl"
                style={{
                  lineHeight: '1.6',
                  letterSpacing: '0px'
                }}
              >
                Financial institutions repackaged these risky loans into complex derivatives like mortgage-backed securities (MBS) and collateralized debt obligations (CDOs). As housing prices fell, borrowers defaulted en masse, rendering these securities worthless. Major institutions like Lehman Brothers collapsed, triggering global panic.
              </p>

              <p 
                className="text-gray-700 font-['Montserrat'] font-medium text-justify mb-6 sm:mb-8 text-base sm:text-lg md:text-xl lg:text-2xl"
                style={{
                  lineHeight: '1.6',
                  letterSpacing: '0px'
                }}
              >
                AIG required a $182 billion bailout due to its exposure via credit default swaps. Interbank lending froze, equity markets plummeted, and unemployment soared. Central banks worldwide slashed rates and introduced stimulus measures. The U.S. government enacted TARP to stabilize banks.
              </p>

              <p 
                className="text-gray-700 font-['Montserrat'] font-medium text-justify mb-8 sm:mb-10 text-base sm:text-lg md:text-xl lg:text-2xl"
                style={{
                  lineHeight: '1.6',
                  letterSpacing: '0px'
                }}
              >
                The crisis exposed flaws in risk management, oversight, and financial engineering. It led to the Dodd-Frank Act and Basel III regulations. The ripple effects persisted for years, with high unemployment and slow recovery. Trust in financial institutions eroded. Global trade shrank, and emerging markets were hit by capital outflows.
              </p>

              {/* Quote/Highlight Box - Responsive */}
              <div className="relative bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-10 sm:py-12 md:py-16 lg:py-20 rounded-lg sm:rounded-xl my-8 sm:my-10 lg:my-12 overflow-hidden">
                {/* Large quotation mark SVG - Responsive */}
                <div className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-8 lg:left-12 xl:left-16">
                  <svg className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 text-slate-600/30" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M30 20C20 20 10 30 10 40C10 50 15 55 20 55C25 55 30 50 30 45C30 40 27 37 24 37C22 37 21 38 21 38C21 35 23 30 30 30C35 30 40 35 40 45C40 60 30 70 20 80L25 85C40 70 50 55 50 40C50 30 40 20 30 20Z"/>
                    <path d="M70 20C60 20 50 30 50 40C50 50 55 55 60 55C65 55 70 50 70 45C70 40 67 37 64 37C62 37 61 38 61 38C61 35 63 30 70 30C75 30 80 35 80 45C80 60 70 70 60 80L65 85C80 70 90 55 90 40C90 30 80 20 70 20Z"/>
                  </svg>
                </div>
                <p 
                  className="relative z-10 font-['Montserrat'] font-medium pl-6 sm:pl-12 md:pl-16 lg:pl-20 pr-4 sm:pr-8 lg:pr-12 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
                  style={{
                    lineHeight: '1.8',
                    letterSpacing: '0px'
                  }}
                >
                  "It remains one of the most studied financial disasters in history. The root causes—excessive leverage, lack of transparency, and regulatory failures—are cautionary lessons for future risk management and policymaking."
                </p>
              </div>
            </div>

            {/* Related Blogs Section - Responsive */}
            <div className="max-w-6xl mx-auto mt-8 sm:mt-12 lg:mt-16 px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8 lg:mb-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-['Montserrat']">Related Blogs</h2>
                <button className="bg-[#D4B54C] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-[#c5a53d] transition-colors duration-200 text-sm sm:text-base font-semibold font-['Montserrat']">
                  All Blogs
                </button>
              </div>

              {/* Single Featured Blog Card - Responsive */}
              <div 
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer w-full sm:max-w-lg md:max-w-xl mx-auto sm:mx-0"
                onClick={() => router.push('/gamestop')}
              >
                <div className="h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 overflow-hidden">
                  <img 
                    src="/Blog Thumbnail Image.png" 
                    alt="GameStop Short Squeeze" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 sm:p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <span className="bg-white text-gray-900 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium border sm:border-2 border-[#F2BE00] font-['Montserrat']">
                      Retail
                    </span>
                    <span className="text-gray-600 text-xs sm:text-sm font-['Montserrat'] font-medium">April 6, 2024</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 font-['Montserrat'] leading-tight">
                    GameStop Short Squeeze – Power of the Retail Investor
                  </h3>
                  <button className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-900 font-semibold hover:text-[#D4B54C] transition-colors font-['Montserrat']">
                    Read Article
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-[#D4B54C] transition-all duration-200">
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FinancialCrisis