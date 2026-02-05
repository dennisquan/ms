<script setup lang="ts">
import { ref, computed, onMounted, h } from 'vue'

import allQuestions from '../content/questions'
import { getSeedFromQuery, seededShuffle } from '../content/seedUtils'


const filter = ref('')
const loadedImages = ref<Map<number, string>>(new Map())

const seed = getSeedFromQuery()
const orderedQuestions = seededShuffle(allQuestions, seed)

onMounted(async () => {
  // Load all images using same logic as Home.vue
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

const tableData = computed(() => {
  return orderedQuestions.map((q, idx) => ({
    id: idx + 1,
    question: q.question,
    image: loadedImages.value.get(idx) || null,
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
  { accessorKey: 'id', label: '#', sortable: true },
  {
    accessorKey: 'question',
    label: 'Question',
    sortable: true,
    cell: ({ row }: { row: { getValue: (key: string) => unknown } }) =>
      h(
        'div',
        { class: 'text-left whitespace-normal break-words', style: 'max-width: 400px;' },
        row.getValue('question') as string
      ),
  },
  {
    accessorKey: 'image',
    label: 'Image',
    sortable: false,
    cell: ({ row }: { row: { getValue: (key: string) => unknown } }) => {
      const src = row.getValue('image') as string | null
      if (!src) {
        return h('span', { class: 'text-gray-400 text-sm' }, '-')
      }
      return h('img', {
        src,
        alt: 'Question image',
        class: 'max-h-24 max-w-32 rounded mx-auto',
      })
    },
  },
  {
    accessorKey: 'answers',
    label: 'Answers',
    sortable: false,
    cell: ({ row }: { row: { getValue: (key: string) => unknown } }) =>
      h(
        'div',
        { class: 'whitespace-normal break-words', style: 'max-width: 300px;' },
        row.getValue('answers') as string
      ),
  },
  { accessorKey: 'correct', label: 'Correct Answer', sortable: true },
  { accessorKey: 'category', label: 'Category', sortable: true },
]
</script>

<template>
  <div class="flex flex-col h-screen relative overflow-x-hidden">
    <div class="sticky top-0 shrink-0 p-4">
      <UInput v-model="filter" placeholder="Filter questions..." class="w-96" />
    </div>
    <UTable
      :columns="columns"
      :data="tableData"
      :sort="{ column: 'id', direction: 'asc' }"
      :ui="{
        wrapper: 'grow overflow-auto',
        thead: 'sticky top-0',
      }"
    />
  </div>
</template>

<style scoped>
.text-left {
  text-align: left;
}
</style>
