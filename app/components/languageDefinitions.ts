/**
 * SOOK Language Definitions
 * Core concepts in different languages
 */

export interface LanguageStep {
  id: string;
  language: string;
  script: string;
  phonetic: string;
  meaning: string;
  description: string;
  font: string;
  color: string;
}

export const languageDefinitions: LanguageStep[] = [
  {
    id: 'arabic',
    language: 'Arabic',
    script: 'سوق',
    phonetic: 'SOUQ',
    meaning: 'MARKETPLACE',
    description: 'A lane in a bazaar dedicated to specific products',
    font: "'Noto Naskh Arabic', serif",
    color: '#C05621',
  },
  {
    id: 'korean',
    language: 'Korean',
    script: '숙',
    phonetic: 'SUK',
    meaning: 'VIRTUE & CHARACTER',
    description: 'Virtue, purity, and moral character',
    font: "'Noto Sans KR', sans-serif",
    color: '#5C7A7C',
  },
  {
    id: 'hindi',
    language: 'Hindi',
    script: 'शुक्र',
    phonetic: 'SHUKRA',
    meaning: 'BRIGHTNESS & FORTUNE',
    description: 'Brightness, fortune, and prosperity',
    font: "'Noto Sans Devanagari', sans-serif",
    color: '#D4A574',
  },
  {
    id: 'russian',
    language: 'Russian',
    script: 'сук',
    phonetic: 'SUK',
    meaning: 'GROWTH & ROOTS',
    description: 'A branch connecting us - growth and interconnection',
    font: "'Roboto', sans-serif",
    color: '#1B3B36',
  },
];
