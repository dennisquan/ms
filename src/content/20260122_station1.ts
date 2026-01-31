import type { Question } from './questionTypes'

const station1Questions: Question[] = [
  {
    question: 'What volcanic feature is shown in the image?',
    answers: [
      'Crater (mouth)',
      'Vent',
      'Magma chamber',
      'Lava flow',
      'Volcanic ash',
    ],
    correctAnswerIndex: 0,
    imagePromise: import('./crater (mouth).png'),
    category: 'Volcano Features',
  },
  {
    question: 'What volcanic feature is shown in the image?',
    answers: [
      'Crater (mouth)',
      'Vent',
      'Magma chamber',
      'Lava flow',
      'Volcanic ash',
    ],
    correctAnswerIndex: 3,
    imagePromise: import('./lava flow.png'),
    category: 'Volcano Features',
  },
  {
    question: 'What volcanic feature is shown in the image?',
    answers: [
      'Crater (mouth)',
      'Vent',
      'Magma chamber',
      'Lava flow',
      'Volcanic ash',
    ],
    correctAnswerIndex: 1,
    imagePromise: import('./vent.png'),
    category: 'Volcano Features',
  },
  {
    question: 'What volcanic feature is shown in the image?',
    answers: [
      'Crater (mouth)',
      'Vent',
      'Magma chamber',
      'Lava flow',
      'Volcanic ash',
    ],
    correctAnswerIndex: 2,
    imagePromise: import('./magma chamber.png'),
    category: 'Volcano Features',
  },
  {
    question: 'What volcanic feature is shown in the image?',
    answers: [
      'Crater (mouth)',
      'Vent',
      'Magma chamber',
      'Lava flow',
      'Volcanic ash',
    ],
    correctAnswerIndex: 4,
    imagePromise: import('./volcanic ash.png'),
    category: 'Volcano Features',
  },
]

export default station1Questions
