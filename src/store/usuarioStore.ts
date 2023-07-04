// store.ts
import { writable } from "svelte/store";
import type IUsuario from "$lib/interfaces/IUsuario";

export const usuarioStore = writable<IUsuario | null>(null);
