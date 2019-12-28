<script>
    import Box from '../components/Box.svelte'
    import BillHeader from '../components/BillHeader.svelte'
    import BillList from '../components/BillList.svelte'
    import BillForm from '../components/BillForm.svelte'
    import store from '../data/financial.js'

    let total_billing = 0.0
    let form_show = false

    function onForm(event) {
        form_show = event.detail.show
    }

    function onSave(event) {
        form_show = false
        store.addBill(event.detail.form)
    }

    function onPaid(event) {
        store.markPaid(event.detail.id)
    }

    function onRemove(event) {
        store.removeBill(event.detail.id)
    }
</script>

<Box>
    <h4 class="title is-4">My Financial</h4>

    <section class="section is-paddingless">
        <div class="container is-fluid is-marginless">
            <BillHeader on:form={onForm} balance={$store.total} />
            <hr/>
            <BillList data={$store.bills} on:paid={onPaid} on:remove={onRemove} />
        </div> 
    </section>

    <BillForm on:form={onForm} on:save={onSave} opened={form_show} />
</Box>
