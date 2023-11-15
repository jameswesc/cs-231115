import { Smush32 } from '@thi.ng/random'
import { derived, writable } from 'svelte/store'

export const seed = writable(0)

export const rand = derived(seed, ($seed) => new Smush32($seed))
