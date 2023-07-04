<script lang="ts">
    import Icon from "svelte-icons-pack";
    import FiSearch from "svelte-icons-pack/fi/FiSearch";
    import { createEventDispatcher } from "svelte";
    import { inputValueStore } from "../../store/store";
    import type IUsuario from "$lib/interfaces/IUsuario";

    const dispatch = createEventDispatcher();

    async function handleSubmit(event: Event) {
        event.preventDefault();

        // Obtenha o valor do input do campo de pesquisa
        const inputElement = event.target as HTMLFormElement;
        const formData = new FormData(inputElement);
        const valorInput = formData.get("search") as string;

        if (valorInput.trim().length > 0) {
            try {
                // Faz a requisição fetch para a API do GitHub
                const response = await fetch(
                    `https://api.github.com/users/${valorInput}`
                );
                if (!response.ok) {
                    throw new Error("Usuário não encontrado");
                }

                const usuario = (await response.json()) as IUsuario;

                inputValueStore.set(usuario);
                dispatch("valor-valido", usuario);
            } catch (error) {
                console.error(error);
            }
        } else {
            console.log("Valor inválido");
        }
    }
</script>

<form class="join" on:submit={handleSubmit}>
    <div>
        <div>
            <input
                type="text"
                name="search"
                class="input input-bordered join-item"
                placeholder="Search..."
            />
        </div>
    </div>
    <div class="indicator">
        <button type="submit" class="btn btn-success join-item">
            <Icon src={FiSearch} /> Search
        </button>
    </div>
</form>
