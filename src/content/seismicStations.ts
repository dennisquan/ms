import type { Question } from './questionTypes'

const seismicStations: Question[] = [
	{
		question: "Which station is closest to the earthquake?",
		answers: ["Station X", "Station Y", "Station Z"],
		correctAnswerIndex: 1,
		imagePromise: import("./seismic_test_20260108_135518.png"),
		dontShuffleChoices: true,
	},
	{
		question: "Which station is closest to the earthquake?",
		answers: ["Station X", "Station Y", "Station Z"],
		correctAnswerIndex: 0,
		imagePromise: import("./seismic_test_20260108_135520.png"),
		dontShuffleChoices: true,
	},
	{
		question: "Which station is closest to the earthquake?",
		answers: ["Station X", "Station Y", "Station Z"],
		correctAnswerIndex: 1,
		imagePromise: import("./seismic_test_20260108_135523.png"),
		dontShuffleChoices: true,
	},
	{
		question: "Which station is closest to the earthquake?",
		answers: ["Station X", "Station Y", "Station Z"],
		correctAnswerIndex: 0,
		imagePromise: import("./seismic_test_20260108_135524.png"),
		dontShuffleChoices: true,
	},
	{
		question: "Which station is closest to the earthquake?",
		answers: ["Station X", "Station Y", "Station Z"],
		correctAnswerIndex: 2,
		imagePromise: import("./seismic_test_20260108_135526.png"),
		dontShuffleChoices: true,
	},
]

export default seismicStations