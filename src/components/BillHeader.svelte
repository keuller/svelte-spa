<script>
    import { createEventDispatcher } from 'svelte'

    export let balance = 0.0

    const trigger = createEventDispatcher()
    
    function createBill() {
        trigger('form', { show: true })
    }
</script>

<div class="columns">
    <div class="column">
        <button class="button is-primary" on:click={() => createBill()}>New Bill</button>
    </div>
    <div class="column has-text-right">
        <span class="title is-4">Total Balance $ {balance.toFixed(2)}</span>
    </div>
</div>
