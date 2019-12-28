
<script>
    import { createEventDispatcher } from 'svelte'

    export let data = {}
    
    const trigger = createEventDispatcher()
    const label = (paid) => (paid ? 'bill-paid' : '')

    function update(value) {
        trigger('paid', { id: value })
    }

    function remove(value) {
        trigger('remove', { id: value })
    }
</script>

<div class="columns is-gapless">
    <div class="column has-text-centered">
        <input type="checkbox" on:change={(ev) => update(data.id)} bind:checked={data.paid} />
    </div>
    <div class="column is-2 has-text-centered">
        <span class={label(data.paid)}>{data.dueDate}</span>
    </div>
    <div class="column is-6">
        <span class={label(data.paid)}>{data.description}</span>
    </div>
    <div class="column is-2 has-text-right">
        <span class={label(data.paid)}>$ {parseFloat(data.value).toFixed(2)}</span>
    </div>
    <div class="column has-text-centered">
        {#if data.paid}
        <button class="delete" on:click={(ev) => remove(data.id)}></button>
        {/if}
    </div>
</div>
