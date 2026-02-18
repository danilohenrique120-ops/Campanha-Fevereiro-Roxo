
export type Mood = 'green' | 'yellow' | 'purple' | null;

export interface TriviaQuestion {
  q: string;
  a: string[];
  correct: number;
}

export interface GameState {
  isActive: boolean;
  targetIcon: string;
  options: string[];
}
