/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Volume2, Languages, Eye, EyeOff } from 'lucide-react';

interface BilingualTextProps {
  es: string;
  hy: string;
  defaultExpanded?: boolean;
  className?: string;
  size?: 'sm' | 'base' | 'lg' | 'xl';
  showAudio?: boolean;
  badge?: string;
}

export const BilingualText: React.FC<BilingualTextProps> = ({
  es,
  hy,
  defaultExpanded = false,
  className = '',
  size = 'base',
  showAudio = true,
  badge,
}) => {
  const [isRevealed, setIsRevealed] = useState<boolean>(defaultExpanded);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const speakSpanish = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    // Clean string from markdown or emojis for TTS
    const cleanText = es.replace(/[🇪🇸🇦🇲*#]/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'es-ES';
    utterance.rate = 0.9;
    setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);
    window.speechSynthesis.speak(utterance);
  };

  const toggleReveal = () => {
    setIsRevealed((prev) => !prev);
  };

  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl font-bold',
  }[size];

  return (
    <div
      onClick={toggleReveal}
      className={`group relative rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-xs transition-all hover:border-amber-400 hover:shadow-sm cursor-pointer select-text ${className}`}
      title="Clic para mostrar u ocultar la traducción al armenio / Սեղմեք՝ հայերեն թարգմանությունը բացելու համար"
    >
      <div className="flex items-start justify-between gap-2.5">
        <div className="flex-1">
          {badge && (
            <span className="inline-block px-2 py-0.5 mb-1.5 text-xs font-semibold rounded-md bg-amber-100 text-amber-900">
              {badge}
            </span>
          )}
          <div className={`text-slate-900 font-medium leading-relaxed ${sizeClasses}`}>
            {es}
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
          {showAudio && (
            <button
              type="button"
              onClick={speakSpanish}
              className={`p-1.5 rounded-lg text-slate-500 hover:text-amber-700 hover:bg-amber-50 transition-colors ${
                isPlaying ? 'text-amber-600 bg-amber-100 animate-pulse' : ''
              }`}
              title="Escuchar pronunciación en español / Լսել իսպաներեն արտասանությունը"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          )}

          <div
            className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition-colors ${
              isRevealed
                ? 'bg-amber-100 text-amber-800'
                : 'bg-slate-100 text-slate-600 group-hover:bg-amber-50 group-hover:text-amber-700'
            }`}
          >
            <Languages className="w-3.5 h-3.5" />
            <span className="font-semibold">{isRevealed ? '🇦🇲 Հայերեն' : '🇦🇲 Թարգմանել'}</span>
            {isRevealed ? <EyeOff className="w-3 h-3 ml-0.5" /> : <Eye className="w-3 h-3 ml-0.5 opacity-60" />}
          </div>
        </div>
      </div>

      {isRevealed && (
        <div className="mt-2.5 pt-2.5 border-t border-amber-100 bg-amber-50/50 -mx-3.5 -mb-3.5 p-3 rounded-b-xl animate-fadeIn">
          <div className="text-amber-950 font-normal leading-relaxed text-sm">
            {hy}
          </div>
        </div>
      )}
    </div>
  );
};
