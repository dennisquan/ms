import type { Question } from './questionTypes'

const jeopardyQuestions: Question[] = [
  {
    question: 'Which wave moves the ground in a "push-pull" or longitudinal motion, similar to a slinky being compressed?',
    answers: ['P-wave', 'S-wave', 'Surface wave'],
    correctAnswerIndex: 0,
    category: 'P or S',
  },
  {
    question: 'Which wave is a "transverse" wave, moving particles up-and-down or side-to-side at right angles to the direction the wave is traveling?',
    answers: ['S-wave', 'P-wave', 'Love wave'],
    correctAnswerIndex: 0,
    category: 'P or S',
  },
  {
    question: 'If a seismograph is 1,000 miles away from an earthquake, which wave will show up on the recording paper first?',
    answers: ['P-wave', 'S-wave', 'Rayleigh wave'],
    correctAnswerIndex: 0,
    category: 'P or S',
  },
  {
    question: 'Which wave is generally responsible for the "heavy lifting" and major structural damage to buildings during an earthquake?',
    answers: ['S-wave', 'P-wave', 'Tsunami wave'],
    correctAnswerIndex: 0,
    category: 'P or S',
  },
  {
    question: 'If an earthquake happens under the ocean, which of these two waves will travel through the seawater and can be heard by whales or detected by submarines?',
    answers: ['P-wave', 'S-wave', 'Surface wave'],
    correctAnswerIndex: 0,
    category: 'P or S',
  },
  {
    question: 'This is the name given to a smaller earthquake that happens in the same place before a larger, main earthquake occurs.',
    answers: ['Foreshocks', 'Aftershocks', 'Mainshock'],
    correctAnswerIndex: 0,
    category: 'Earthquake Lingo',
  },
  {
    question: 'These smaller tremors can continue to shake the ground for days, weeks, or even years after the main earthquake has finished.',
    answers: ['Aftershocks', 'Foreshocks', 'Epicenters'],
    correctAnswerIndex: 0,
    category: 'Earthquake Lingo',
  },
  {
    question: 'What is the point underground where rock first breaks or a fault slips, causing an earthquake called?',
    answers: ['Hypocenter or focus', 'Epicenter', 'Seismograph'],
    correctAnswerIndex: 0,
    category: 'Earthquake Lingo',
  },
  {
    question: 'What is the point on the Earth’s surface directly above where an earthquake originates called?',
    answers: ['Epicenter', 'Hypocenter', 'Crust'],
    correctAnswerIndex: 0,
    category: 'Earthquake Lingo',
  },
  {
    question: 'What scale is used to measure the magnitude of earthquakes?',
    answers: ['Richter', 'Mercalli', 'Fahrenheit'],
    correctAnswerIndex: 0,
    category: 'Earthquake Lingo',
  },
  {
    question: 'Most earthquakes cause damage',
    answers: ['False', 'True', 'Sometimes'],
    correctAnswerIndex: 0,
    category: 'Earthquake Math',
  },
  {
    question: 'Which earthquake is worse, a magnitude 4.9 earthquake or a magnitude 5.1?',
    answers: ['5.1', '4.9', 'They are the same'],
    correctAnswerIndex: 0,
    category: 'Earthquake Math',
  },
  {
    question: 'According to Båth’s Law, the largest aftershock in a sequence is usually 1.2 smaller than the mainshock. If you have a series of earthquakes with magnitude 3.4, 4.9, and 6.2, what do you expect the magnitude of the largest aftershock to be?',
    answers: ['5.0', '4.9', '3.4'],
    correctAnswerIndex: 0,
    category: 'Earthquake Math',
  },
  {
    question: 'Imagine a sequence of three earthquakes: a magnitude 4.0, then a magnitude 7.2, and finally a magnitude 5.5. In this specific sequence, which one is officially the mainshock?',
    answers: ['The Magnitude 7.2 earthquake', 'The Magnitude 5.5 earthquake', 'The Magnitude 4.0 earthquake'],
    correctAnswerIndex: 0,
    category: 'Earthquake Math',
  },
  {
    question: 'How many recording stations are needed to find the location of an earthquake?',
    answers: ['3', '2', '5'],
    correctAnswerIndex: 0,
    category: 'Earthquake Math',
  },
  {
    question: 'What state/country and continent is Mount St. Helens in?',
    answers: ['Washington, United States, North America', 'California, United States, North America', 'Italy, Europe'],
    correctAnswerIndex: 0,
    category: 'Where In the World',
  },
  {
    question: 'What state/country and continent is the San Andreas Fault on?',
    answers: ['California, United States, North America', 'Washington, United States, North America', 'Japan, Pacific Ocean'],
    correctAnswerIndex: 0,
    category: 'Where In the World',
  },
  {
    question: 'What state/country and continent is Yellowstone in?',
    answers: ['Wyoming, United States, North America', 'California, United States, North America', 'Italy, Europe'],
    correctAnswerIndex: 0,
    category: 'Where In the World',
  },
  {
    question: 'What country and continent are Mount Vesuvius in?',
    answers: ['Italy, Europe', 'Japan, Asia', 'United States, North America'],
    correctAnswerIndex: 0,
    category: 'Where In the World',
  },
  {
    question: 'What country and ocean has the most Ring of Fire activity?',
    answers: ['Japan, Pacific Ocean', 'Italy, Atlantic Ocean', 'United States, Indian Ocean'],
    correctAnswerIndex: 0,
    category: 'Where In the World',
  },
];

export default jeopardyQuestions;
