<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

import allQuestions from '../content/questions'
import { getSeedFromQuery, seededShuffle } from '../content/seedUtils'

const loadedImages = ref<Map<number, string>>(new Map())

const seed = getSeedFromQuery()
const orderedQuestions = seededShuffle(allQuestions, seed)

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
    correct: q.answers[q.correctAnswerIndex] ?? 'unknown',
    image: loadedImages.value.get(idx) || null,
  }))
})
</script>

<template>
  <div class="printable-flashcards">
    <div v-for="card in flashcards" :key="card.id" class="flashcard-pair">
      <div class="flashcard-side flex min-h-[90vh] flex-col justify-center gap-4 border p-6 mb-4">
        <h2 class="flashcard-title">Question {{ card.id }}</h2>
        <p class="flashcard-question">{{ card.question }}</p>

        <img v-if="card.image" :src="card.image" alt="Question image" class="flashcard-image" />

        <ol class="flashcard-choices">
          <li v-for="(choice, idx) in card.answers" :key="idx">{{ choice }}</li>
        </ol>
      </div>

      <div class="flashcard-side flex min-h-[90vh] flex-col justify-center gap-4 border p-6 mb-4">
        <h2 class="flashcard-title">Answer {{ card.id }}</h2>
        <p class="flashcard-answer">{{ card.correct }}</p>
      </div>
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
  list-style: upper-alpha;
  padding-left: 1.5rem;
  font-size: 1.1rem;
  display: grid;
  gap: 0.5rem;
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
