"use client"
import React from 'react'
import { ArrowLeft, Calendar, Tag, ArrowRight } from 'lucide-react'

const FinancialCrisis: React.FC = () => {
  return (
    <>
      <section id="financial-crisis-article" aria-label="2008 Financial Crisis Article">
        
        {/* Hero Section with Section.png background */}
        <div
          className="relative w-full min-h-[400px] flex items-center justify-center"
          style={{
            backgroundImage: "url('/Section.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          
          <div className="container-custom py-16 relative z-10">
            {/* Blog Indicator with Mountain Peak Icon */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-4 h-4 mr-2">
                {/* Mountain Peak Icon */}
                
              </div>
             <button 
                onClick={() => window.history.back()}
                className="flex items-center text-amber-400 hover:text-blue-200 transition-colors duration-200 group"
              >
                <ArrowLeft className="text-amber-400 text-sm font-medium" />
                Blog
              </button>
            </div>
            
            {/* Article Title - Three Colors */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-center leading-tight mb-8 max-w-4xl">
              <span className="text-white">The 2008</span>{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Financial Crisis:</span>{' '}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Anatomy Of A Collapse</span>
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

export default FinancialCrisis 