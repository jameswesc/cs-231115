import { get, writable } from 'svelte/store'

export const PARAMS = {
    size: 1024,
    buffer: 10,
}

export const params = writable(PARAMS)

export const getParams = () => get(params)
