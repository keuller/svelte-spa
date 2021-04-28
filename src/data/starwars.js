
const baseApi = 'https://swapi.dev/api'

const headers = {
    method: 'GET',
    cache: 'default'
}

export async function fetchData() {
    const request = await fetch(`${baseApi}/people`, headers)
    return request.json()
}
