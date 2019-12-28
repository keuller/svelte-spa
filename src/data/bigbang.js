import { writable } from 'svelte/store'

const people = [
    { id: '4536', name: 'Sheldon Cooper', picture: 'img/sheldon.jpeg' },
    { id: '7821', name: 'Leonard Hofstadter', picture: 'img/leonard.jpg' },
    { id: '9036', name: 'Howard Wolowitz ', picture: 'img/howard.jpg' },
    { id: '1430', name: 'Rajesh Koothrappali', picture: 'img/rajesh.jpg' },
    { id: '8531', name: 'Penny', picture: 'img/penny.jpg' }
]

function character() {
    const { subscribe, update, set } = writable({})

    return {
        subscribe,
        clean: () => set({}),
        select: (value) => update(current => people.filter(person => person.id == value)[0]),
        all: () => [...people]
    }

}

export default character()
