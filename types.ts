
import React from 'react';

export interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  bgClass?: string;
}

export enum MethodologyType {
  A = 'A: דרישות בלבד',
  B = 'B: דרישות + פתרון + מסכים',
  C = 'C: פרומפט מינימלי',
  D = 'D: PRD התחלתי → מלא'
}