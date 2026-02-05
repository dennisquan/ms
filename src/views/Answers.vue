<script setup lang="ts">
import { ref, computed } from 'vue'
import allQuestions from '../content/questions'

const filter = ref('')

// Flatten questions for table
const tableData = computed(() => {
  return allQuestions.map((q, idx) => ({
    id: idx + 1,
    question: q.question,
    image: q.imagePromise ? q.imagePromise : null,
    answers: q.answers.join(' | '),
    correct: q.answers[q.correctAnswerIndex] ?? 'unknown',
    category: q.category || '',
  })).filter(row => {
    if (!filter.value) return true
    const f = filter.value.toLowerCase()
    return (
      row.question.toLowerCase().includes(f) ||
      row.answers.toLowerCase().includes(f) ||
      row.correct.toLowerCase().includes(f) ||
      row.category.toLowerCase().includes(f)
    )
  })
})

const columns = [
  { key: 'id', label: '#', sortable: true },
  { key: 'question', label: 'Question', sortable: true },
  { key: 'image', label: 'Image', sortable: false },
  { key: 'answers', label: 'Answers', sortable: false },
  { key: 'correct', label: 'Correct Answer', sortable: true },
  { key: 'category', label: 'Category', sortable: true },
]
</script>

<template>
  <div class="container mx-auto p-8 max-w-6xl">
    <div class="mb-4 flex items-center gap-4">
      <UInput v-model="filter" placeholder="Filter questions..." class="w-96" />
    </div>
    <UTable
      :columns="columns"
      :rows="tableData"
      :sort="{ column: 'id', direction: 'asc' }"
      sticky-header
      class="max-h-[80vh] overflow-auto"
    >
      <template #cell(image)="{ row }">
        <img v-if="row.image" :src="row.image.default" alt="Question image" class="max-h-24 rounded mx-auto" />
      </template>
    </UTable>
  </div>
</template>

<style scoped>
th {
  position: sticky;
  top: 0;
  background: white;
  z-index: 2;
}
</style>
