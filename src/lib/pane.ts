import { onMount } from 'svelte'
import { writable } from 'svelte/store'
import { Pane } from 'tweakpane'

export const pane = writable<Pane>()

export const initPane = () => pane.set(new Pane())

export const mountPane = () => onMount(initPane)
