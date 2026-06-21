import { BlogPost } from '../types';
import { Calendar, Clock } from 'lucide-react';

interface BlogCardProps {
  key?: string;
  post: BlogPost;
  onReadPost: (postId: string) => void;
}

export default function BlogCard({ post, onReadPost }: BlogCardProps) {
  return (
    <article
      onClick={() => onReadPost(post.id)}
      className="p-6 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg group hover:border-black dark:hover:border-zinc-100 transition-colors cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Meta Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono uppercase tracking-wider text-gray-400 dark:text-zinc-500 mb-3">
          <div className="flex items-center gap-1.5 font-medium text-gray-500 dark:text-zinc-400">
            <Calendar className="w-3.5 h-3.5" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1 bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-850 px-1.5 py-0.5 rounded text-gray-500 dark:text-zinc-400">
            <Clock className="w-3 h-3" />
            <span>{post.readingTime}</span>
          </div>
        </div>

        {/* Post Image */}
        <div className="w-full h-40 rounded bg-gray-100 dark:bg-zinc-800 overflow-hidden mb-4">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-500 grayscale group-hover:grayscale-0"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Post Title */}
        <h4 className="font-sans font-bold text-gray-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white group-hover:underline text-base leading-snug line-clamp-2">
          {post.title}
        </h4>

        {/* Excerpt */}
        <p className="text-gray-600 dark:text-zinc-400 text-xs mt-2.5 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
      </div>

      {/* Tags and Author */}
      <div className="mt-5 pt-3 border-t border-gray-100 dark:border-zinc-800/60 flex flex-wrap items-center justify-between gap-2">
        <span className="text-[10px] font-mono text-gray-500 dark:text-zinc-400">
          By <strong className="text-gray-800 dark:text-zinc-300">{post.author}</strong>
        </span>
        <div className="flex flex-wrap gap-1">
          {post.tags.slice(0, 2).map(tag => (
            <span
              key={tag}
              className="text-[9px] font-mono bg-gray-50 dark:bg-zinc-950 text-gray-500 dark:text-zinc-400 border border-gray-100 dark:border-zinc-850 px-1.5 py-0.5 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
