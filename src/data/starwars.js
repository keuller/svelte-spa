
const baseApi = 'https://swapi.co/api'

const headers = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
}

export async function fetchData() {
    const request = await fetch(`${baseApi}/people`, headers)
    return request.json()
}
