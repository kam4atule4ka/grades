<script>
    import { onMount } from 'svelte';
    import { navigate } from "svelte-routing";

    export let id = '';
    let comp = null;
    let name = '';
    let phone = '';

    onMount(function () {
        fetch(`/competitor/${id}`, {method:'GET'}).then(function(data) {
            comp = data.body;
            name = comp.name;
            phone = comp.phone;
            console.log(comp);
        })
    });

    function change () {
        fetch('/change', {method:'POST', props:{id, name, phone}}).then(function(data) {
            console.log(id, name, phone);
        });
    }

    function back () {
        navigate('/');
    }

</script>

<style src="./style.scss">

</style>

<div class = "competitor">
{#if comp != null}
    <form on:submit|preventDefault={change}>
        <input bind:value={name} type=text  required/>
        <input bind:value={phone} type=text required/>
        <p></p>
        <button class="competitor__button" type="submit">Сохранить</button>
    </form>
    <p>{comp.cvUrl} {comp.comments}</p>
    <button on:click={back}>Назад</button>
{:else}
    <p> Loading </p>
{/if}
</div>

