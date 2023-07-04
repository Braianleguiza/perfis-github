<script lang="ts">
    import Icon from "svelte-icons-pack";
    import BsGithub from "svelte-icons-pack/bs/BsGithub";
    import BsLinkedin from "svelte-icons-pack/bs/BsLinkedin";
    import Form from "./Form.svelte";
</script>

<div class="navbar bg-base-300">
    <div class="navbar-start">
        <div class="dropdown">
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label tabindex="0" class="btn btn-ghost btn-circle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h7"
                    /></svg
                >
            </label>
            <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
            <ul
                tabindex="0"
                class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
                <li>
                    <a href="https://my-personal-portfolio-nine.vercel.app/"
                        >Homepage</a
                    >
                </li>
                <li>
                    <a
                        href="https://my-personal-portfolio-nine.vercel.app/portfolio"
                        >Portfolio</a
                    >
                </li>
                <li>
                    <a
                        href="https://my-personal-portfolio-nine.vercel.app/contact"
                        >Contact</a
                    >
                </li>
            </ul>
        </div>
    </div>
    <div class="navbar-center">
        <span class="text-xl pr-4 font-semibold">GitHub Perfis</span>
        <Form />
    </div>
    <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
            <Icon size="24" color="#A6ADBA" src={BsGithub} />
        </button>
        <button class="btn btn-ghost btn-circle">
            <div class="indicator">
                <Icon size="24" color="#A6ADBA" src={BsLinkedin} />
            </div>
        </button>
    </div>
</div>
