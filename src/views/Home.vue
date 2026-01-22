
<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import questions from '../content/earthquakes1'

const current = ref(0)
const selected = ref<number | null>(null)
const showAnswer = ref(false)
const imageSrc = ref<string | null>(null)

const question = computed(() => questions[current.value])

// Load image when question changes
async function loadImage() {
  const q = questions[current.value]
  if (q?.imagePromise) {
    const module = await q.imagePromise
    imageSrc.value = module.default
  } else {
    imageSrc.value = null
  }
}

// Initialize on mount and when question changes
loadImage()
watch(current, loadImage)

function selectAnswer(idx: number) {
  if (showAnswer.value) return
  selected.value = idx
  showAnswer.value = true
}

function nextQuestion() {
  selected.value = null
  showAnswer.value = false
  current.value = (current.value + 1) % questions.length
}
</script>

<template>
  <div class="container mx-auto p-8 max-w-2xl">
    <UCard>
      <template #header>
        <h2 class="text-xl font-bold">{{ question?.question }}</h2>
      </template>
      
      <div v-if="imageSrc" class="mb-6">
        <img :src="imageSrc" alt="Question image" class="max-h-96 mx-auto rounded" />
      </div>
      
      <div class="space-y-3">
        <UButton
          v-for="(ans, idx) in question?.answers"
          :key="idx"
          block
          size="lg"
          :variant="showAnswer 
            ? (idx === question?.correctAnswerIndex ? 'soft' : (selected === idx ? 'soft' : 'ghost'))
            : 'solid'"
          :color="showAnswer 
            ? (idx === question?.correctAnswerIndex ? 'primary' : (selected === idx ? 'red' : 'gray'))
            : 'gray'"
          @click="selectAnswer(idx)"
          :disabled="showAnswer"
        >
          {{ ans }}
        </UButton>
      </div>
      
      <template #footer v-if="showAnswer">
        <div class="flex items-center justify-between">
          <span v-if="selected === question?.correctAnswerIndex" class="font-semibold">✓ Correct!</span>
          <span v-else class="font-semibold">✗ Incorrect. The correct answer is {{ question?.answers[question?.correctAnswerIndex] }}.</span>
          <UButton @click="nextQuestion">Next</UButton>
        </div>
      </template>
    </UCard>
  </div>
</template>

<style scoped>
</style>
