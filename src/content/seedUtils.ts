// src/content/seedUtils.ts
import { useUrlSearchParams } from '@vueuse/core'

// Deterministic PRNG (mulberry32)
export function mulberry32(seed: number) {
  return function() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

export function getSeedFromQuery(): number {
  const params = useUrlSearchParams('hash')
  const n = Number(params.seed)
  // If seed is 0, do not shuffle
  return Number.isFinite(n) && n >= 0 ? Math.floor(n) : 42
}

export function seededShuffle<T>(array: T[], seed: number): T[] {
  if (seed === 0) return array.slice();
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
