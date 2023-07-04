<!-- +page.svelte -->
<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import type IUsuario from "$lib/interfaces/IUsuario";
    import { inputValueStore } from "../store/store";

    let usuarioFromStore: string | IUsuario; // Variável para armazenar o valor atual da store

    // Use a função subscribe para obter o valor atual da store
    inputValueStore.subscribe((value) => {
        usuarioFromStore = value;
    });
</script>

<Navbar />
<div class="container mx-auto h-full flex justify-center">
    {#if usuarioFromStore && typeof usuarioFromStore === "object"}
        <Card usuario={usuarioFromStore} />
    {/if}
</div>
