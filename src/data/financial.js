import { writable } from 'svelte/store'

const { subscribe, update } = writable({
    total: 0.0,
    bills: []
})

function addBill(bill) {
    bill.id = Date.now()
    bill.paid = false

    update(current => {
        let { total, bills } = current
        total += parseInt(bill.value)
        bills = [...bills, bill]
        return { total, bills }
    })
}

function markPaid(id) {
    update(state => {
        let { total, bills } = state
        let record = bills.filter(bill => bill.id == id)
        if (record.length < 1) return

        record[0].paid = !record[0].paid
        total = (record[0].paid) ? total - parseInt(record[0].value) : total + parseInt(record[0].value)
        bills = bills.filter(bill => bill.id != id)
        return { total, bills: [...bills, ...record] }
    })
}

function removeBill(id) {
    update(state => {
        let { total, bills } = state
        let record = bills.filter(bill => bill.id == id)
        if (record.length < 1) return
        
        bills = bills.filter(bill => bill.id != id)
        return { total, bills }
    })
}

export default {
    subscribe,
    addBill,
    removeBill,
    markPaid
}
