import type { Question } from './questionTypes'

const earthquakes1: Question[] = [
	{
		question: "Which station is closest to the earthquake?",
		answers: ["Station X", "Station Y", "Station Z"],
		correctAnswerIndex: 1,
		imagePromise: import("./seismic_test_20260108_135518.png"),
		dontShuffleChoices: true,
	},
]

export default earthquakes1