"use client"
import React, { use, useState, useEffect } from 'react'
import { ArrowLeft, Calendar, Tag, ArrowRight, Clock, User } from 'lucide-react'
import { getCaseStudyData, getDefaultCaseStudyData, type CaseStudyData } from '@/lib/case-studies'
import MarkdownRenderer from '@/components/custom/markdown-renderer'
import Image from 'next/image'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

const CaseStudyPage: React.FC<PageProps> = ({ params }) => {
  const { slug } = use(params)
  const [caseStudyData, setCaseStudyData] = useState<CaseStudyData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCaseStudyData = async () => {
      setLoading(true)
      try {
        const data = await getCaseStudyData(slug)
        setCaseStudyData(data || getDefaultCaseStudyData(slug))
      } catch (error) {
        console.error('Error loading case study:', error)
        setCaseStudyData(getDefaultCaseStudyData(slug))
      } finally {
        setLoading(false)
      }
    }

    loadCaseStudyData()
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#397BA7]"></div>
      </div>
    )
  }

  if (!caseStudyData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <p className="text-gray-600">The requested case study could not be loaded.</p>
        </div>
      </div>
    )
  }
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

          <div className="relative z-20 text-center text-white pt-10 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <div className="hidden sm:flex bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 items-center gap-2 shadow-lg border border-white/30">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <p className="text-white text-md font-medium font-['Outfit']">Blog</p>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-['Montserrat'] leading-tight">
              {caseStudyData.title}
            </h1>
          </div>
          {/* Content positioned above the background image - Responsive padding and typography */}
          {/* <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-3 sm:mb-4 gap-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#E2B33C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <p className="text-[#E2B33C] text-lg font-medium font-['Inter']">Blog</p>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-['Montserrat'] leading-tight">
              {renderDynamicTitle(caseStudyData.title)}
            </h1>
          </div> */}
        </div>


        {/* Main Article Content */}
        <div className="bg-white py-16 px-4">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8">
                <div className="flex items-center">
                  <span className="bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium border border-[#397BA7]">
                    {caseStudyData.category}
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-gray-600" />
                  <span className="text-gray-600 font-semibold text-sm">{caseStudyData.date}</span>
                </div>
              </div>
              
              {/* Hero Image */}
              <div className="mb-12">
                <img
                  src={caseStudyData.heroImage}
                  alt={caseStudyData.title}
                  className="w-full object-cover shadow-lg rounded-lg"
                />
              </div>

              {/* Article Content - Dynamic Markdown */}
              <MarkdownRenderer 
                content={caseStudyData.content}
                className="mb-12"
              />

              {/* Tags */}
              {caseStudyData.tags && caseStudyData.tags.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudyData.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Blogs Section */}
        <div className="bg-gray-50 px-4 py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Related Blogs</h2>
                <button 
                  onClick={() => window.location.href = '/case-study'}
                  className="bg-[#397BA7] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-500 transition-colors duration-200"
                >
                  All Blogs
                </button>
              </div>
              
                            {/* Related Blog Cards Grid - Dynamic 1:2 Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {caseStudyData.relatedArticles.map((article, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                  >
                    {/* Image Container - Same aspect ratio as case study cards */}
                    <div className="relative h-80 md:h-96 lg:h-[320px] bg-gray-100 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Content Container */}
                    <div className="p-6">
                      {/* Category and Date */}
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-white text-gray-900 px-3 py-1 rounded-md text-sm font-medium border border-[#397BA7] font-['Montserrat']">
                          {article.category}
                        </span>
                        <span className="text-gray-500 text-sm font-semibold font-['Montserrat']">April 6, 2024</span>
                      </div>
                      {/* Title - Same styling as case study cards */}
                      <h3 className="text-gray-900 text-xl mb-4 line-clamp-2 min-h-[3.5rem] font-['Montserrat'] font-semibold">
                        {article.title}
                      </h3>
                      {/* Read Article Link - Matching case study card style */}
                      <div 
                        className="flex items-center justify-between group/link cursor-pointer"
                        onClick={() => window.location.href = `/case-study/${article.slug}`}
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CaseStudyPage 