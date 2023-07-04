// store.ts
import type IUsuario from '$lib/interfaces/IUsuario';
import { writable } from 'svelte/store';

export const inputValueStore = writable<string | IUsuario>('');

