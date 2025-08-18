import React from 'react'

interface DynamicTitleProps {
  text: string
  className?: string
  whiteWordsCount?: number
  gradientColors?: {
    from: string
    to: string
  }
}

/**
 * Dynamic title component that renders the first N words in white
 * and the rest with a gradient effect
 */
export const DynamicTitle: React.FC<DynamicTitleProps> = ({
  text,
  className = '',
  whiteWordsCount = 2,
  gradientColors = { from: 'yellow-400', to: 'green-500' }
}) => {
  if (!text) return null

  const words = text.split(' ')

  if (words.length <= whiteWordsCount) {
    return <span className={`text-white ${className}`}>{text}</span>
  }

  const whiteWords = words.slice(0, whiteWordsCount).join(' ')
  const gradientWords = words.slice(whiteWordsCount).join(' ')

  return (
    <span className={className}>
      <span className="text-white">{whiteWords}</span>
      <span className="text-white"> </span>
      <span 
        className={`bg-gradient-to-r from-${gradientColors.from} to-${gradientColors.to} bg-clip-text text-transparent`}
      >
        {gradientWords}
      </span>
    </span>
  )
}

export default DynamicTitle
