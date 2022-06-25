import { writable } from 'svelte/store';

export const focusedRecord = writable('');

export var query = writable('');