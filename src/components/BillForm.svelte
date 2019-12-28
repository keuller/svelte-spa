
<script>
    import { createEventDispatcher } from 'svelte'
    import Field from './FormField.svelte'

    export let opened = false

    const trigger = createEventDispatcher()

    let form = { description: '', dueDate:'', value: 0.0 }
    let modalClass = "modal"

    $: modalClass = (opened ? "modal is-active" : "modal")

    function save() {
        trigger('save', { form })
        form = { description: '', dueDate:'', value: 0.0 }
    }

    function cancel() {
        form = { description: '', dueDate:'', value: 0.0 }
        trigger('form', { show: false })
    }
</script>

<div class={modalClass}>
    <div class="modal-background"></div>
    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">Register New Bill</p>
            <button class="delete" on:click={() => cancel()}></button>
        </header>
        <section class="modal-card-body">
            <form>
                <Field label="Description">
                    <input type="text" class="input" bind:value={form.description} />
                </Field>
                <Field label="Due Date">
                    <input type="text" class="input" bind:value={form.dueDate} />
                </Field>
                <Field label="Value $">
                    <input type="text" class="input" bind:value={form.value} />
                </Field>
            </form>
        </section>
        <footer class="modal-card-foot">
            <button class="button is-primary" type="button" on:click={() => save()}>Salve</button>
            <button class="button" on:click={() => cancel()}>Cancel</button>
        </footer>
    </div>
</div>
