<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useUrlSearchParams } from '@vueuse/core'

import allQuestions from '../content/questions'
import { getSeedFromQuery, seededShuffle } from '../content/seedUtils'

const loadedImages = ref<Map<number, string>>(new Map())
const params = useUrlSearchParams('hash')

const seed = getSeedFromQuery()
const orderedQuestions = seededShuffle(allQuestions, seed)
const per = computed(() => {
  const raw = Number(params.per)
  if (raw === 2 || raw === 4) return raw
  return 1
})

onMounted(async () => {
  for (let idx = 0; idx < orderedQuestions.length; idx++) {
    const q = orderedQuestions[idx]
    if (q && 'imagePromise' in q && q.imagePromise) {
      try {
        const module = await (q as any).imagePromise
        loadedImages.value.set(idx, module.default)
      } catch (err) {
        console.error(`Failed to load image for question ${idx}:`, err)
      }
    }
  }
})

const flashcards = computed(() => {
  return orderedQuestions.map((q, idx) => ({
    id: idx + 1,
    question: q.question,
    answers: q.answers,
    correctIndex: q.correctAnswerIndex,
    correctLetter: String.fromCharCode(65 + q.correctAnswerIndex),
    correct: q.answers[q.correctAnswerIndex] ?? 'unknown',
    image: loadedImages.value.get(idx) || null,
  }))
})

const printableCards = computed(() => {
  const cards = flashcards.value
  const batchedCards: Array<(typeof cards)[number] & { side: 'question' | 'answer' }> = []

  for (let start = 0; start < cards.length; start += per.value) {
    const group = cards.slice(start, start + per.value)

    batchedCards.push(...group.map((card) => ({ ...card, side: 'question' as const })))

    let answerGroup = group
    if (per.value === 4 && group.length === 4) {
      answerGroup = [group[1]!, group[0]!, group[3]!, group[2]!]
    }

    batchedCards.push(...answerGroup.map((card) => ({ ...card, side: 'answer' as const })))
  }

  return batchedCards
})
</script>

<template>
  <div class="printable-flashcards">
    <div v-for="(card, idx) in printableCards" :key="`${card.side}-${card.id}-${idx}`" class="flashcard-side flex min-h-[90vh] flex-col justify-center gap-4 border p-6 mb-4">
      <template v-if="card.side === 'question'">
        <h2 class="flashcard-title">Question {{ card.id }}</h2>
        <p class="flashcard-question">{{ card.question }}</p>

        <img v-if="card.image" :src="card.image" alt="Question image" class="flashcard-image" />

        <ol class="flashcard-choices">
          <li v-for="(choice, choiceIdx) in card.answers" :key="choiceIdx">
            <span class="choice-label">{{ String.fromCharCode(65 + choiceIdx) }}.</span>
            <span>{{ choice }}</span>
          </li>
        </ol>
      </template>

      <template v-else>
        <h2 class="flashcard-title">Answer {{ card.id }}</h2>
        <p class="flashcard-answer">{{ card.correctLetter }}. {{ card.correct }}</p>
      </template>
    </div>
  </div>
</template>

<style scoped>
.printable-flashcards {
  padding: 1rem;
}

.flashcard-title {
  font-size: 1.5rem;
  font-weight: 700;
}

.flashcard-question,
.flashcard-answer {
  font-size: 1.25rem;
  line-height: 1.5;
}

.flashcard-image {
  max-height: 20rem;
  max-width: 100%;
  object-fit: contain;
  border-radius: 0.25rem;
}

.flashcard-choices {
  list-style: none;
  padding-left: 0;
  font-size: 1.1rem;
  display: grid;
  gap: 0.5rem;
}

.flashcard-choices li {
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 0.5rem;
}

.choice-label {
  font-weight: 600;
}

@media print {
  .printable-flashcards {
    padding: 0;
  }

  .flashcard-side {
    min-height: 100vh;
    margin: 0;
    border: none;
    padding: 1rem;
    break-after: page;
    page-break-after: always;
  }

  .flashcard-side:last-child {
    break-after: auto;
    page-break-after: auto;
  }
}
</style>
