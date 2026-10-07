/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { RepasarSection } from './RepasarSection';
import { ConjugationTables } from './ConjugationTables';
import { PracticarSection } from './PracticarSection';
import { ExamenSection } from './ExamenSection';
import { MisErroresSection } from './MisErroresSection';
import {
  BookOpen,
  Table,
  CheckCircle,
  GraduationCap,
  AlertTriangle,
  Award,
  Sparkles,
  Flame,
} from 'lucide-react';

type TabKey = 'repasar' | 'tablas' | 'practicar' | 'examen' | 'errores';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('repasar');
  const [errorQuestionIds, setErrorQuestionIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('es_arm_verb_errors');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [stats, setStats] = useState<{ totalAnswered: number; correctCount: number; examsCompleted: number }>({
    totalAnswered: 0,
    correctCount: 0,
    examsCompleted: 0,
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem('es_arm_verb_stats');
      if (saved) {
        setStats(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const saveStats = (newStats: typeof stats) => {
    setStats(newStats);
    try {
      localStorage.setItem('es_arm_verb_stats', JSON.stringify(newStats));
    } catch {
      // ignore
    }
  };

  const handleRecordError = (qId: string) => {
    setErrorQuestionIds((prev) => {
      if (prev.includes(qId)) return prev;
      const next = [...prev, qId];
      try {
        localStorage.setItem('es_arm_verb_errors', JSON.stringify(next));
      } catch {}
      return next;
    });

    saveStats({
      ...stats,
      totalAnswered: stats.totalAnswered + 1,
    });
  };

  const handleRecordSuccess = (qId: string) => {
    saveStats({
      ...stats,
      totalAnswered: stats.totalAnswered + 1,
      correctCount: stats.correctCount + 1,
    });

    // Also remove from error list if it was there
    handleRemoveError(qId);
  };

  const handleRemoveError = (qId: string) => {
    setErrorQuestionIds((prev) => {
      const next = prev.filter((id) => id !== qId);
      try {
        localStorage.setItem('es_arm_verb_errors', JSON.stringify(next));
      } catch {}
      return next;
    });
  };

  const handleClearAllErrors = () => {
    setErrorQuestionIds([]);
    try {
      localStorage.removeItem('es_arm_verb_errors');
    } catch {}
  };

  const handlePracticeMistakes = (mistakeIds: string[]) => {
    // Add them to error list and switch tab
    setErrorQuestionIds((prev) => {
      const set = new Set([...prev, ...mistakeIds]);
      const next = Array.from(set);
      try {
        localStorage.setItem('es_arm_verb_errors', JSON.stringify(next));
      } catch {}
      return next;
    });
    setActiveTab('errores');
  };

  const handleRecordExamResults = (correct: number, total: number) => {
    saveStats({
      ...stats,
      totalAnswered: stats.totalAnswered + total,
      correctCount: stats.correctCount + correct,
      examsCompleted: stats.examsCompleted + 1,
    });
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col font-sans">
      {/* Top Banner Navigation */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 gap-4">
            {/* Logo / Title */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-amber-600 to-amber-500 text-white flex items-center justify-center font-black text-lg shadow-xs shrink-0">
                🇪🇸
              </div>
              <div>
                <h1 className="font-extrabold text-base md:text-lg text-slate-900 leading-tight">
                  Conjugación Española <span className="text-amber-600">•</span> Իսպաներենի խոնարհում
                </h1>
                <p className="text-[11px] text-slate-500 leading-none mt-0.5">
                  amar • temer • partir • ser
                </p>
              </div>
            </div>

            {/* Quick stats indicator */}
            <div className="hidden sm:flex items-center gap-3 text-xs">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">
                <Flame className="w-4 h-4 text-amber-500" />
                <span className="font-bold text-slate-800">{stats.correctCount}</span>
                <span className="text-slate-500">ճիշտ պատասխան</span>
              </div>
              {errorQuestionIds.length > 0 && (
                <button
                  type="button"
                  onClick={() => setActiveTab('errores')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 font-semibold hover:bg-rose-100 transition-colors cursor-pointer"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                  <span>{errorQuestionIds.length} սխալ</span>
                </button>
              )}
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto py-2 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar">
            {[
              {
                id: 'repasar',
                es: 'Repasar',
                hy: 'Կրկնել',
                icon: BookOpen,
              },
              {
                id: 'tablas',
                es: 'Tablas',
                hy: 'Աղյուսակներ',
                icon: Table,
              },
              {
                id: 'practicar',
                es: 'Practicar',
                hy: 'Վարժվել',
                icon: CheckCircle,
              },
              {
                id: 'examen',
                es: 'Examen (30)',
                hy: 'Քննություն',
                icon: GraduationCap,
              },
              {
                id: 'errores',
                es: `Mis errores (${errorQuestionIds.length})`,
                hy: 'Իմ սխալները',
                icon: AlertTriangle,
                badge: errorQuestionIds.length > 0 ? errorQuestionIds.length : undefined,
              },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as TabKey)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{tab.es}</span>
                  <span className="opacity-75 font-normal text-[11px] sm:text-xs">
                    • {tab.hy}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 md:py-8">
        {activeTab === 'repasar' && <RepasarSection />}
        {activeTab === 'tablas' && <ConjugationTables />}
        {activeTab === 'practicar' && (
          <PracticarSection
            onRecordError={handleRecordError}
            onRecordSuccess={handleRecordSuccess}
          />
        )}
        {activeTab === 'examen' && (
          <ExamenSection
            onPracticeMistakes={handlePracticeMistakes}
            onRecordExamResults={handleRecordExamResults}
          />
        )}
        {activeTab === 'errores' && (
          <MisErroresSection
            errorQuestionIds={errorQuestionIds}
            onRemoveError={handleRemoveError}
            onClearAllErrors={handleClearAllErrors}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            Conjugación verbal en español y armenio oriental — Իսպաներենի բայերի խոնարհում
          </div>
          <div className="flex items-center gap-2">
            <span>Modelos: amar (-ar), temer (-er), partir (-ir), ser (irregular)</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
