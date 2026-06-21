import { Celebrity, Sneaker } from '../types';
import { X, Calendar, Globe, Star, Sparkles, ShoppingBag, TrendingUp, Info } from 'lucide-react';

interface CelebrityModalProps {
  celebrity: Celebrity;
  isBookmarked: boolean;
  onToggleBookmark: (celebId: string) => void;
  onClose: () => void;
}

export default function CelebrityModal({
  celebrity,
  isBookmarked,
  onToggleBookmark,
  onClose
}: CelebrityModalProps) {

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${i < rating ? 'text-amber-500 fill-amber-500' : 'text-gray-200 dark:text-zinc-700'}`}
      />
    ));
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-805 rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Hero Area */}
        <div className="bg-gray-50 dark:bg-zinc-900/60 p-6 border-b border-gray-100 dark:border-zinc-800 shrink-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-200 dark:border-zinc-800 bg-gray-200 dark:bg-zinc-750 flex-shrink-0 relative">
                <img
                  src={celebrity.avatarUrl}
                  alt={celebrity.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center font-bold text-gray-500 bg-gray-200 dark:bg-zinc-700 text-lg">
                  {celebrity.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-sans font-bold text-xl text-gray-900 dark:text-zinc-50 leading-tight">
                    {celebrity.name}
                  </h2>
                  <span className="text-[10px] font-mono px-2 py-0.5 border border-gray-250 dark:border-zinc-700 text-gray-650 dark:text-zinc-300 rounded bg-white dark:bg-zinc-900">
                    {celebrity.category}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 font-mono text-[10px] uppercase text-gray-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5" /> {celebrity.nationality}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> Born {celebrity.birthYear}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-center">
              <button
                onClick={() => onToggleBookmark(celebrity.id)}
                className={`px-3 py-1.5 border rounded text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer ${
                  isBookmarked
                    ? 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900 text-red-600'
                    : 'border-gray-200 dark:border-zinc-700 text-gray-600 dark:text-zinc-450 hover:bg-gray-100 dark:hover:bg-zinc-800'
                }`}
              >
                <Star className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-red-600 text-red-600' : ''}`} />
                <span>{isBookmarked ? 'WATCHING' : 'WATCHLIST'}</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-gray-150 dark:hover:bg-zinc-800 text-gray-400 hover:text-gray-700 dark:hover:text-zinc-200 border border-gray-150 dark:border-zinc-805 transition-colors cursor-pointer"
                title="Close overlay"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Modal Info Panels */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Biometrics and bio details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-3.5">
              <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-gray-400 dark:text-zinc-500">
                STAR PROFILE & BIOCONTEXT
              </h3>
              <p className="text-xs text-gray-700 dark:text-zinc-300 leading-relaxed font-sans">
                {celebrity.bio}
              </p>
            </div>

            <div className="space-y-4 bg-gray-50 dark:bg-zinc-900/60 p-4 border border-gray-150 dark:border-zinc-850 rounded-lg">
              <div>
                <p className="text-[10px] font-mono text-gray-400 dark:text-zinc-505 uppercase tracking-widest flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Style DNA
                </p>
                <p className="text-xs font-bold text-gray-800 dark:text-zinc-200 mt-1">
                  {celebrity.styleStyle}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-mono text-gray-400 dark:text-zinc-505 uppercase tracking-widest">
                  Brand Affiliations
                </p>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {celebrity.popularBrands.map(b => (
                    <span
                      key={b}
                      className="text-[9px] font-mono bg-white dark:bg-zinc-950 text-gray-600 dark:text-zinc-350 px-2 py-0.5 rounded border border-gray-100 dark:border-zinc-800"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sighted Sneakers Dossier */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-gray-400 dark:text-zinc-505 border-b border-gray-100 dark:border-zinc-850 pb-2">
              SIGHTED SNEAKERS DOSSIER
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {celebrity.sneakers.map((sneaker) => (
                <div
                  key={sneaker.id}
                  className="bg-white dark:bg-zinc-905 border border-gray-250 dark:border-zinc-805 rounded-lg p-4 flex flex-col justify-between"
                >
                  <div>
                    {/* Shoe visual indicator */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xl px-2 py-1 bg-gray-50 dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded select-none">
                        {sneaker.imageUrl}
                      </span>
                      <div className="flex items-center gap-0.5">
                        {renderStars(sneaker.rating)}
                      </div>
                    </div>

                    <h4 className="font-sans font-bold text-xs text-gray-950 dark:text-zinc-50">
                      {sneaker.name}
                    </h4>
                    <p className="text-[11px] font-mono text-gray-400 dark:text-zinc-505 mt-0.5">
                      Brand: <span className="font-semibold text-gray-700 dark:text-zinc-350">{sneaker.brand}</span> • Year: {sneaker.releaseYear}
                    </p>

                    <div className="bg-gray-50 dark:bg-zinc-900 border border-dotted border-gray-200 dark:border-zinc-800 p-2 text-[11px] text-gray-600 dark:text-zinc-400 mt-3 rounded">
                      <p className="font-semibold text-[10px] uppercase font-mono tracking-wider flex items-center gap-1 text-gray-500 dark:text-zinc-400">
                        <Info className="w-3 h-3 text-indigo-500" /> Paparazzi Spot Snapshot:
                      </p>
                      <p className="mt-1 leading-relaxed">"{sneaker.sightingContext}"</p>
                    </div>
                  </div>

                  {/* Pricing Matrix */}
                  <div className="mt-4 pt-3 border-t border-gray-100 dark:border-zinc-800/80 grid grid-cols-2 gap-2 text-center text-xs font-mono">
                    <div className="bg-gray-50 dark:bg-zinc-900 p-1 rounded">
                      <span className="text-[9px] text-gray-400 uppercase tracking-widest block">Retail Price</span>
                      <span className="font-bold text-gray-700 dark:text-zinc-300 flex items-center justify-center gap-0.5 mt-0.5">
                        <ShoppingBag className="w-3 h-3 text-gray-400" />
                        ${sneaker.retailPrice || 'N/A'}
                      </span>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/20 p-1 rounded">
                      <span className="text-[9px] text-amber-600 dark:text-amber-550 uppercase tracking-widest block font-bold">Resale Market</span>
                      <span className="font-bold text-amber-700 dark:text-amber-400 flex items-center justify-center gap-0.5 mt-0.5">
                        <TrendingUp className="w-3 h-3 text-amber-500" />
                        ${sneaker.estimatedPrice}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-gray-50 dark:bg-zinc-900/60 p-4 border-t border-gray-100 dark:border-zinc-800 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-gray-400 dark:text-zinc-500 shrink-0">
          <span>Active Spot Tracker Dossier</span>
          <span>Verified Accurate ✔</span>
        </div>
      </div>
    </div>
  );
}
