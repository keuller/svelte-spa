
<script>
    import AppMenu from '../components/AppMenu.svelte'
    import Home from './Home.svelte'
    import BigBangTheory from './BigBangTheory.svelte'
    import Financial from './Financial.svelte'
    import StarWars from './StarWars.svelte'
    import Router from './Router.svelte'

    const routes = [
        { path: '/', component: Home },
        { path: '/sample1', component: BigBangTheory },
        { path: '/sample2', component: Financial },
        { path: '/sample3', component: StarWars }
    ]
</script>

<main>
    <AppMenu />
    <div class="hero">
        <Router routes={routes} index={Home} />
    </div>
</main>
