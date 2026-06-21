import { BlogPost } from '../types';
import { ArrowLeft, Calendar, Clock, User, Bookmark } from 'lucide-react';

interface BlogReaderProps {
  post: BlogPost;
  onBack: () => void;
}

export default function BlogReader({ post, onBack }: BlogReaderProps) {
  // Helper to render markdown-like content into clean TSX blocks
  const renderContentBlocks = (text: string) => {
    return text.split('\n\n').map((block, index) => {
      const trimmed = block.trim();
      
      // Render level 3 heading (### Heading)
      if (trimmed.startsWith('### ')) {
        return (
          <h3 key={index} className="text-lg font-bold text-gray-900 dark:text-zinc-50 mt-6 mb-3 font-sans">
            {trimmed.replace('### ', '')}
          </h3>
        );
      }
      
      // Render list items (1. item, etc. or numbered/bullet lists)
      if (trimmed.match(/^\d+\.\s/) || trimmed.startsWith('- ')) {
        const lines = trimmed.split('\n');
        return (
          <ul key={index} className="list-disc pl-5 my-4 space-y-2 text-xs font-sans text-gray-700 dark:text-zinc-300 leading-relaxed">
            {lines.map((line, lIdx) => {
              const itemText = line.replace(/^\d+\.\s/, '').replace(/^-\s/, '');
              // Check if it contains bolding in the item
              return (
                <li key={lIdx}>
                  {parseInlineFormatting(itemText)}
                </li>
              );
            })}
          </ul>
        );
      }

      // Default paragraph (applying subtle bolding checks)
      return (
        <p key={index} className="text-xs font-sans text-gray-750 dark:text-zinc-300 leading-relaxed my-3.5">
          {parseInlineFormatting(trimmed)}
        </p>
      );
    });
  };

  // Turn matches of **text** into <strong>text</strong> inline
  const parseInlineFormatting = (text: string) => {
    if (!text.includes('**')) {
      return text;
    }
    const parts = text.split('**');
    return parts.map((part, i) => (i % 2 === 1 ? <strong key={i} className="font-bold text-gray-950 dark:text-white">{part}</strong> : part));
  };

  return (
    <div id="blog-reader-view" className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg p-6 sm:p-8 max-w-3xl mx-auto">
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-black dark:hover:text-white mb-6 p-1 rounded-sm border border-transparent hover:border-gray-200 dark:hover:border-zinc-800 cursor-pointer transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>[ BACK TO ARTICLES ]</span>
      </button>

      {/* Post title */}
      <h1 className="font-sans font-bold text-2xl sm:text-3xl text-gray-900 dark:text-zinc-50 leading-tight">
        {post.title}
      </h1>

      {/* Metadata panel */}
      <div className="flex flex-wrap items-center gap-4 py-4 my-4 border-t border-b border-gray-100 dark:border-zinc-800 font-mono text-[10px] uppercase tracking-wider text-gray-400 dark:text-zinc-500">
        <div className="flex items-center gap-1.5 text-gray-500 dark:text-zinc-400">
          <Calendar className="w-3.5 h-3.5" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-500 dark:text-zinc-400">
          <Clock className="w-3.5 h-3.5" />
          <span>{post.readingTime}</span>
        </div>
        <div className="flex items-center gap-1.5 text-gray-500 dark:text-zinc-400">
          <User className="w-3.5 h-3.5" />
          <span>Authored by {post.author}</span>
        </div>
      </div>

      {/* Featured Banner Image */}
      <div className="w-full h-64 sm:h-80 rounded-lg overflow-hidden bg-gray-100 dark:bg-zinc-850 mb-6 border border-gray-200 dark:border-zinc-800">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover grayscale focus:grayscale-0 hover:grayscale-0 transition-all duration-500"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Blog Contents */}
      <div className="prose dark:prose-invert max-w-none text-gray-800 dark:text-zinc-300">
        {renderContentBlocks(post.content)}
      </div>

      {/* Tags section */}
      <div className="mt-8 pt-6 border-t border-gray-100 dark:border-zinc-800/65 flex flex-wrap gap-2 items-center">
        <span className="text-[10px] font-mono text-gray-400 dark:text-zinc-550 uppercase tracking-widest flex items-center gap-1 mr-1">
          <Bookmark className="w-3.5 h-3.5 text-gray-400" /> Categorized Tags
        </span>
        {post.tags.map(tag => (
          <span
            key={tag}
            className="text-[10px] font-mono bg-gray-50 dark:bg-zinc-950 text-gray-500 dark:text-zinc-400 border border-gray-100 dark:border-zinc-850 px-2.5 py-0.5 rounded"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
