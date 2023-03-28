import { atom } from 'nanostores'

export const count = atom<number>(0)

// Actions

export function increment() {
  count.set(1 + count.get())
}

export function decrement() {
  const current = count.get()
  if (current > 0) count.set(current - 1)
}
