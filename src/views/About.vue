<script setup lang="ts">
</script>

<template>
  <div class="container mx-auto p-8">
    <h1 class="text-4xl font-bold mb-4">About Page</h1>
    <UCard class="mb-4">
      <template #header>
        <h2 class="text-2xl font-semibold">Technologies Used</h2>
      </template>
      <p class="mb-4">This is a Vue 3 + TypeScript application using:</p>
      <ul class="list-disc list-inside space-y-2">
        <li>Vite - Fast build tool</li>
        <li>Vue Router - Client-side routing</li>
        <li>Nuxt UI 4.4 - UI component library</li>
        <li>TailwindCSS - Utility-first CSS framework</li>
        <li>pnpm - Package manager</li>
      </ul>
    </UCard>
    
    <UButton to="/" icon="i-heroicons-arrow-left">Back to Home</UButton>
  </div>
</template>

<style scoped>
</style>
