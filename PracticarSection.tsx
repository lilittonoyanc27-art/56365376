/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ALL_QUESTIONS, CATEGORIES_LIST } from './questionsData';
import { Question, QuestionCategory } from './types';
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Languages,
  Eye,
  EyeOff,
  Filter,
  Check,
} from 'lucide-react';

interface PracticarSectionProps {
  onRecordError: (questionId: string) => void;
  onRecordSuccess: (questionId: string) => void;
}

export const PracticarSection: React.FC<PracticarSectionProps> = ({
  onRecordError,
  onRecordSuccess,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<QuestionCategory | 'todas'>('todas');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [showArmenianHints, setShowArmenianHints] = useState<boolean>(true);
  const [score, setScore] = useState<{ correct: number; total: number }>({ correct: 0, total: 0 });

  const activeQuestions = ALL_QUESTIONS.filter((q) => {
    if (selectedCategory === 'todas') return true;
    return q.categoria === selectedCategory;
  });

  const currentQ: Question = activeQuestions[currentIndex] || activeQuestions[0];

  const handleSelectOption = (op: string) => {
    if (isAnswered) return;
    setSelectedAnswer(op);
  };

  const handleVerify = () => {
    if (!selectedAnswer || isAnswered) return;
    setIsAnswered(true);

    const normUser = selectedAnswer.trim().toLowerCase();
    const normCorrect = currentQ.respuestaCorrecta.trim().toLowerCase();
    const normAlts = (currentQ.respuestasAlternativasValidas || []).map((a) => a.trim().toLowerCase());

    const isCorrect = normUser === normCorrect || normAlts.includes(normUser);

    setScore((prev) => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));

    if (isCorrect) {
      onRecordSuccess(currentQ.id);
    } else {
      onRecordError(currentQ.id);
    }
  };

  const handleNext = () => {
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore({ correct: 0, total: 0 });
  };

  const handleCategoryChange = (cat: QuestionCategory | 'todas') => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const normUser = (selectedAnswer || '').trim().toLowerCase();
  const normCorrect = currentQ?.respuestaCorrecta.trim().toLowerCase();
  const normAlts = (currentQ?.respuestasAlternativasValidas || []).map((a) => a.trim().toLowerCase());
  const isCorrect = normUser === normCorrect || normAlts.includes(normUser);

  return (
    <div className="space-y-6">
      {/* Top Header Card */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              Entrenamiento interactivo — Ինտերակտիվ վարժություններ
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Practicar conjugaciones — Վարժվել խոնարհումներում
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Pon a prueba tus conocimientos pregunta por pregunta con corrección inmediata y explicaciones bilingües.
              <br />
              <span className="text-slate-500">
                Ստուգիր գիտելիքներդ հարց առ հարց՝ անմիջապես ստուգմամբ և երկլեզու բացատրություններով։
              </span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <div className="text-[10px] uppercase font-bold text-slate-500">
                Aciertos / Ճիշտ
              </div>
              <div className="text-base font-bold text-slate-900">
                {score.correct} / {score.total}
              </div>
            </div>

            <button
              onClick={() => setShowArmenianHints(!showArmenianHints)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-colors ${
                showArmenianHints
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
              }`}
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{showArmenianHints ? '🇦🇲 Հայերենը բաց է' : '🇦🇲 Հայերենը փակ է'}</span>
              {showArmenianHints ? <Eye className="w-3.5 h-3.5 ml-0.5" /> : <EyeOff className="w-3.5 h-3.5 ml-0.5" />}
            </button>

            <button
              onClick={handleReset}
              className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              title="Reiniciar práctica / Վերսկսել"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-4 pt-3 border-t border-slate-100">
          <div className="text-xs font-bold text-slate-600 mb-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            Filtrar por bloque / Ընտրել բաժինը:
          </div>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => handleCategoryChange('todas')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                selectedCategory === 'todas'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Todos ({ALL_QUESTIONS.length}) • Բոլորը
            </button>
            {CATEGORIES_LIST.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.nombreEs}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Question Card */}
      {currentQ && (
        <div className="bg-white rounded-2xl border border-slate-200 p-5 md:p-7 shadow-xs space-y-6">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between text-xs font-medium text-slate-500">
            <span className="font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
              {currentQ.categoriaEs} • {currentQ.categoriaHy}
            </span>
            <span>
              Pregunta {currentIndex + 1} de {activeQuestions.length} (Հարց {currentIndex + 1} / {activeQuestions.length})
            </span>
          </div>

          {/* Context text if available */}
          {currentQ.contextoTextoEs && (
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm space-y-1">
              <div className="font-semibold text-slate-900">
                {currentQ.contextoTextoEs}
              </div>
              {showArmenianHints && currentQ.contextoTextoHy && (
                <div className="text-xs text-slate-600 pt-1 border-t border-slate-200/60 font-normal">
                  🇦🇲 {currentQ.contextoTextoHy}
                </div>
              )}
            </div>
          )}

          {/* Question Enunciation */}
          <div className="space-y-1.5">
            <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
              {currentQ.enunciadoEs}
            </h3>
            {showArmenianHints && (
              <div className="text-sm md:text-base text-amber-950 font-medium">
                🇦🇲 {currentQ.enunciadoHy}
              </div>
            )}
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentQ.opciones.map((op, oIdx) => {
              const isSelected = selectedAnswer === op;
              const isThisCorrect =
                op.trim().toLowerCase() === normCorrect ||
                normAlts.includes(op.trim().toLowerCase());

              let btnStyle = 'border-slate-200 bg-white hover:border-amber-400 hover:bg-amber-50/30';

              if (isSelected && !isAnswered) {
                btnStyle = 'border-amber-500 bg-amber-50 ring-2 ring-amber-500/20 text-slate-900';
              } else if (isAnswered) {
                if (isThisCorrect) {
                  btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-500/30';
                } else if (isSelected && !isThisCorrect) {
                  btnStyle = 'border-rose-400 bg-rose-50 text-rose-950 ring-2 ring-rose-400/20 line-through';
                } else {
                  btnStyle = 'border-slate-200 bg-slate-50/50 text-slate-400 opacity-60';
                }
              }

              return (
                <button
                  key={oIdx}
                  type="button"
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(op)}
                  className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
                >
                  <span className="text-sm md:text-base font-medium">{op}</span>
                  {isAnswered && isThisCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                  {isAnswered && isSelected && !isThisCorrect && (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                  )}
                  {!isAnswered && (
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                        isSelected ? 'border-amber-600 bg-amber-600 text-white' : 'border-slate-300'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Action Button: Verify or Next */}
          <div className="pt-2 flex items-center justify-end gap-3">
            {!isAnswered ? (
              <button
                type="button"
                disabled={!selectedAnswer}
                onClick={handleVerify}
                className="px-6 py-3 rounded-xl font-bold text-sm bg-amber-600 text-white hover:bg-amber-700 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-all"
              >
                Comprobar respuesta — Ստուգել պատասխանը
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                disabled={currentIndex >= activeQuestions.length - 1}
                className="px-6 py-3 rounded-xl font-bold text-sm bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-all flex items-center gap-2"
              >
                <span>Siguiente pregunta — Հաջորդ հարցը</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Explanation Box (Visible only after answer) */}
          {isAnswered && (
            <div
              className={`p-5 rounded-xl border animate-fadeIn space-y-3 ${
                isCorrect
                  ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
                  : 'bg-amber-50/70 border-amber-300 text-amber-950'
              }`}
            >
              <div className="flex items-center gap-2 font-bold text-base">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>¡Correcto! — Ճիշտ է։</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-amber-700" />
                    <span>Respuesta correcta: {currentQ.respuestaCorrecta} — Ճիշտ պատասխանը</span>
                  </>
                )}
              </div>

              <div className="text-sm font-medium leading-relaxed">
                {currentQ.explicacionEs}
              </div>

              <div className="text-xs pt-2 border-t border-slate-200/60 font-normal">
                🇦🇲 {currentQ.explicacionHy}
              </div>

              {currentQ.analisisVerbal && (
                <div className="mt-3 p-3 rounded-lg bg-white/80 border border-slate-200 text-xs font-mono">
                  <div className="font-bold text-slate-800 mb-1">Análisis morfológico / Ձևաբանական վերլուծություն:</div>
                  <div>Infinitivo: {currentQ.analisisVerbal.infinitivo} ({currentQ.analisisVerbal.conjugacion})</div>
                  <div>Persona y número: {currentQ.analisisVerbal.persona} {currentQ.analisisVerbal.numero}</div>
                  <div>Tiempo y modo: {currentQ.analisisVerbal.tiempo} ({currentQ.analisisVerbal.modo})</div>
                  <div>Estructura: Forma {currentQ.analisisVerbal.tipoForma}</div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
