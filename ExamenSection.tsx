/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { getRandomExamQuestions } from './questionsData';
import { Question } from './types';
import {
  GraduationCap,
  Award,
  AlertCircle,
  RotateCcw,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  Flame,
  Clock,
  Languages,
} from 'lucide-react';

interface ExamenSectionProps {
  onPracticeMistakes: (questionIds: string[]) => void;
  onRecordExamResults: (correctCount: number, total: number) => void;
}

export const ExamenSection: React.FC<ExamenSectionProps> = ({
  onPracticeMistakes,
  onRecordExamResults,
}) => {
  const [examQuestions, setExamQuestions] = useState<Question[]>(() => getRandomExamQuestions(30));
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [showArmenianHints, setShowArmenianHints] = useState<boolean>(true);

  const startNewExam = () => {
    setExamQuestions(getRandomExamQuestions(30));
    setUserAnswers({});
    setCurrentIndex(0);
    setIsFinished(false);
  };

  const handleSelectAnswer = (option: string) => {
    if (isFinished) return;
    const currentQ = examQuestions[currentIndex];
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: option,
    }));
  };

  const handleFinishExam = () => {
    setIsFinished(true);

    let correctCount = 0;
    examQuestions.forEach((q) => {
      const ans = userAnswers[q.id]?.trim().toLowerCase();
      const correct = q.respuestaCorrecta.trim().toLowerCase();
      const alts = (q.respuestasAlternativasValidas || []).map((a) => a.trim().toLowerCase());
      if (ans === correct || alts.includes(ans)) {
        correctCount++;
      }
    });

    onRecordExamResults(correctCount, examQuestions.length);
  };

  // Results calculation
  const total = examQuestions.length;
  let correctCount = 0;
  const incorrectQuestions: Question[] = [];
  const categoryMistakes: Record<string, { es: string; hy: string; count: number }> = {};

  if (isFinished) {
    examQuestions.forEach((q) => {
      const ans = userAnswers[q.id]?.trim().toLowerCase();
      const correct = q.respuestaCorrecta.trim().toLowerCase();
      const alts = (q.respuestasAlternativasValidas || []).map((a) => a.trim().toLowerCase());
      const isRight = ans === correct || alts.includes(ans);

      if (isRight) {
        correctCount++;
      } else {
        incorrectQuestions.push(q);
        if (!categoryMistakes[q.categoria]) {
          categoryMistakes[q.categoria] = {
            es: q.categoriaEs,
            hy: q.categoriaHy,
            count: 0,
          };
        }
        categoryMistakes[q.categoria].count++;
      }
    });
  }

  const scorePercentage = Math.round((correctCount / total) * 100);
  const currentQ = examQuestions[currentIndex];
  const answeredCount = Object.keys(userAnswers).length;

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 text-xs font-semibold mb-2">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-700" />
              Simulacro oficial — Պաշտոնական քննություն
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900">
              Examen de conjugación (30 preguntas) — Քննություն (30 հարց)
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Las soluciones y explicaciones completas se mostrarán al entregar el examen.
              <br />
              <span className="text-slate-500">
                Լուծումները և ամբողջական բացատրությունները կցուցադրվեն միայն քննությունն ավարտելուց հետո։
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowArmenianHints(!showArmenianHints)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-colors ${
                showArmenianHints
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : 'bg-white text-slate-600 border-slate-300'
              }`}
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{showArmenianHints ? '🇦🇲 Հայերեն' : '🇦🇲 Հայերենը փակ է'}</span>
            </button>

            <button
              onClick={startNewExam}
              className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 hover:bg-slate-50 text-slate-700 flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Nuevo examen — Նոր քննություն</span>
            </button>
          </div>
        </div>

        {/* Exam progress bar */}
        {!isFinished && (
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>Respondidas: {answeredCount} de {total} (Լրացված է՝ {answeredCount} / {total})</span>
            </div>
            <div className="w-36 bg-slate-100 rounded-full h-2 overflow-hidden">
              <div
                className="bg-amber-500 h-full transition-all duration-300"
                style={{ width: `${(answeredCount / total) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Active Exam Taking View */}
      {!isFinished ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-5 md:p-7 shadow-xs space-y-6">
          {/* Header Info */}
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
              {currentQ.categoriaEs} • {currentQ.categoriaHy}
            </span>
            <span className="font-bold">
              {currentIndex + 1} / {total}
            </span>
          </div>

          {/* Context if available */}
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

          {/* Question Text */}
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

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentQ.opciones.map((op, oIdx) => {
              const isSelected = userAnswers[currentQ.id] === op;
              return (
                <button
                  key={oIdx}
                  type="button"
                  onClick={() => handleSelectAnswer(op)}
                  className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50/80 ring-2 ring-indigo-600/20 text-indigo-950 font-semibold shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70 text-slate-800'
                  }`}
                >
                  <span className="text-sm md:text-base">{op}</span>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300'
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex((prev) => prev - 1)}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Anterior — Նախորդը</span>
            </button>

            <div className="flex items-center gap-2">
              {currentIndex < total - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentIndex((prev) => prev + 1)}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold flex items-center gap-1.5 shadow-xs"
                >
                  <span>Siguiente — Հաջորդը</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleFinishExam}
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 text-xs font-bold shadow-xs flex items-center gap-1.5"
                >
                  <Award className="w-4 h-4" />
                  <span>Finalizar y calificar — Ավարտել և գնահատել</span>
                </button>
              )}
            </div>
          </div>

          {/* Question Grid Quick Jump */}
          <div className="pt-4 border-t border-slate-100">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
              Mapa de preguntas / Հարցերի ցանկ:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {examQuestions.map((q, idx) => {
                const isAns = !!userAnswers[q.id];
                const isCur = currentIndex === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-7 h-7 rounded-lg text-xs font-semibold transition-all ${
                      isCur
                        ? 'bg-indigo-600 text-white ring-2 ring-indigo-600/30'
                        : isAns
                        ? 'bg-slate-800 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="space-y-6 animate-fadeIn">
          {/* Score Hero */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-700 mb-3">
              <Award className="w-8 h-8" />
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Resultado del examen — Քննության արդյունքը
            </h3>

            <div className="text-4xl md:text-5xl font-black text-amber-600 my-3 font-mono">
              {correctCount} / {total}
              <span className="text-xl md:text-2xl text-slate-500 font-normal ml-2">
                ({scorePercentage}%)
              </span>
            </div>

            <p className="text-slate-600 text-sm max-w-lg mx-auto">
              {scorePercentage >= 80
                ? '¡Excelente dominio de las conjugaciones verbales! — Գերազանց արդյունք բայերի խոնարհումից։'
                : scorePercentage >= 60
                ? 'Buen resultado, aunque conviene repasar los temas con errores. — Լավ արդյունք, բայց արժե կրկնել սխալված թեմաները։'
                : 'Se recomienda repasar a fondo las tablas y reglas. — Խորհուրդ է տրվում մանրամասն կրկնել աղյուսակներն ու կանոնները։'}
            </p>

            {/* Topics needing reinforcement */}
            {Object.keys(categoryMistakes).length > 0 && (
              <div className="mt-6 p-4 rounded-xl bg-rose-50/70 border border-rose-200 text-left max-w-xl mx-auto">
                <div className="flex items-center gap-2 text-rose-900 font-bold text-sm mb-2">
                  <AlertCircle className="w-4 h-4 text-rose-600" />
                  Temas que conviene repetir — Կրկնելու կարիք ունեցող թեմաներ:
                </div>
                <ul className="space-y-1.5 text-xs text-rose-950">
                  {Object.values(categoryMistakes).map((cm, cIdx) => (
                    <li key={cIdx} className="flex items-center justify-between">
                      <span>• {cm.es} ({cm.hy})</span>
                      <span className="font-bold bg-rose-200/80 px-2 py-0.5 rounded-full text-rose-900">
                        {cm.count} սխալ
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => onPracticeMistakes(incorrectQuestions.map((q) => q.id))}
                  className="mt-4 w-full py-2.5 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 transition-colors shadow-xs flex items-center justify-center gap-1.5"
                >
                  <Flame className="w-4 h-4" />
                  <span>Practicar solo los errores del examen — Վարժվել միայն այս սխալների վրա</span>
                </button>
              </div>
            )}
          </div>

          {/* Full Detailed Breakdown of All 30 Questions */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-slate-900">
              Revisión detallada de respuestas — Պատասխանների մանրամասն ստուգում
            </h4>

            {examQuestions.map((q, idx) => {
              const userAns = userAnswers[q.id];
              const normA = (userAns || '').trim().toLowerCase();
              const normC = q.respuestaCorrecta.trim().toLowerCase();
              const normAlts = (q.respuestasAlternativasValidas || []).map((a) => a.trim().toLowerCase());
              const isRight = normA === normC || normAlts.includes(normA);

              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all ${
                    isRight
                      ? 'bg-white border-emerald-200/80 shadow-xs'
                      : 'bg-white border-rose-200/80 shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                          isRight ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {q.categoriaEs} • {q.categoriaHy}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-bold">
                      {isRight ? (
                        <span className="text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" /> Correcto • Ճիշտ
                        </span>
                      ) : (
                        <span className="text-rose-700 flex items-center gap-1">
                          <XCircle className="w-4 h-4" /> Incorrecto • Սխալ
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-3 text-base font-bold text-slate-900">
                    {q.enunciadoEs}
                  </div>
                  <div className="text-xs text-amber-950 font-medium mt-0.5">
                    🇦🇲 {q.enunciadoHy}
                  </div>

                  {q.contextoTextoEs && (
                    <div className="mt-2 text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-150 text-slate-700">
                      {q.contextoTextoEs}
                    </div>
                  )}

                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-150">
                      <div className="text-slate-500 uppercase font-semibold text-[10px]">
                        Tu respuesta / Քո պատասխանը:
                      </div>
                      <div
                        className={`font-bold mt-0.5 ${
                          isRight ? 'text-emerald-700' : 'text-rose-700'
                        }`}
                      >
                        {userAns || '(Sin responder / Չի պատասխանվել)'}
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200">
                      <div className="text-emerald-800 uppercase font-semibold text-[10px]">
                        Respuesta correcta / Ճիշտ պատասխանը:
                      </div>
                      <div className="font-bold text-emerald-950 mt-0.5">
                        {q.respuestaCorrecta}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                    <div className="font-medium text-slate-800">{q.explicacionEs}</div>
                    <div className="text-slate-500">🇦🇲 {q.explicacionHy}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
