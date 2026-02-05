import type { Question } from './questionTypes'

const questions: Question[] = [
  // --- Set 1: Worldwide Earthquakes 1990–1999 ---
  {
    question: 'Which year had the least number of estimated deaths?',
    answers: ['1991', '1994', '1996', '1997'],
    correctAnswerIndex: 2, // 1996 (589 deaths)
    imagePromise: import('./worldwide_earthquakes_1990_1999.png'),
    category: 'Earthquake Data 1990-1999',
  },
  {
    question: 'In which year were the most large-scale earthquakes (7.0 magnitude or higher) recorded?',
    answers: ['1990', '1995', '1997', '1999'],
    correctAnswerIndex: 1, // 1995 (2 at 8+, 18 at 7-7.9 = 20 total)
    imagePromise: import('./worldwide_earthquakes_1990_1999.png'),
    category: 'Earthquake Data 1990-1999',
  },
  {
    question: 'Which year had the lowest number of earthquakes in the 5–5.9 magnitude range?',
    answers: ['1993', '1997', '1998', '1999'],
    correctAnswerIndex: 2, // 1998 (979)
    imagePromise: import('./worldwide_earthquakes_1990_1999.png'),
    category: 'Earthquake Data 1990-1999',
  },
  {
    question: 'Which year saw the highest total number of earthquakes with a magnitude of 6.0 or greater?',
    answers: ['1992', '1995', '1996', '1990'],
    correctAnswerIndex: 1, // 1995 (2 + 18 + 183 = 203)
    imagePromise: import('./worldwide_earthquakes_1990_1999.png'),
    category: 'Earthquake Data 1990-1999',
  },
  {
    question: 'In which year did the highest number of estimated deaths occur?',
    answers: ['1990', '1993', '1998', '1999'],
    correctAnswerIndex: 0, // 1990 (52,056)
    imagePromise: import('./worldwide_earthquakes_1990_1999.png'),
    category: 'Earthquake Data 1990-1999',
  },

  // --- Set 2: Worldwide Earthquakes 2008–2015 ---
  {
    question: 'Which year had the highest frequency of earthquakes in the 4–4.9 magnitude range?',
    answers: ['2008', '2011', '2014', '2015'],
    correctAnswerIndex: 2, // 2014 (13,494)
    imagePromise: import('./worldwide_earthquakes_2008_2015.png'),
    category: 'Earthquake Data 2008-2015',
  },
  {
    question: 'Which year recorded the most large-scale earthquakes (7.0 magnitude or higher)?',
    answers: ['2009', '2010', '2011', '2013'],
    correctAnswerIndex: 1, // 2010 (1 at 8-9, 21 at 7-7.9 = 22 total)
    imagePromise: import('./worldwide_earthquakes_2008_2015.png'),
    category: 'Earthquake Data 2008-2015',
  },
  {
    question: 'Which year had the fewest combined earthquakes with a magnitude less than 6.0?',
    answers: ['2008', '2009', '2012', '2013'],
    correctAnswerIndex: 1, // 2009 (1,896 + 6,805 = 8,701)
    imagePromise: import('./worldwide_earthquakes_2008_2015.png'),
    category: 'Earthquake Data 2008-2015',
  },
  {
    question: 'In which year was the total number of recorded earthquakes (all categories) the highest?',
    answers: ['2008', '2010', '2011', '2014'],
    correctAnswerIndex: 2, // 2011 (approx 16,297 total)
    imagePromise: import('./worldwide_earthquakes_2008_2015.png'),
    category: 'Earthquake Data 2008-2015',
  },
  {
    question: 'Which of the following years recorded two earthquakes with a magnitude between 8 and 9?',
    answers: ['2009', '2010', '2011', '2013'],
    correctAnswerIndex: 2, // 2011 (and 2012)
    imagePromise: import('./worldwide_earthquakes_2008_2015.png'),
    category: 'Earthquake Data 2008-2015',
  },
];

export default questions