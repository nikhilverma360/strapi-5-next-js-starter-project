import React from 'react'

interface MarkdownRendererProps {
  content: string
  className?: string
}

/**
 * Simple markdown renderer component
 * This is a basic implementation that handles common markdown elements
 * For full markdown support, consider using react-markdown package
 */
export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ 
  content, 
  className = '' 
}) => {
  const renderMarkdown = (text: string): React.ReactElement[] => {
    const lines = text.split('\n')
    const elements: React.ReactElement[] = []
    let currentParagraph: string[] = []
    let listItems: string[] = []
    let inCodeBlock = false
    let codeBlockContent: string[] = []

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const paragraphText = currentParagraph.join(' ').trim()
        if (paragraphText) {
          elements.push(
            <p key={elements.length} className="text-gray-700 text-lg leading-relaxed mb-6">
              {renderInlineMarkdown(paragraphText)}
            </p>
          )
        }
        currentParagraph = []
      }
    }

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={elements.length} className="list-disc list-inside mb-6 space-y-2">
            {listItems.map((item, index) => (
              <li key={index} className="text-gray-700 text-lg leading-relaxed">
                {renderInlineMarkdown(item)}
              </li>
            ))}
          </ul>
        )
        listItems = []
      }
    }

    const flushCodeBlock = () => {
      if (codeBlockContent.length > 0) {
        elements.push(
          <pre key={elements.length} className="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
            <code className="text-sm text-gray-800">
              {codeBlockContent.join('\n')}
            </code>
          </pre>
        )
        codeBlockContent = []
      }
    }

    lines.forEach((line, index) => {
      const trimmedLine = line.trim()

      // Handle code blocks
      if (trimmedLine.startsWith('```')) {
        if (inCodeBlock) {
          flushCodeBlock()
          inCodeBlock = false
        } else {
          flushParagraph()
          flushList()
          inCodeBlock = true
        }
        return
      }

      if (inCodeBlock) {
        codeBlockContent.push(line)
        return
      }

      // Handle headers
      if (trimmedLine.startsWith('# ')) {
        flushParagraph()
        flushList()
        elements.push(
          <h1 key={elements.length} className="text-4xl font-bold text-gray-900 mb-6 mt-8">
            {trimmedLine.slice(2)}
          </h1>
        )
        return
      }

      if (trimmedLine.startsWith('## ')) {
        flushParagraph()
        flushList()
        elements.push(
          <h2 key={elements.length} className="text-3xl font-bold text-gray-900 mb-4 mt-8">
            {trimmedLine.slice(3)}
          </h2>
        )
        return
      }

      if (trimmedLine.startsWith('### ')) {
        flushParagraph()
        flushList()
        elements.push(
          <h3 key={elements.length} className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            {trimmedLine.slice(4)}
          </h3>
        )
        return
      }

      // Handle list items
      if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
        flushParagraph()
        listItems.push(trimmedLine.slice(2))
        return
      }

      // Handle numbered lists
      if (/^\d+\.\s/.test(trimmedLine)) {
        flushParagraph()
        flushList()
        const match = trimmedLine.match(/^\d+\.\s(.+)/)
        if (match) {
          elements.push(
            <ol key={elements.length} className="list-decimal list-inside mb-6">
              <li className="text-gray-700 text-lg leading-relaxed">
                {renderInlineMarkdown(match[1])}
              </li>
            </ol>
          )
        }
        return
      }

      // Handle empty lines
      if (trimmedLine === '') {
        flushParagraph()
        flushList()
        return
      }

      // Regular paragraph content
      flushList()
      currentParagraph.push(trimmedLine)
    })

    // Flush any remaining content
    flushParagraph()
    flushList()
    flushCodeBlock()

    return elements
  }

  const renderInlineMarkdown = (text: string): React.ReactNode => {
    // Handle bold text
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
    
    // Handle italic text
    text = text.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    
    // Handle inline code
    text = text.replace(/`(.*?)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>')

    return <span dangerouslySetInnerHTML={{ __html: text }} />
  }

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      {renderMarkdown(content)}
    </div>
  )
}

export default MarkdownRenderer
