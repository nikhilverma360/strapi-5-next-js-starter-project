export interface CaseStudyData {
  slug: string
  title: string
  category: string
  date: string
  author: string
  readTime: string
  heroImage: string
  excerpt: string
  content: string
  tags: string[]
  relatedArticles: {
    slug: string
    title: string
    image: string
    category: string
  }[]
}

// Import all case study JSON files
const caseStudyModules = {
  'financial-crisis': () => import('@/data/case-studies/financial-crisis.json'),
  'gamestop': () => import('@/data/case-studies/gamestop.json'),
  'terra-luna': () => import('@/data/case-studies/terra-luna.json'),
//   'bitcoin-halving': () => import('@/data/case-studies/bitcoin-halving.json'),
//   'adani-hindenburg': () => import('@/data/case-studies/adani-hindenburg.json'),
//   'credit-suisse': () => import('@/data/case-studies/credit-suisse.json'),
//   'evergrande': () => import('@/data/case-studies/evergrande.json'),
//   'bond-market': () => import('@/data/case-studies/bond-market.json'),
//   'ethereum-pos': () => import('@/data/case-studies/ethereum-pos.json'),
}

export async function getCaseStudyData(slug: string): Promise<CaseStudyData | null> {
  try {
    const moduleLoader = caseStudyModules[slug as keyof typeof caseStudyModules]
    if (!moduleLoader) {
      return null
    }
    
    const module = await moduleLoader()
    return module.default as CaseStudyData
  } catch (error) {
    console.error(`Error loading case study data for slug: ${slug}`, error)
    return null
  }
}

export function getAllCaseStudySlugs(): string[] {
  return Object.keys(caseStudyModules)
}

// Fallback data for unknown slugs
export function getDefaultCaseStudyData(slug: string): CaseStudyData {
  return {
    slug,
    title: 'Case Study Analysis: Market Insights',
    category: 'Analysis',
    date: 'April 1, 2024',
    author: 'Research Team',
    readTime: '5 min read',
    heroImage: '/Link.png',
    excerpt: 'Comprehensive analysis of market trends and financial events.',
    content: `# ${slug.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}\n\nDetailed analysis coming soon...`,
    tags: ['Analysis', 'Finance'],
    relatedArticles: [
      {
        slug: 'financial-crisis',
        title: 'The 2008 Financial Crisis: Anatomy of a Collapse',
        image: '/Link.png',
        category: 'Finance'
      }
        ]
  }
}