<script>
    import { onMount } from 'svelte'
    import { fetchData } from '../data/starwars.js'
    import Box from '../components/Box.svelte'

    let fetching = {}
    let people = []

    onMount(() => fetching = fetchData())

    function get(list) {
        if (list) people = [...list]
    }
</script>

<Box>
    <h4 class="title is-4">Star Wars Characters</h4>
    {#await fetching}
    <h5 class="title is-5">Loading data...</h5>
    {:then data}
        <span class="is-hidden">{get(data.results)}</span>
        <ul class="list">
        {#each people as person}
            <li class="list-item">{person.name}</li>
        {/each}
        </ul>
    {:catch error}
    <p>Error: {error.message}</p>
    {/await}
</Box>
