<script>
    import { onMount } from 'svelte';

    export let id = '';

    let comp = null;

    onMount(function () {
        fetch(`/competitor/${id}`, {method:'GET'}).then(function(data) {
            comp = data.body;
            console.log(comp);
        })
    });
</script>

<style src="./style.scss">

</style>

<div>
{#if comp != null}
    <div>
    {comp.name}
    {comp.phone}
    </div>
{:else}

<p> Loading </p>
{/if}
</div>

