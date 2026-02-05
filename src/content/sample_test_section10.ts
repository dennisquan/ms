import type { Question } from './questionTypes'

const questions: Question[] = [
  // scoria_pumice_tuff.png questions
  {
    question: 'Which rock in the image is scoria?',
    answers: ['A', 'B', 'C'],
    correctAnswerIndex: 0,
    imagePromise: import('./scoria_pumice_tuff.png'),
    category: 'Igneous Rocks',
  },
  {
    question: 'Which rock in the image is pumice?',
    answers: ['A', 'B', 'C'],
    correctAnswerIndex: 1,
    imagePromise: import('./scoria_pumice_tuff.png'),
    category: 'Igneous Rocks',
  },
  {
    question: 'Which rock in the image is tuff?',
    answers: ['A', 'B', 'C'],
    correctAnswerIndex: 2,
    imagePromise: import('./scoria_pumice_tuff.png'),
    category: 'Igneous Rocks',
  },
  // pangaea.png
  {
    question: 'What is the name of the supercontinent shown in the image?',
    answers: ['Laurasia', 'Gondwana', 'Pangaea', 'Eurasia'],
    correctAnswerIndex: 2,
    imagePromise: import('./pangaea.png'),
    category: 'Continental Drift',
  },
  // continental_drift.png
  {
    question: 'Which scientist is most closely associated with the theory shown in the image?',
    answers: ['Hess', 'Morgan', 'Wilson', 'Wegener'],
    correctAnswerIndex: 3,
    imagePromise: import('./continental_drift.png'),
    category: 'Continental Drift',
  },
  // convection.png
  {
    question: 'What is the name of the “conveyor belt” motion that moves the plates around, as shown in the image?',
    answers: ['Convection', 'Conduction', 'Radiation', 'Subduction'],
    correctAnswerIndex: 0,
    imagePromise: import('./convection.png'),
    category: 'Plate Tectonics',
  },
];


export default questions
