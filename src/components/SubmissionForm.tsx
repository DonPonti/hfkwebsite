import React, { useState } from 'react';
import { Celebrity } from '../types';
import { Send, Check, AlertCircle } from 'lucide-react';

interface SubmissionFormProps {
  celebrities: Celebrity[];
  onSubmitSpot: (spot: {
    celebrityName: string;
    sneakerName: string;
    brand: string;
    location: string;
    description: string;
    reporterName: string;
  }) => void;
}

export default function SubmissionForm({ celebrities, onSubmitSpot }: SubmissionFormProps) {
  const [celebrityName, setCelebrityName] = useState('');
  const [sneakerName, setSneakerName] = useState('');
  const [brand, setBrand] = useState('Nike');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [reporterName, setReporterName] = useState('');
  
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const BRANDS = ['Nike', 'Jordan Brand', 'Adidas', 'Yeezy', 'New Balance', 'Louis Vuitton', 'Salomon', 'Puma x Fenty', 'Asics', 'Balenciaga', 'Other'];

  const handleAutocompleteClick = (name: string) => {
    setCelebrityName(name);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!celebrityName.trim()) {
      setErrorMsg('Please enter or select a Celebrity.');
      return;
    }
    if (!sneakerName.trim()) {
      setErrorMsg('Please specify the Sneaker model.');
      return;
    }
    if (!location.trim()) {
      setErrorMsg('Provide a sighting location.');
      return;
    }
    if (!reporterName.trim()) {
      setErrorMsg('Please provide your Reporter Name/Alias.');
      return;
    }

    onSubmitSpot({
      celebrityName: celebrityName.trim(),
      sneakerName: sneakerName.trim(),
      brand,
      location: location.trim(),
      description: description.trim() || 'No additional description provided.',
      reporterName: reporterName.trim()
    });

    setSubmitted(true);
    // Reset inputs
    setCelebrityName('');
    setSneakerName('');
    setBrand('Nike');
    setLocation('');
    setDescription('');
    setReporterName('');

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  // Find partial matches to show autocomplete chips
  const matchedCelebs = celebrityName.trim()
    ? celebrities.filter(c => c.name.toLowerCase().includes(celebrityName.toLowerCase()) && c.name.toLowerCase() !== celebrityName.toLowerCase())
    : [];

  return (
    <div id="submit-sighting-form" className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg p-6">
      <h3 className="font-sans font-bold text-lg text-gray-900 dark:text-zinc-50 mb-1">
        Report a Celebrity Sneaker Sighting
      </h3>
      <p className="text-gray-500 dark:text-zinc-400 text-xs mb-6 font-mono">
        Spotted a star rocking heat? Submit the details to assist our high-performance spotters index.
      </p>

      {errorMsg && (
        <div className="mb-4 p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-400 text-xs rounded flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {submitted && (
        <div className="mb-4 p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-400 text-xs rounded flex items-center gap-2">
          <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <div>
            <p className="font-bold">Sighting Submitted successfully!</p>
            <p className="mt-0.5">Your report is logged, verified, and live on our public sightings tracker.</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1">
              Celebrity Name
            </label>
            <input
              type="text"
              placeholder="e.g. Zendaya, Billie Eilish..."
              value={celebrityName}
              onChange={(e) => setCelebrityName(e.target.value)}
              className="w-full text-xs p-2.5 rounded border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 text-gray-950 dark:text-zinc-50 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white transition-shadow"
            />
            {matchedCelebs.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                <span className="text-[10px] text-gray-400 self-center">Suggestions:</span>
                {matchedCelebs.slice(0, 3).map(c => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => handleAutocompleteClick(c.name)}
                    className="text-[10px] bg-gray-100 dark:bg-zinc-800 dark:text-zinc-300 hover:bg-gray-200 dark:hover:bg-zinc-700 px-2 py-0.5 rounded transition-colors"
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1">
              Sneaker Model
            </label>
            <input
              type="text"
              placeholder="e.g. Air Jordan 4 Retro 'Bred Reimagined'"
              value={sneakerName}
              onChange={(e) => setSneakerName(e.target.value)}
              className="w-full text-xs p-2.5 rounded border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 text-gray-950 dark:text-zinc-50 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white transition-shadow"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1">
              Brand
            </label>
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full text-xs p-2.5 rounded border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 text-gray-950 dark:text-zinc-50 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white transition-shadow"
            >
              {BRANDS.map(b => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1">
              Sighting Location
            </label>
            <input
              type="text"
              placeholder="e.g. Sunset Tower Hotel, LA Court Sidewalk"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full text-xs p-2.5 rounded border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 text-gray-950 dark:text-zinc-50 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white transition-shadow"
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1">
            Context Description (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="Tell us about the outfit fit, the events flow, co-stars present, or specific sneaker details you noticed."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full text-xs p-2.5 rounded border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 text-gray-950 dark:text-zinc-50 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white transition-resize"
          />
        </div>

        <div>
          <label className="block text-[11px] font-mono uppercase tracking-wider text-gray-500 dark:text-zinc-400 mb-1">
            Reporter Alias (Your Name)
          </label>
          <input
            type="text"
            placeholder="e.g. SoleSeeker / ShoeDete_99"
            value={reporterName}
            onChange={(e) => setReporterName(e.target.value)}
            className="w-full text-xs p-2.5 rounded border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950 text-gray-950 dark:text-zinc-50 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white transition-shadow"
          />
        </div>

        <button
          type="submit"
          disabled={submitted}
          className="w-full flex items-center justify-center gap-2 p-3 bg-black dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-white text-white dark:text-black font-sans font-bold text-xs rounded transition-all cursor-pointer shadow-sm hover:shadow active:scale-[0.99] disabled:opacity-50"
        >
          <Send className="w-3.5 h-3.5" />
          Transmit Sighting to Directory
        </button>
      </form>
    </div>
  );
}
