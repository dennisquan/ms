import type { Question } from './questionTypes'

const questions: Question[] = [
  {
    question: 'Which of the following is a good model for the layers of the Earth?',
    answers: [
      'A hard boiled egg with the shell on',
      'A hardboiled egg with a cracked shell',
      'A sandwich with meat & cheese',
      'An orange',
    ],
    correctAnswerIndex: 1, // cracked shell is best for showing crust, mantle, core
    category: 'Earth Layers',
  },
  {
    question: 'How do scientists know what layers make up Earth’s interior?',
    answers: [
      'Drilling to the center of the Earth',
      'Taking an x-ray of Earth from space',
      'Studying changes in the speed of seismic waves',
      'Using a submersible vehicle inside volcanoes',
    ],
    correctAnswerIndex: 2, // seismic waves
    category: 'Earth Layers',
  },
  {
    question: 'What is Earth’s crust made of?',
    answers: [
      'Water',
      'Wax',
      'Molten (liquid) rock',
      'Solid rock',
    ],
    correctAnswerIndex: 3, // solid rock
    category: 'Earth Layers',
  },
  {
    question: 'What is Earth’s mantle made of?',
    answers: [
      'Water',
      'Wax',
      'Molten (liquid) rock',
      'Solid rock',
    ],
    correctAnswerIndex: 2, // molten rock
    category: 'Earth Layers',
  },
  {
    question: 'What is the temperature like on the inside of the Earth?',
    answers: [
      'Colder than ice, below -1000 degrees Celsius.',
      'Cold like ice, 0 degrees Celsius',
      'Hot like boiling water, 100 degrees Celsius',
      'Hotter than boiling water, 2000 degrees Celsius',
    ],
    correctAnswerIndex: 3, // hotter than boiling water
    category: 'Earth Layers',
  },
];


export default questions
