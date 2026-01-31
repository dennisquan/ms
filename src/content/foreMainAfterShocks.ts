import type { Question } from './questionTypes'

const questions: Question[] = [
	// Shock2.png: foreshock is A, main shock is B
	{
		question: "In the image, which letter marks the foreshock?",
		answers: ["A", "B", "C", "D", "E"],
		correctAnswerIndex: 0,
		imagePromise: import("./Shock2.png"),
		dontShuffleChoices: true,
	},
	{
		question: "In the image, which letter marks the main shock?",
		answers: ["A", "B", "C", "D", "E"],
		correctAnswerIndex: 1,
		imagePromise: import("./Shock2.png"),
		dontShuffleChoices: true,
	},
	// Shock5.png: main shock is E
	{
		question: "In the image, which letter marks the main shock?",
		answers: ["A", "B", "C", "D", "E"],
		correctAnswerIndex: 4,
		imagePromise: import("./Shock5.png"),
		dontShuffleChoices: true,
	},
	// Shock6.png: foreshock is A, main shock is B
	{
		question: "In the image, which letter marks the foreshock?",
		answers: ["A", "B", "C", "D", "E"],
		correctAnswerIndex: 0,
		imagePromise: import("./Shock6.png"),
		dontShuffleChoices: true,
	},
	{
		question: "In the image, which letter marks the main shock?",
		answers: ["A", "B", "C", "D", "E"],
		correctAnswerIndex: 1,
		imagePromise: import("./Shock6.png"),
		dontShuffleChoices: true,
	},
	// Shock7.png: main shock is E
	{
		question: "In the image, which letter marks the main shock?",
		answers: ["A", "B", "C", "D", "E"],
		correctAnswerIndex: 4,
		imagePromise: import("./Shock7.png"),
		dontShuffleChoices: true,
	},
	// Shock8.png: main shock is D, aftershock is E
	{
		question: "In the image, which letter marks the main shock?",
		answers: ["A", "B", "C", "D", "E"],
		correctAnswerIndex: 3,
		imagePromise: import("./Shock8.png"),
		dontShuffleChoices: true,
	},
	{
		question: "In the image, which letter marks the aftershock?",
		answers: ["A", "B", "C", "D", "E"],
		correctAnswerIndex: 4,
		imagePromise: import("./Shock8.png"),
		dontShuffleChoices: true,
	},
]

export default questions