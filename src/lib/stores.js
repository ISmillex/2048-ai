import { writable } from 'svelte/store';

export const game2048 = writable({
    board: [],
    score: 0,
})
