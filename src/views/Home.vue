
<script setup lang="ts">
import { ref, computed, watch } from 'vue'

import eqQuestions from '../content/earthquakes1'
import jeopardyQuestions from '../content/20260108_jeopardy'
import station3Questions from '../content/20260122_station3'
import station4Questions from '../content/20260122_station4'

// Deterministic PRNG (mulberry32)
function mulberry32(seed: number) {
  return function() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

// Get seed from query string
function getSeedFromQuery(): number {
  if (typeof window === 'undefined') return 42;
  const params = new URLSearchParams(window.location.search);
  const s = params.get('seed');
  const n = Number(s);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 42;
}

function seededShuffle<T>(array: T[], seed: number): T[] {
  const prng = mulberry32(seed);
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(prng() * (i + 1));
    const temp = arr[i]!;
    arr[i] = arr[j]!;
    arr[j] = temp;
  }
  return arr;
}

const allQuestions = [
  ...eqQuestions,
  ...jeopardyQuestions,
  ...station3Questions,
  ...station4Questions,
];

const seed = getSeedFromQuery();
const questions = seededShuffle(allQuestions, seed);


const current = ref(0)
const selected = ref<number | null>(null)
const showAnswer = ref(false)
const imageSrc = ref<string | null>(null)
const shuffledAnswers = ref<{answers: string[], correct: number} | null>(null)

const attempted = ref(0)
const correct = ref(0)
const wrong = ref(0)

const question = computed(() => questions[current.value])


// Shuffle answers for the current question
function shuffleAnswers() {
  const q = questions[current.value]
  if (!q) return
  if (q.dontShuffleChoices) {
    shuffledAnswers.value = { answers: q.answers, correct: q.correctAnswerIndex }
    return
  }
  const arr = q.answers.map((a, i) => ({a, i}))
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = arr[i]
    arr[i] = arr[j]!
    arr[j] = temp!
  }
  const answers = arr.map(x => x.a)
  const correct = arr.findIndex(x => x.i === q.correctAnswerIndex)
  shuffledAnswers.value = {answers, correct}
}

// Load image and shuffle answers when question changes
async function loadQuestion() {
  const q = questions[current.value]
  if (q && 'imagePromise' in q && q.imagePromise) {
    const module = await (q as any).imagePromise
    imageSrc.value = module.default
  } else {
    imageSrc.value = null
  }
  shuffleAnswers()
}

// Initialize on mount and when question changes
loadQuestion()
watch(current, loadQuestion)


function selectAnswer(idx: number) {
  if (showAnswer.value) return
  selected.value = idx
  showAnswer.value = true
  attempted.value++
  if (idx === shuffledAnswers.value?.correct) {
    correct.value++
  } else {
    wrong.value++
  }
}


function nextQuestion() {
  selected.value = null
  showAnswer.value = false
  current.value = (current.value + 1) % questions.length
  shuffleAnswers()
}
</script>

<template>
  <div class="container mx-auto p-8 max-w-2xl">
    <div class="mb-4 flex gap-6 items-center justify-center">
      <span class="text-base font-medium">Attempted: {{ attempted }}</span>
      <span class="text-green-600 font-medium">Correct: {{ correct }}</span>
      <span class="text-red-600 font-medium">Wrong: {{ wrong }}</span>
    </div>
    <UCard>
      <template #header>
        <h2 class="text-xl font-bold">{{ question?.question }}</h2>
      </template>
      
      <div v-if="imageSrc" class="mb-6">
        <img :src="imageSrc" alt="Question image" class="max-h-96 mx-auto rounded" />
      </div>
      
      <div class="space-y-3">
        <UButton
          v-for="(ans, idx) in shuffledAnswers?.answers"
          :key="idx"
          block
          size="lg"
          :variant="showAnswer 
            ? (idx === shuffledAnswers?.correct ? 'soft' : (selected === idx ? 'soft' : 'ghost'))
            : 'solid'"
          :color="showAnswer 
            ? (idx === shuffledAnswers?.correct ? 'primary' : (selected === idx ? 'red' : 'gray'))
            : 'gray'"
          @click="selectAnswer(idx)"
          :disabled="showAnswer"
        >
          {{ ans }}
        </UButton>
      </div>
      
      <template #footer v-if="showAnswer">
        <div class="flex items-center justify-between">
          <span v-if="selected === shuffledAnswers?.correct" class="font-semibold">✓ Correct!</span>
          <span v-else class="font-semibold">✗ Incorrect. The correct answer is {{ shuffledAnswers?.answers[shuffledAnswers?.correct] }}.</span>
          <UButton @click="nextQuestion">Next</UButton>
        </div>
      </template>
    </UCard>
  </div>
</template>

<style scoped>
</style>
