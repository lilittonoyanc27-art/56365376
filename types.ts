/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type VerbKey = 'amar' | 'temer' | 'partir' | 'ser';

export type MoodKey = 'indicativo' | 'subjuntivo' | 'imperativo' | 'noPersonales';

export type QuestionCategory =
  | 'tiempo_modo'         // 1. Identificar el tiempo y el modo
  | 'persona_numero'      // 2. Identificar persona y número
  | 'completar'           // 3. Completar una conjugación
  | 'opcion_multiple'     // 4. Elegir entre cuatro opciones
  | 'relacionar'          // 5. Relacionar formas verbales con sus nombres
  | 'distinguir'          // 6. Distinguir formas simples, compuestas y no personales
  | 'analizar'            // 7. Analizar un verbo
  | 'corregir'            // 8. Corregir errores
  | 'transformar'         // 9. Transformar una forma con consigna
  | 'contexto';           // 10. Reconocer verbos en textos breves

export interface MorphBreakdown {
  lexema: string;        // Lex
  vocalTematica?: string;// Vt
  tiempoModo?: string;   // TM / Característica
  desinencia?: string;   // D
  nota?: string;
  notaHy?: string;
}

export interface ConjugationTense {
  id: string;
  nombreEs: string;
  nombreHy: string;
  tiempoTipo: 'simple' | 'compuesto';
  modo: MoodKey;
  descripcionEs: string;
  descripcionHy: string;
  formas: {
    personaEs: string;
    personaHy: string;
    forma: string;
    analisis?: MorphBreakdown;
  }[];
}

export interface VerbData {
  verbo: VerbKey;
  infinitivoEs: string;
  infinitivoHy: string;
  tipoEs: 'Regular' | 'Irregular';
  tipoHy: 'Կանոնավոր' | 'Անկանոն';
  conjugacionEs: 'Primera (-ar)' | 'Segunda (-er)' | 'Tercera (-ir)' | 'Irregular (-er)';
  conjugacionHy: 'Առաջին (-ar)' | 'Երկրորդ (-er)' | 'Երրորդ (-ir)' | 'Անկանոն (-er)';
  noPersonales: {
    nombreEs: string;
    nombreHy: string;
    forma: string;
  }[];
  tiempos: ConjugationTense[];
}

export interface Question {
  id: string;
  categoria: QuestionCategory;
  categoriaEs: string;
  categoriaHy: string;
  enunciadoEs: string;
  enunciadoHy: string;
  contextoTextoEs?: string;
  contextoTextoHy?: string;
  ejemploEs?: string;
  ejemploHy?: string;
  opciones: string[];
  respuestaCorrecta: string;
  respuestasAlternativasValidas?: string[];
  explicacionEs: string;
  explicacionHy: string;
  analisisVerbal?: {
    infinitivo: string;
    conjugacion: string;
    persona: string;
    numero: string;
    tiempo: string;
    modo: string;
    tipoForma: 'simple' | 'compuesta' | 'no personal';
  };
}

export interface UserAnswerRecord {
  questionId: string;
  userAnswer: string;
  isCorrect: boolean;
  timestamp: number;
}

export interface GrammarSection {
  id: number;
  tituloEs: string;
  tituloHy: string;
  introduccionEs?: string;
  introduccionHy?: string;
  puntos: {
    es: string;
    hy: string;
    tipo?: 'texto' | 'ejemplo' | 'nota' | 'alerta';
    desglose?: {
      termino: string;
      lexema?: string;
      vt?: string;
      desinencia?: string;
      explicacionEs: string;
      explicacionHy: string;
    };
  }[];
  tablaResumen?: {
    cabecerasEs: string[];
    cabecerasHy: string[];
    filas: {
      es: string[];
      hy: string[];
    }[];
  };
  reglaEs?: string;
  reglaHy?: string;
  errorComunEs?: string;
  errorComunHy?: string;
}
