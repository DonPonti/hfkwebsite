import { Celebrity } from '../types';
import { Bookmark, Sparkles, ExternalLink, Tag } from 'lucide-react';
import { motion } from 'motion/react';

interface CelebrityCardProps {
  key?: string;
  celebrity: Celebrity;
  isBookmarked: boolean;
  onToggleBookmark: (celebId: string) => void;
  onSelectCelebrity: (celebrity: Celebrity) => void;
}

export default function CelebrityCard({
  celebrity,
  isBookmarked,
  onToggleBookmark,
  onSelectCelebrity
}: CelebrityCardProps) {
  // Color palette for different celebrity categories
  const categoryColors: Record<string, string> = {
    Musician: 'bg-rose-50 dark:bg-rose-950/20 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-900',
    Actor: 'bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-900',
    Athlete: 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900',
    Model: 'bg-violet-50 dark:bg-violet-950/20 text-violet-700 dark:text-violet-400 border-violet-200 dark:border-violet-900',
    Director: 'bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-900'
  };

  const currentCategoryColor = categoryColors[celebrity.category] || 'bg-gray-50 dark:bg-zinc-800 text-gray-700';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg overflow-hidden flex flex-col justify-between group h-full hover:border-black dark:hover:border-zinc-100 transition-colors shadow-xs"
    >
      <div className="p-5">
        {/* Top Header Card Info */}
        <div className="flex items-start justify-between gap-4 mb-3.5">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-100 dark:border-zinc-800 bg-gray-100 dark:bg-zinc-800 flex-shrink-0">
              <img
                src={celebrity.avatarUrl}
                alt={celebrity.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to initial colored block if unsplash image fails to fetch
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center font-bold text-gray-500 dark:text-zinc-400 bg-gray-200 dark:bg-zinc-700 text-sm">
                {celebrity.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>

            <div>
              <h4 className="font-sans font-bold text-gray-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                {celebrity.name}
              </h4>
              <span className={`inline-block border rounded mt-1 px-1.5 py-0.5 text-[10px] uppercase font-mono tracking-wider font-semibold ${currentCategoryColor}`}>
                {celebrity.category}
              </span>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(celebrity.id);
            }}
            className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-400 hover:text-red-500 dark:text-zinc-500 transition-colors"
            title={isBookmarked ? 'Remove from Watchlist' : 'Add to Watchlist'}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-red-500 text-red-500' : ''}`} />
          </button>
        </div>

        {/* Bio summary */}
        <p className="text-gray-600 dark:text-zinc-400 text-xs line-clamp-2 mb-4 leading-relaxed">
          {celebrity.bio}
        </p>

        {/* Style descriptor */}
        <div className="border-t border-dashed border-gray-100 dark:border-zinc-800/80 pt-3 mb-4">
          <p className="text-[10px] font-mono text-gray-400 dark:text-zinc-500 uppercase tracking-widest flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-500" /> Style Signature
          </p>
          <p className="text-xs font-semibold text-gray-800 dark:text-zinc-300 mt-1">
            {celebrity.styleStyle}
          </p>
        </div>

        {/* Sneaker List quick look */}
        <div>
          <p className="text-[10px] font-mono text-gray-400 dark:text-zinc-500 uppercase tracking-widest flex items-center gap-1 mb-2">
            <Tag className="w-3 h-3 text-indigo-500" /> Recent Sighted Shoes
          </p>
          <div className="space-y-2">
            {celebrity.sneakers.map(s => (
              <div
                key={s.id}
                className="bg-gray-50 dark:bg-zinc-900/80 p-2 border border-gray-100 dark:border-zinc-800/50 rounded flex items-start gap-2 text-left"
              >
                <span className="text-base leading-none mt-0.5 select-none">{s.imageUrl}</span>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-bold text-gray-950 dark:text-zinc-100 truncate">
                    {s.name}
                  </div>
                  <div className="text-[10px] text-gray-500 dark:text-zinc-400 flex items-center gap-1.5 mt-0.5 font-mono">
                    <span className="font-semibold text-gray-700 dark:text-zinc-300">{s.brand}</span>
                    <span>•</span>
                    <span>Est: ${s.estimatedPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card footer action */}
      <div className="p-4 bg-gray-50 dark:bg-zinc-900/40 border-t border-gray-100 dark:border-zinc-800/60">
        <button
          onClick={() => onSelectCelebrity(celebrity)}
          className="w-full py-2 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 hover:border-black dark:hover:border-zinc-500 text-gray-850 dark:text-zinc-200 hover:text-black dark:hover:text-white rounded text-xs font-mono flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>INSPECT SNEAKER DOSSIER</span>
          <ExternalLink className="w-3 h-3 text-gray-400" />
        </button>
      </div>
    </motion.div>
  );
}
