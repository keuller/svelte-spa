
<script>
    import BillItem from './BillListItem.svelte'
    export let data = []
</script>

<div class="section is-paddingless">
    <div class="container is-fluid is-marginless">
        {#each data as bill}
        <BillItem data={bill} on:paid on:remove />
        {/each}
    </div>
</div>
