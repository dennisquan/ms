import type { Question } from './questionTypes'


const questions: Question[] = [
  {
    question: 'How did the Pacific Ring of Fire get its name?',
    answers: [
      'It is a circular shaped plate with volcano and earthquake hotspots around its edges.',
      'It is named only after the ocean it contains',
      'It is a circle of many wildfires',
      'It is a fashionable piece of jewelry worn on the finger with a hot gemstone.',
    ],
    correctAnswerIndex: 0, // volcano/earthquake hotspots
    category: 'Ring of Fire',
  },
  {
    question: 'Which US state along the edge of the Ring of Fire has a long chain of active volcanoes?',
    answers: [
      'North Carolina',
      'Florida',
      'Alaska',
      'Texas',
    ],
    correctAnswerIndex: 2, // Alaska
    category: 'Ring of Fire',
  },
  {
    question: 'In which region of the United States do you find many active volcanoes?',
    answers: [
      'North',
      'South',
      'East',
      'West',
    ],
    correctAnswerIndex: 3, // West
    category: 'Ring of Fire',
  },
  {
    question: 'What scale is used to measure the magnitude of an earthquake?',
    answers: [
      'Mercalli',
      'Richter',
      'Wagner',
      'Seismic',
    ],
    correctAnswerIndex: 1, // Richter
    category: 'Earthquake Scale',
  },
  {
    question: 'Where are you safer in an earthquake?',
    answers: [
      'In a house.',
      'In an open area away from buildings.',
    ],
    correctAnswerIndex: 1, // open area
    category: 'Earthquake Safety',
  },
];


export default questions
