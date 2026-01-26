import type { Question } from './questionTypes'

const station3Questions: Question[] = [
  {
    question: 'What type of volcano is shown in the image?',
    answers: ['Shield volcano', 'Composite volcano', 'Cinder cone volcano'],
    correctAnswerIndex: 0,
    imagePromise: import('./shield.jpg'),
    category: 'Volcano Types',
  },
  {
    question: 'What type of volcano is shown in the image?',
    answers: ['Cinder cone volcano', 'Shield volcano', 'Composite volcano'],
    correctAnswerIndex: 0,
    imagePromise: import('./cinder.jpg'),
    category: 'Volcano Types',
  },
  {
    question: 'What type of volcano is shown in the image?',
    answers: ['Composite volcano', 'Shield volcano', 'Lava dome'],
    correctAnswerIndex: 0,
    imagePromise: import('./composite.jpg'),
    category: 'Volcano Types',
  },
  {
    question: 'What type of volcanic feature is shown in the image?',
    answers: ['Caldera', 'Fissure', 'Lava dome'],
    correctAnswerIndex: 0,
    imagePromise: import('./caldera.jpg'),
    category: 'Volcano Types',
  },
  {
    question: 'What type of volcanic feature is shown in the image?',
    answers: ['Fissure', 'Caldera', 'Cinder cone volcano'],
    correctAnswerIndex: 0,
    imagePromise: import('./fissure.jpg'),
    category: 'Volcano Types',
  },
  {
    question: 'What type of volcanic feature is shown in the image?',
    answers: ['Lava dome', 'Composite volcano', 'Shield volcano'],
    correctAnswerIndex: 0,
    imagePromise: import('./lava dome.jpg'),
    category: 'Volcano Types',
  },
]

export default station3Questions
