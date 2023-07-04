<!-- Card.svelte -->
<script lang="ts">
    import { onMount } from "svelte";
    import { afterUpdate } from "svelte";

    import type IUsuario from "$lib/interfaces/IUsuario";
    import CardHeader from "./CardHeader.svelte";

    export let usuario: IUsuario | null = null;
    let repositorios: { name: string; url: string }[] = [];

    // Função para fazer a requisição fetch dos repositórios do usuário
    async function fetchRepositorios(login: string) {
        try {
            const response = await fetch(
                `https://api.github.com/users/${login}/repos?sort=created&per_page=5`
            );

            if (!response.ok) {
                throw new Error("Falha ao obter os repositórios do usuário");
            }

            const data = await response.json();
            repositorios = data.map((repo: any) => ({
                name: repo.name,
                url: repo.html_url,
            }));
        } catch (error) {
            console.error(error);
        }
    }

    // Faz a requisição dos repositórios.
    onMount(() => {
        if (usuario) {
            fetchRepositorios(usuario.login);
        }
    });

    afterUpdate(() => {
        if (usuario) {
            fetchRepositorios(usuario.login);
        }
    });
</script>

{#if usuario != null}
    <div class="card card-side bg-base-300 shadow-xl max-w-3xl mt-16">
        <CardHeader />
        <div class="avatar items-center p-8">
            <a href={usuario.html_url} target="_blank" rel="noopener">
                <div
                    style="background-image: url({usuario.avatar_url});background-size: cover;"
                    class="w-40 h-40 rounded-full ring ring-emerald-600 ring-offset-base-100 ring-offset-2"
                />
            </a>
        </div>
        <div class="card-body">
            <h1 class="card-title text-2xl font-mono text-amber-400 flex">
                {usuario.name}
            </h1>
            <div class="flex pt-5">
                <ul class="list-none pr-10">
                    <li class="bold list-none opacity-50">Information:</li>
                    <li class="font-light">
                        <span class="font-semibold text-amber-600">User:</span>
                        {usuario.login}
                    </li>
                    <li class="font-light">
                        <span class="font-semibold text-amber-600"
                            >Repositories:</span
                        >{" "}
                        {usuario.public_repos}
                    </li>
                    <li class="font-light">
                        <span class="font-semibold text-amber-600"
                            >Followers:</span
                        >{" "}
                        {usuario.followers}
                    </li>
                </ul>
                <!-- Ultimos 5 repositorios -->
                <ul class="list-none">
                    <li class="bold list-none opacity-50">Repositories:</li>
                    {#each repositorios as repositorio}
                        <li class="hover:text-blue-500">
                            <a
                                href={repositorio.url}
                                target="_blank"
                                rel="noopener"
                                class="flex"
                            >
                                {repositorio.name}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
{/if}
