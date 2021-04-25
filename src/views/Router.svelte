
<script>
    import { createHashHistory } from 'history'
    export let routes = []
    export let index = null

    let component = null

    const router = createHashHistory({
        forceRefresh: true,
        getUserConfirmation: null
    })

    router.listen((location, action) => {
        component = selectView(location.location.pathname)
        // ${location.pathname}${location.search}
        // console.log(`The last navigation action was ${action}`)
    })

    function selectView(path) {
        let route = routes.filter(item => item.path == path)
        if (route.length == 0) return index
        return route[0].component
    }

    component = selectView(window.location.hash.substr(1))

    export function navigate(uri) {
        return () => router.push(uri, {})
    }
</script>

<svelte:component this={component} />
