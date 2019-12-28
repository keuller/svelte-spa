
<script>
    export let data = {}
</script>

<article class="media">
    {#if data.name}
    <figure class="media-left">
        <img alt="" src={data.picture} class="image" width="320" />
    </figure>
    <div class="media-content">
        <p class="title is-4">{data.name}</p>
    </div>
    {/if}
</article>
