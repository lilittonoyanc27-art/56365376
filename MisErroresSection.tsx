/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ALL_QUESTIONS } from './questionsData';
import { Question } from './types';
import {
  AlertTriangle,
  RotateCcw,
  CheckCircle2,
  Trash2,
  Sparkles,
  ArrowRight,
  Flame,
  Check,
  XCircle,
} from 'lucide-react';

interface MisErroresSectionProps {
  errorQuestionIds: string[];
  onRemoveError: (questionId: string) => void;
  onClearAllErrors: () => void;
}

export const MisErroresSection: React.FC<MisErroresSectionProps> = ({
  errorQuestionIds,
  onRemoveError,
  onClearAllErrors,
}) => {
  const errorQuestions: Question[] = ALL_QUESTIONS.filter((q) =>
    errorQuestionIds.includes(q.id)
  );

  const [activePracticeIndex, setActivePracticeIndex] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState<boolean>(false);

  const isPracticing = activePracticeIndex !== null && errorQuestions[activePracticeIndex];
  const currentQ = isPracticing ? errorQuestions[activePracticeIndex] : null;

  const handleStartPractice = () => {
    if (errorQuestions.length > 0) {
      setActivePracticeIndex(0);
      setSelectedOption(null);
      setIsVerified(false);
    }
  };

  const handleVerify = () => {
    if (!selectedOption || !currentQ || isVerified) return;
    setIsVerified(true);

    const normUser = selectedOption.trim().toLowerCase();
    const normCorrect = currentQ.respuestaCorrecta.trim().toLowerCase();
    const normAlts = (currentQ.respuestasAlternativasValidas || []).map((a) => a.trim().toLowerCase());

    if (normUser === normCorrect || normAlts.includes(normUser)) {
      // Remove from errors if answered correctly
      onRemoveError(currentQ.id);
    }
  };

  const handleNextInPractice = () => {
    if (activePracticeIndex === null) return;
    if (activePracticeIndex < errorQuestions.length - 1) {
      setActivePracticeIndex((prev) => (prev !== null ? prev + 1 : 0));
      setSelectedOption(null);
      setIsVerified(false);
    } else {
      setActivePracticeIndex(null);
      setSelectedOption(null);
      setIsVerified(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-semibold mb-2">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-700" />
              Banco de errores — Սխալների բանկ
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Mis errores guardados — Իմ պահպանված սխալները ({errorQuestions.length})
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Repasa y corrige las preguntas en las que has fallado para reforzar los puntos débiles.
              <br />
              <span className="text-slate-500">
                Կրկնիր և ուղղիր այն հարցերը, որոնցում սխալվել ես՝ թույլ կողմերն ամրապնդելու համար։
              </span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            {errorQuestions.length > 0 && (
              <>
                <button
                  onClick={handleStartPractice}
                  className="px-4 py-2.5 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 transition-colors shadow-xs flex items-center gap-1.5"
                >
                  <Flame className="w-4 h-4" />
                  <span>Entrenar estos errores — Վարժվել սխալների վրա</span>
                </button>

                <button
                  onClick={onClearAllErrors}
                  className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-rose-700 hover:bg-rose-50 transition-colors"
                  title="Vaciar banco de errores / Մաքրել բոլորը"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Error Practice Modal / Card */}
      {isPracticing && currentQ && (
        <div className="bg-white rounded-2xl border-2 border-rose-300 p-5 md:p-7 shadow-sm space-y-5 animate-fadeIn">
          <div className="flex items-center justify-between text-xs font-medium text-slate-500">
            <span className="font-semibold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
              {currentQ.categoriaEs} • {currentQ.categoriaHy}
            </span>
            <div className="flex items-center gap-3">
              <span>
                Error {activePracticeIndex + 1} de {errorQuestions.length}
              </span>
              <button
                onClick={() => setActivePracticeIndex(null)}
                className="text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
              {currentQ.enunciadoEs}
            </h3>
            <div className="text-sm text-amber-950 font-medium">
              🇦🇲 {currentQ.enunciadoHy}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentQ.opciones.map((op, idx) => {
              const isSelected = selectedOption === op;
              const normC = currentQ.respuestaCorrecta.trim().toLowerCase();
              const isThisRight = op.trim().toLowerCase() === normC;

              let style = 'border-slate-200 bg-white hover:border-rose-400';
              if (isSelected && !isVerified) {
                style = 'border-rose-500 bg-rose-50 ring-2 ring-rose-500/20 text-rose-950 font-semibold';
              } else if (isVerified) {
                if (isThisRight) {
                  style = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-500/30';
                } else if (isSelected && !isThisRight) {
                  style = 'border-rose-400 bg-rose-50 text-rose-900 line-through';
                } else {
                  style = 'border-slate-200 bg-slate-50 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={isVerified}
                  onClick={() => setSelectedOption(op)}
                  className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${style}`}
                >
                  <span className="text-sm font-medium">{op}</span>
                  {isVerified && isThisRight && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                  {isVerified && isSelected && !isThisRight && <XCircle className="w-5 h-5 text-rose-600" />}
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-end gap-3 pt-3">
            {!isVerified ? (
              <button
                type="button"
                disabled={!selectedOption}
                onClick={handleVerify}
                className="px-6 py-2.5 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 disabled:opacity-40 shadow-xs"
              >
                Comprobar — Ստուգել
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNextInPractice}
                className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 shadow-xs flex items-center gap-1.5"
              >
                <span>Siguiente error — Հաջորդ սխալը</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {isVerified && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5 animate-fadeIn">
              <div className="font-semibold text-slate-900">{currentQ.explicacionEs}</div>
              <div className="text-slate-500">🇦🇲 {currentQ.explicacionHy}</div>
            </div>
          )}
        </div>
      )}

      {/* List of Error Items */}
      {errorQuestions.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            ¡No tienes errores registrados! — Դու չունես գրանցված սխալներ:
          </h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            A medida que practiques o realices el examen, cualquier fallo se guardará automáticamente aquí para que puedas dominarlo.
            <br />
            Երբ վարժվես կամ քննություն հանձնես, բոլոր սխալներն ինքնաբերաբար կպահպանվեն այստեղ։
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {errorQuestions.map((q, idx) => (
            <div
              key={q.id}
              className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="space-y-1">
                <div className="text-xs font-semibold text-rose-700">
                  {q.categoriaEs} • {q.categoriaHy}
                </div>
                <div className="text-sm font-bold text-slate-900">
                  {q.enunciadoEs}
                </div>
                <div className="text-xs text-slate-500">
                  Respuesta correcta: <span className="font-semibold text-emerald-700">{q.respuestaCorrecta}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => onRemoveError(q.id)}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 border border-slate-200 transition-colors"
                >
                  Ya lo aprendí (Հեռացնել)
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
