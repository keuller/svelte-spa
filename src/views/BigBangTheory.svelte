<style scoped></style>

<script>
    import Box from '../components/Box.svelte'
    import Character from '../components/Character.svelte'
    import store from '../data/bigbang.js'

    let people = store.all()
</script>

<Box>
    <h4 class="title is-4">Big Bang Theory</h4>

    <p class="button-group">
        <button class="button is-light is-rounded" on:click={() => store.clean()}>Clean</button>
        &nbsp;&nbsp;
        {#each people as person}
        <button class="button is-primary is-rounded" on:click={() => store.select(person.id)}>{person.name}</button>
        {/each}
    </p>

    <Character data={$store} />
</Box>
