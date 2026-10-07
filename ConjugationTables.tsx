/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { VERBS_DATA } from './conjugationData';
import { VerbKey, MoodKey } from './types';
import { Volume2, BookOpen, Layers, Sparkles, Languages } from 'lucide-react';

export const ConjugationTables: React.FC = () => {
  const [selectedVerb, setSelectedVerb] = useState<VerbKey>('amar');
  const [selectedMood, setSelectedMood] = useState<MoodKey | 'todos'>('todos');
  const [showMorphemes, setShowMorphemes] = useState<boolean>(true);
  const [showArmenianTranslations, setShowArmenianTranslations] = useState<boolean>(true);

  const verb = VERBS_DATA[selectedVerb];

  const playSpeech = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'es-ES';
    utt.rate = 0.9;
    window.speechSynthesis.speak(utt);
  };

  const filteredTiempos = verb.tiempos.filter((t) => {
    if (selectedMood === 'todos') return true;
    return t.modo === selectedMood;
  });

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="bg-white rounded-2xl p-5 shadow-xs border border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-amber-600" />
              Tablas de conjugación completa — Խոնարհման ամբողջական աղյուսակներ
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Consulta las seis personas gramaticales y sus formas no personales. Haz clic en cualquier forma para escucharla o ver su traducción.
              <br />
              <span className="text-slate-500 font-normal">
                Ուսումնասիրիր բոլոր վեց դեմքերը և անդեմ ձևերը։ Սեղմիր ցանկացած ձևի վրա՝ լսելու կամ թարգմանությունը տեսնելու համար։
              </span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowMorphemes(!showMorphemes)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors border ${
                showMorphemes
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              {showMorphemes ? 'Lex/Vt/D ակտիվ է' : 'Ցույց տալ Lex / Vt / D'}
            </button>

            <button
              onClick={() => setShowArmenianTranslations(!showArmenianTranslations)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors border ${
                showArmenianTranslations
                  ? 'bg-indigo-100 text-indigo-900 border-indigo-300'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Languages className="w-3.5 h-3.5 text-indigo-600" />
              {showArmenianTranslations ? '🇦🇲 Հայերենը բաց է' : '🇦🇲 Բացել հայերենը'}
            </button>
          </div>
        </div>

        {/* Verb selector pills */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {(['amar', 'temer', 'partir', 'ser'] as VerbKey[]).map((vKey) => {
            const v = VERBS_DATA[vKey];
            const isSelected = selectedVerb === vKey;
            return (
              <button
                key={vKey}
                onClick={() => setSelectedVerb(vKey)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'border-amber-500 bg-amber-50/80 shadow-xs ring-2 ring-amber-500/20'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-lg uppercase tracking-wide">{v.infinitivoEs}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                      v.tipoEs === 'Regular' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {v.tipoEs}
                  </span>
                </div>
                <div className="text-xs text-amber-900 font-medium mt-0.5">
                  🇦🇲 {v.infinitivoHy}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {v.conjugacionEs} • {v.conjugacionHy}
                </div>
              </button>
            );
          })}
        </div>

        {/* Mood selector tabs */}
        <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-slate-100">
          {[
            { id: 'todos', es: 'Todos los modos', hy: 'Բոլոր եղանակները' },
            { id: 'indicativo', es: 'Modo Indicativo', hy: 'Սահմանական եղանակ' },
            { id: 'subjuntivo', es: 'Modo Subjuntivo', hy: 'Ըղձական եղանակ' },
            { id: 'imperativo', es: 'Modo Imperativo', hy: 'Հրամայական եղանակ' },
            { id: 'noPersonales', es: 'Formas no personales', hy: 'Անդեմ ձևեր' },
          ].map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedMood(m.id as MoodKey | 'todos')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedMood === m.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {m.es} <span className="opacity-75">({m.hy})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Non-personal forms box (if mood allows) */}
      {(selectedMood === 'todos' || selectedMood === 'noPersonales') && (
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-3">
            <Layers className="w-5 h-5 text-amber-600" />
            Formas no personales — Բայի անդեմ ձևերը ({verb.infinitivoEs})
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {verb.noPersonales.map((np, idx) => (
              <div
                key={idx}
                onClick={() => playSpeech(np.forma)}
                className="p-3 rounded-xl border border-slate-150 bg-slate-50/60 hover:bg-amber-50 hover:border-amber-300 transition-colors cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                    {np.nombreEs}
                  </span>
                  <Volume2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600" />
                </div>
                <div className="text-xs text-slate-500 font-normal">
                  {np.nombreHy}
                </div>
                <div className="text-lg font-bold text-amber-900 mt-1 font-mono">
                  {np.forma}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Personal tenses tables */}
      {selectedMood !== 'noPersonales' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredTiempos.map((tiempo) => (
            <div
              key={tiempo.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider ${
                        tiempo.tiempoTipo === 'simple'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-purple-100 text-purple-800'
                      }`}
                    >
                      {tiempo.tiempoTipo === 'simple' ? 'Simple • Պարզ' : 'Compuesto • Բաղադրյալ'}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 uppercase">
                      {tiempo.modo}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mt-1">
                    {tiempo.nombreEs}
                  </h4>
                  <div className="text-xs font-medium text-amber-900">
                    🇦🇲 {tiempo.nombreHy}
                  </div>
                  {tiempo.descripcionEs && (
                    <p className="text-xs text-slate-500 mt-1 leading-snug">
                      {tiempo.descripcionEs}
                    </p>
                  )}
                </div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-slate-100 p-2 flex-1">
                {tiempo.formas.map((f, fIdx) => (
                  <div
                    key={fIdx}
                    onClick={() => playSpeech(f.forma)}
                    className="p-2.5 rounded-lg hover:bg-amber-50/70 transition-colors cursor-pointer group flex items-center justify-between gap-2"
                  >
                    <div className="w-2/5">
                      <div className="text-xs font-semibold text-slate-700">
                        {f.personaEs}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {f.personaHy}
                      </div>
                    </div>

                    <div className="w-3/5 text-right flex items-center justify-end gap-2">
                      <div>
                        <div className="text-base font-bold text-slate-900 font-mono tracking-tight group-hover:text-amber-800">
                          {f.forma}
                        </div>
                        {showMorphemes && f.analisis && (
                          <div className="text-[10px] text-slate-500 font-mono mt-0.5 space-x-1">
                            {f.analisis.lexema && (
                              <span className="bg-amber-100 text-amber-900 px-1 py-0.2 rounded" title="Lexema">
                                {f.analisis.lexema}
                              </span>
                            )}
                            {f.analisis.vocalTematica && (
                              <span className="bg-sky-100 text-sky-900 px-1 py-0.2 rounded" title="Vocal temática">
                                {f.analisis.vocalTematica}
                              </span>
                            )}
                            {f.analisis.tiempoModo && (
                              <span className="bg-emerald-100 text-emerald-900 px-1 py-0.2 rounded" title="Tiempo/Modo">
                                {f.analisis.tiempoModo}
                              </span>
                            )}
                            {f.analisis.desinencia && (
                              <span className="bg-rose-100 text-rose-900 px-1 py-0.2 rounded" title="Desinencia">
                                {f.analisis.desinencia}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          playSpeech(f.forma);
                        }}
                        className="p-1 rounded text-slate-400 group-hover:text-amber-600 hover:bg-amber-100"
                        title="Escuchar"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
