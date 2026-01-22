export type Question = {
  question: string;
  answers: string[];
  correctAnswerIndex: number;
  imagePromise?: Promise<{ default: string }>;
  category?: string;
  dontShuffleChoices?: boolean;
};
