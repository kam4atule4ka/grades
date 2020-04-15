<script>
    import { onMount } from 'svelte';
    export let id = '';
    export let phone = '';


    let comp = null;
    onMount(function () {
        console.log(id, phone);
        fetch(`/competitor/${id}`, {method:'GET'}).then(function(data) {
            comp = data.body;
            console.log(comp);
        })
    });

</script>

<style src="./style.scss">

</style>

<div>

</div>

