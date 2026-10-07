/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { GRAMMAR_SECTIONS } from './grammarData';
import { BilingualText } from './BilingualText';
import {
  BookMarked,
  Search,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Languages,
} from 'lucide-react';

export const RepasarSection: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandAllTranslations, setExpandAllTranslations] = useState<boolean>(true);

  const filteredSections = GRAMMAR_SECTIONS.filter((sec) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      sec.tituloEs.toLowerCase().includes(q) ||
      sec.tituloHy.toLowerCase().includes(q) ||
      sec.puntos.some((p) => p.es.toLowerCase().includes(q) || p.hy.toLowerCase().includes(q))
    );
  });

  return (
    <div className="space-y-6">
      {/* Intro Hero Card */}
      <div className="bg-linear-to-r from-amber-500/10 via-amber-600/5 to-transparent border border-amber-200/80 rounded-2xl p-5 md:p-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-2">
              <BookMarked className="w-3.5 h-3.5 text-amber-700" />
              Temario Oficial — Պաշտոնական ծրագիր
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Repaso y teoría gramatical — Քերականության տեսություն և կրկնություն
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              13 temas explicados con reglas, ejemplos y errores frecuentes. Haz clic en cualquier recuadro en español para revelar su traducción al armenio.
              <br />
              <span className="text-slate-500">
                13 թեմաներ՝ բացատրություններով, կանոններով, օրինակներով և տարածված սխալներով։ Սեղմիր ցանկացած իսպաներեն տեքստի վրա՝ հայերեն թարգմանությունը բացելու համար։
              </span>
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setExpandAllTranslations(!expandAllTranslations)}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-amber-400 transition-colors flex items-center gap-2 shadow-xs"
            >
              <Languages className="w-4 h-4 text-amber-600" />
              <span>
                {expandAllTranslations
                  ? '🇦🇲 Թարգմանությունները բացված են'
                  : '🇦🇲 Բացել բոլոր թարգմանությունները'}
              </span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-4 relative max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar tema o verbo (ej. subjuntivo, ser, desinencia)... / Որոնել թեմա..."
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 bg-white text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Sections Accordion */}
      <div className="space-y-4">
        {filteredSections.map((section) => {
          const isOpen = activeSectionId === section.id;
          return (
            <div
              key={section.id}
              className={`rounded-2xl border transition-all ${
                isOpen
                  ? 'border-amber-400/80 bg-white shadow-sm ring-2 ring-amber-500/10'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              {/* Title Header */}
              <button
                type="button"
                onClick={() => setActiveSectionId(isOpen ? null : section.id)}
                className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                      isOpen
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {section.id}
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-slate-900">
                      {section.tituloEs}
                    </h3>
                    <div className="text-xs md:text-sm font-medium text-amber-900 mt-0.5">
                      🇦🇲 {section.tituloHy}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-400">
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-amber-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {/* Section Content */}
              {isOpen && (
                <div className="p-4 md:p-6 border-t border-slate-100 space-y-5 animate-fadeIn">
                  {/* Introducción */}
                  {section.introduccionEs && (
                    <div className="bg-slate-50/70 p-3.5 rounded-xl border border-slate-200/60">
                      <div className="text-sm font-semibold text-slate-800">
                        {section.introduccionEs}
                      </div>
                      <div className="text-xs text-slate-600 mt-1 font-normal">
                        🇦🇲 {section.introduccionHy}
                      </div>
                    </div>
                  )}

                  {/* Points / Items with bilingual click reveal */}
                  <div className="space-y-3">
                    {section.puntos.map((punto, pIdx) => (
                      <div key={pIdx}>
                        <BilingualText
                          es={punto.es}
                          hy={punto.hy}
                          defaultExpanded={expandAllTranslations}
                          badge={
                            punto.tipo === 'alerta'
                              ? '¡Atención! • Ուշադրությո՛ւն'
                              : punto.tipo === 'ejemplo'
                              ? 'Ejemplo • Օրինակ'
                              : undefined
                          }
                          className={
                            punto.tipo === 'alerta'
                              ? 'border-amber-300 bg-amber-50/30'
                              : ''
                          }
                        />

                        {/* Morpheme analysis breakdown if present */}
                        {punto.desglose && (
                          <div className="mt-2 ml-4 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                            <div className="font-mono font-bold text-amber-900 text-sm mb-1">
                              {punto.desglose.termino}
                            </div>
                            <div className="text-slate-700">
                              {punto.desglose.explicacionEs}
                            </div>
                            <div className="text-slate-500 mt-0.5">
                              🇦🇲 {punto.desglose.explicacionHy}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Summary Table if provided */}
                  {section.tablaResumen && (
                    <div className="overflow-x-auto rounded-xl border border-slate-200">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-slate-100/80 text-slate-700 font-semibold uppercase">
                          <tr>
                            {section.tablaResumen.cabecerasEs.map((h, hIdx) => (
                              <th key={hIdx} className="p-3 border-b border-slate-200">
                                <div>{h}</div>
                                <div className="text-[10px] text-slate-500 normal-case font-normal">
                                  {section.tablaResumen?.cabecerasHy[hIdx]}
                                </div>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {section.tablaResumen.filas.map((fila, fIdx) => (
                            <tr key={fIdx} className="hover:bg-slate-50/70">
                              {fila.es.map((cell, cIdx) => (
                                <td key={cIdx} className="p-3">
                                  <div className="font-semibold text-slate-900">{cell}</div>
                                  <div className="text-[11px] text-slate-500 mt-0.5">
                                    {fila.hy[cIdx]}
                                  </div>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Regla de formación */}
                  {section.reglaEs && (
                    <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-emerald-900 uppercase tracking-wide">
                          Regla de formación — Կազմության կանոն
                        </div>
                        <div className="text-sm font-semibold text-emerald-950 mt-1">
                          {section.reglaEs}
                        </div>
                        <div className="text-xs text-emerald-800 mt-1">
                          🇦🇲 {section.reglaHy}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Error frecuente */}
                  {section.errorComunEs && (
                    <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-200 flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-rose-900 uppercase tracking-wide">
                          Error frecuente en el examen — Հաճախակի սխալ քննությանը
                        </div>
                        <div className="text-sm font-semibold text-rose-950 mt-1">
                          {section.errorComunEs}
                        </div>
                        <div className="text-xs text-rose-800 mt-1">
                          🇦🇲 {section.errorComunHy}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
