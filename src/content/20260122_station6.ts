import type { Question } from './questionTypes'

const station6Questions: Question[] = [
  {
    question: 'If 2 oceanic plates collide, what will happen?',
    answers: [
      'One will subduct under the other.',
      'They will both push up to form a volcanic mountain.',
      'Their edges will melt and fuse together.',
      'They will form a hotspot volcano.',
    ],
    correctAnswerIndex: 0,
    category: 'Plate Tectonics',
  },
  {
    question: 'When oceanic and continental crusts collide, which one will always subduct?',
    answers: [
      'Oceanic Crust',
      'Continental Crust',
    ],
    correctAnswerIndex: 0,
    category: 'Plate Tectonics',
  },
  {
    question: 'Which type of boundary will new crust form along?',
    answers: [
      'Convergent Boundary',
      'Divergent Boundary',
      'Transform Boundary',
    ],
    correctAnswerIndex: 1,
    category: 'Plate Tectonics',
  },
  {
    question: 'Island Arcs, like the islands of Japan, form when two:',
    answers: [
      'Continental plates scrape past each other.',
      'Continental plates converge.',
      'Oceanic plates scrape past each other.',
      'Oceanic plates converge.',
    ],
    correctAnswerIndex: 3,
    category: 'Plate Tectonics',
  },
]

export default station6Questions
