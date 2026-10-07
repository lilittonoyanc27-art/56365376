/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question, QuestionCategory } from './types';
import { QUESTIONS_PART_1 } from './questionsPart1';
import { QUESTIONS_PART_2 } from './questionsPart2';

export const ALL_QUESTIONS: Question[] = [
  ...QUESTIONS_PART_1,
  ...QUESTIONS_PART_2,
];

export const CATEGORIES_LIST: { id: QuestionCategory; nombreEs: string; nombreHy: string }[] = [
  { id: 'tiempo_modo', nombreEs: '1. Tiempo y modo', nombreHy: '1. Ժամանակաձև և եղանակ' },
  { id: 'persona_numero', nombreEs: '2. Persona y número', nombreHy: '2. Դեմք և թիվ' },
  { id: 'completar', nombreEs: '3. Completar conjugación', nombreHy: '3. Լրացնել խոնարհումը' },
  { id: 'opcion_multiple', nombreEs: '4. Opción múltiple (4)', nombreHy: '4. Ընտրել 4 տարբերակից' },
  { id: 'relacionar', nombreEs: '5. Relacionar formas', nombreHy: '5. Համապատասխանեցնել ձևերը' },
  { id: 'distinguir', nombreEs: '6. Simples / compuestas / no personales', nombreHy: '6. Պարզ / բաղադրյալ / անդեմ' },
  { id: 'analizar', nombreEs: '7. Analizar verbo (examen)', nombreHy: '7. Վերլուծել բայը (քննություն)' },
  { id: 'corregir', nombreEs: '8. Corregir errores', nombreHy: '8. Ուղղել սխալները' },
  { id: 'transformar', nombreEs: '9. Transformar según consigna', nombreHy: '9. Փոխակերպել ըստ հրահանգի' },
  { id: 'contexto', nombreEs: '10. Textos y contexto', nombreHy: '10. Տեքստեր և համատեքստ' },
];

export function getQuestionsByCategory(category: QuestionCategory): Question[] {
  return ALL_QUESTIONS.filter((q) => q.categoria === category);
}

export function getRandomExamQuestions(count: number = 30): Question[] {
  // Ensure balanced representation across all categories
  const categories: QuestionCategory[] = [
    'tiempo_modo',
    'persona_numero',
    'completar',
    'opcion_multiple',
    'relacionar',
    'distinguir',
    'analizar',
    'corregir',
    'transformar',
    'contexto',
  ];

  const selected: Question[] = [];
  const perCategory = Math.floor(count / categories.length); // 3 per category

  categories.forEach((cat) => {
    const list = getQuestionsByCategory(cat);
    const shuffled = [...list].sort(() => 0.5 - Math.random());
    selected.push(...shuffled.slice(0, perCategory));
  });

  // If still less than count, fill with random remainder
  if (selected.length < count) {
    const remainder = ALL_QUESTIONS.filter((q) => !selected.some((s) => s.id === q.id));
    const shuffledRemainder = [...remainder].sort(() => 0.5 - Math.random());
    selected.push(...shuffledRemainder.slice(0, count - selected.length));
  }

  return selected.sort(() => 0.5 - Math.random());
}
